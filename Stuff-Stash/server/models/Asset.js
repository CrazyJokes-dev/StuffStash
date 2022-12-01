const mongoose = require('mongoose');
const assetSchema = new mongoose.Schema({
    //assets should have a identifier/name,
    identifier: {
        type: String,
        required: true,
        default: "NewAsset"
    },
    //a "type" (ie, laptop, projector, monitor, etc),
    category: {
        type: String
    },
    //a way to identify availability. accepts a string containing the username of the individual 
    //currently using the username of the individual using the asset,
    isAvailable: {
        type: String,
        required: true
    },
    //a variable to note the condition of an asset,
    condition: {
        type: String,
        default: "mint",
        required: true
    },
    serialCode: {
        type: String,
    },
    //and a variable to store the warranty date. 
    //using a string for now until a better solution presents itself
    warranty: {
        type: String
    }
})

module.exports = mongoose.model('assets', assetSchema);
