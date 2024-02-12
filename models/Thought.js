const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');


// Schema to create Tought model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min: [1, 'Too few characters'],
            max: [280, 'Too many characters']
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        user: {
            type: String,
            required: true,
            type: Schema.Types.username,
            ref: 'reaction',
        },
        reactions: [Reaction],
    },
    {
        //NOT SURE IF I NEED THIS????
        // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
        // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// Create a virtual property `reactionCount` that gets and sets the user's reaction count
thoughtSchema
    .virtual('reactionCount')
    // Getter
    .get(function () {
        return `Reactions: ${this.reactions}`;
    });

// Initialize our User model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;