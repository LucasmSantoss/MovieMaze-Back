import {Author} from '../../models/Author.js'

const controller = {
    create: async(req,res,next) => {
        // req.body.user_id = "6400e1c1de3abf200587e13c"
        const { user } = req
        req.body.user_id = user._id
        req.body.active = false
        try{
            await Author.create(req.body)
            return res.status(200).json({
                success: true,
                message: 'New author created succesfully, please wait to be activated by an administrator',
                data: req.body
            })
        }catch(error){
            next(error)
        }
    }
}

export default controller