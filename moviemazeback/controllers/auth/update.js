import { User } from '../../models/User.js'

const controller = {
    update: async (req, res, next) => {
        const { id } = req.params

        try {
            let user = await User.findByIdAndUpdate(
                id,
                req.body,
                { new: true }
            );
            if(user){
                return res.status(200).json({
                    success:true,
                    user,
                })
            }
        } catch (error) {
            next(error)
        }
    }
}

export default controller