const assetSchema = new mongoose.schema({
    //assets should have a identifier/name,
    identifier: {
        type: String,
        required: true,
        unique: true
    },
    //a "type" (ie, laptop, projector, monitor, etc)
    category: {
        type: String,
        required: true
    },
    inUse: {

    }
})