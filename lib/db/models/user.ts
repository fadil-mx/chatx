import { UserValidator } from '@/types'
import { Document, model, models, Schema } from 'mongoose'

interface IUser extends Document,UserValidator {
    _id: string;
    createdAt: Date;
    updatedAt: Date;
} 

const UseSchema = new Schema<IUser>({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },

}
,{
    timestamps: true
})

const User=models.User || model<IUser>("User", UseSchema)

export default User