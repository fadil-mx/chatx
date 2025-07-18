import { Document, model, models, Schema } from 'mongoose'
const UseSchema = new Schema({
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

 export const User=models.User || model("User", UseSchema)