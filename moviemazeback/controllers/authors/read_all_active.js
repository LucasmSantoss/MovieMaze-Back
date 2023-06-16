import { Author } from '../../models/Author.js'

const controller = {

    read_all_active: async (req, res, next) => {
        try {
            let authorActive = await Author.find({ active: true })
            let authorInactive = await Author.find({ active: false })
            return res.status(200).json({
                success: true,
                authorActive,
                authorInactive,
            })
        } catch (error) {
            next(error);
        }
    }
}

export default controller