import { Author } from "../../models/Author.js";
import createError from 'http-errors';


const controller = {
  update: async (req, res, next) => {
    try {
      let author = await Author.findOneAndUpdate({ user_id: req.user }, req.body, { new: true })
      if (author) {
        return res.status(200).json({
          success: true,
          author,
        });
      }
      return next (createError(404, "not found" ));
    } catch (error) { 
      return next(createError(400, error ));
    }
  },
};

export default controller;
