const {Schema} = require(`mongoose`)

const movieSchema = new Schema(
    {
        title: {type: String, required: true},
        runtime: {type: String, required: true},
        rating: {type: Number, required: true},
        yearReleased: {type: Number, required: true},
        description: {type: String, required: true},
        reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],  // Initialize reviews as an array of ObjectIds  //from chatGPT because i didnt think about it
        actors: [{ type: Schema.Types.ObjectId, ref: 'Actor' }] // Reference to the Actor model
  },

    {timestamps: true}
)

module.exports = movieSchema