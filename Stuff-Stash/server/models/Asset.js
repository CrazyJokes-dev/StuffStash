const mongoose = require('mongoose');
const assetSchema = new mongoose.Schema({
    //assets should have a identifier/name,
    identifier: {
        type: String,
        required: true,
        unique: true
    },
    //a "type" (ie, laptop, projector, monitor, etc),
    category: {
        type: String,
        required: true
    },
    //a way to identify availability
    isAvailable: {
        type: Boolean,
    }
})

module.exports = mongoose.model('assets', assetSchema);
