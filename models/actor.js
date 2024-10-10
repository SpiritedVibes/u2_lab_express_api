const {Schema} = require(`mongoose`)

const actorSchema = new Schema(
    {
        name: {type: String, required: true},
        age: {type: String, required: true},
        living: {type: Boolean, required: true},
    },
    {timestamps: true}
)

module.exports = actorSchema