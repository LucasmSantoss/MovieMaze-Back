import mongoose from 'mongoose'

const schema = new mongoose.Schema(
    {   
        name: {type: String, require: true},
        lastName: {type: String, require: true},
        mail: { type: String, require: true },
        password: { type: String, require: true },
        country: {type: String, require: true},
        is_online: { type: Boolean, require: true },
        is_admin: { type: Boolean, require: true },
        is_author: { type: Boolean, require: false },
        is_company: { type: Boolean, require: false },
        is_verified: { type: Boolean, require: true },
        verify_code: { type: String, require: true }
    },{
        timestamps: true
    }
)

export const User = mongoose.model('users',schema)