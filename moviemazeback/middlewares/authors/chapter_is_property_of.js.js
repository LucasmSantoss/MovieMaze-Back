import { Manga } from "../../models/Manga.js";
import { Chapter } from "../../models/Chapter.js";


async function chapter_is_property_of(req, res, next) {

    try {
        const chapter = await Chapter.findOne({
            _id: req.params.id
        });
        if (chapter) {
            const manga = await Manga.findOne({
                _id: chapter.manga_id,
                author_id: req.body.author_id,
            });
            if (manga) {
                return next();
            }
            return res.status(404).json({
                succes: false,
                message: "Manga is not property of the author",
            });
        } else {
            return res.status(404).json({
                succes: false,
                message: "Chapter not found",
            });
        }
    } catch (error) {
        next(error)
    }
}

export default chapter_is_property_of