const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userModel = require("../models/user.js");

const secretKey = 'CDDPMWJ-EYEZXNC-2K39BYN';

const register = async (req, res) => {
    const { full_name, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await userModel.create({ full_name, email, password: hashedPassword });

        const token = jwt.sign({ email: result.email, id: result._id }, secretKey, { expiresIn: "1h" });

        res.status(201).json({ result, token })
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({ message: 'User already exists' })
        } else {
            res.status(500).json({ message: error.message });
        }
    }
};


const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.findOne({ email })

        if (!user) return res.status(404).json({ message: "User doesn't exist" })

        const comparePassword = await bcrypt.compare(password, user.password)

        if (!comparePassword) return res.status(404).json({ message: "Invalid credentials" })

        const token = jwt.sign({ email: user.email, id: user._id }, secretKey, { expiresIn: "1h" })

        res.status(200).json({ result: user, token })
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        console.log(error);
    }
}

module.exports = {
    'register': register,
    'login': login,
}