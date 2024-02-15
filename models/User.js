const { Schema, model } = require('mongoose');
const friendSchema = require('./Friend');
const thoughtSchema = require('./Thought');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    friends: [friendSchema,
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

//GET FRIEND COUNT
// Create a virtual property `friendCount` that gets and sets the user's friend count
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return `Total Friends: ${this.friends.length}`;
  });

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;