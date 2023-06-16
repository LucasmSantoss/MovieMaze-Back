import  Reaction  from '../../models/Reaction.js'

const controller = {
    create: async (req, res, next) => {
        try {
            req.body.user_id = req.user.id

            let reaction = await Reaction.find(req.body)
            if(reaction.length){
                await Reaction.findOneAndDelete(req.body)
                return res.status(200).json({
                    success: true,
                    message: "Reaction deleted"
                })
            }else{
                await Reaction.create(req.body)
                return res.status(200).json({
                    success: true,
                    message: "Reaction added"
                })
            }
        } catch (error) {
            next(error)
        }

    }
}

export default controller