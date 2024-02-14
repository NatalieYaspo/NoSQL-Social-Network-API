const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');


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
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        reactions: [reactionSchema],
    },
    // {
        // toJSON: {
    //         virtuals: true,
    //     },
    //     id: false,
    // }
);

// // Create a virtual property `reactionCount` that gets and sets the user's reaction count
// thoughtSchema
//     .virtual('getReaction')
//     // Getter
//     .get(function () {
//         return `Reactions: ${this.reactions}`;
//     });

// Initialize our User model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;