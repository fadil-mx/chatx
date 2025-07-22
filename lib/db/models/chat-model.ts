import { Document, model, models, Schema } from 'mongoose'

const chatSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
    },
    model: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

const Chat = models.Chat || model('Chat', chatSchema)

export default Chat
