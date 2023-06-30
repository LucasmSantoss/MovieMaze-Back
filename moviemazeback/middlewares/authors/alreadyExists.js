import { Author } from "../../models/Author.js"

async function alreadyExists(req, res, next) {
    const author = await Author.findOne({ user_id: req.user._id })
    if (author) {
        if (author.active) {
            return res.status(400).json({
                success: false,
                message: 'You are already an active author'
            })
        } else {
            await Author.findOneAndUpdate(
                {_id: author._id},
                {active: true}
            )
            return res.status(200).json({
                success: true,
                message: "Welcome back "+author.name
            })
        }
    } else {
        next()
    }
}

export default alreadyExists