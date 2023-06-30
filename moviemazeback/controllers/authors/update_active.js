import { Author } from "../../models/Author.js";
import { User } from '../../models/User.js'
import createError from "http-errors";



const controller = {
    update_active: async (req, res, next) => {
        try {
            let author = await Author.findOneAndUpdate(
                { _id: req.params.id },
                { active: req.body.active },
                { new: true }
            )
            if (author) {
                let user = await User.findOneAndUpdate(
                    { _id: author.user_id },
                    { is_author: req.body.active },
                    { new: true }
                )
                return res.status(200).json({
                    success: true,
                    author,
                })
            } else {
                return res.status(404).json({
                    success: false
                })
            }
        } catch (error) {
            next();
        }
    }
}


export default controller;

