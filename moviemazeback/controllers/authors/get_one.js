import {Author} from '../../models/Author.js'

const controller = {
    read_one: async(req,res,next) => {
        try{
            let author = await Author.findOne({_id: req.params.id})
            if(author){
                return res.status(200).json({
                    success: true,
                    author
                })
            }
            return res.status(404).json({
                success: false,
                message: "No authors found"
            })
        }catch(error){
            next(error)
        }
    }
}

export default controller