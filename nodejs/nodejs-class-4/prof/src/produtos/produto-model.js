import mongoose from 'mongoose'
const Schema = mongoose.Schema

const schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        default: 0.00
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    }
})

module.exports = mongoose.model('Produto', schema)