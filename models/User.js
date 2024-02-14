const { Schema, model } = require('mongoose');
const Friend = require('./Friend');

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
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Friend',
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