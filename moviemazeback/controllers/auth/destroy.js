import { User } from "../../models/User.js";

const controller = {
    destroy: async (req, res, next) => {
        try {
            let { id } = req.params
            let user = await User.findOneAndDelete(
                { _id: id },
            )
            if (user) {
                return res.status(200).json({
                    success: true,
                    message: 'User successfuly deleted',
                })
            } else {
                return res.status(404).json({
                    success: false,
                    message: "User not found"
                })
            }
        } catch (error) {
            next(error)
        }
    }
}

export default controller