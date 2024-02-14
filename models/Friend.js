const { Schema, Types } = require('mongoose');

const friendSchema = new Schema(
  {
    friendId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    friendName: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = friendSchema;
