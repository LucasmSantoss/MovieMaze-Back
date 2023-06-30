import  Reaction  from "../../models/Reaction.js"

async function oppositeReaction(req, res, next) {
    try {
        switch (req.body.name) {
            case "like":
                const reaction1 = await Reaction.findOne({movie_id: req.body.movie_id, name:"dislike"})
                if(reaction1){
                    await Reaction.findOneAndDelete({_id: reaction1._id})
                }
                break;
            case "dislike":
                const reaction2 = await Reaction.findOne({movie_id: req.body.movie_id, name:"like"})
                if(reaction2){
                    await Reaction.findOneAndDelete({_id: reaction2._id})
                }
                break;
            case "surprise":
                const reaction3 = await Reaction.findOne({movie_id: req.body.movie_id, name:"love"})
                if(reaction3){
                    await Reaction.findOneAndDelete({_id: reaction3._id})
                }
                break;
            case "love":
                const reaction4 = await Reaction.findOne({movie_id: req.body.movie_id, name:"surprise"})
                if(reaction4){
                    await Reaction.findOneAndDelete({_id: reaction4._id})
                }
                break;
        }
        
        next()
    } catch (err) {
        next(err)
    }
}
export default oppositeReaction