import {Category} from "../../models/Category.js"

const controller = {
    create: async(req,res,next) => {

        try{
            await Category.create(req.body)
            return res.status(200).json({
                success: true,
                message: 'New category created succesfully',
                data: req.body
            })
        }catch(error){
            next(error)
        }
    }
}

export default controller