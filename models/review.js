const {Schema} = require(`mongoose`)

const reviewSchema = new Schema(
    {
        score: {type: Number, required: true, min:1, max:10},
        comment: {type: String, required: true},
        movie: { type: Schema.Types.ObjectId, ref: 'Movie', required: true }
},
    
    {timestamps: true}
)

module.exports = reviewSchema