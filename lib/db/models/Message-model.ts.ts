import { Document, model, models, Schema } from 'mongoose'

const messageSchema = new Schema(
  {
    chatId: {
      type: Schema.Types.ObjectId,
      ref: 'Chat',
      required: true,
    },
    role: {
      type: String,
    },
    content: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

const Message = models.Chat || model('Chat', messageSchema)

export default Message
