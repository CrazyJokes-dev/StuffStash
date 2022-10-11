const Stockroom = require('..models/stockroom.js');

exports.createStockroom = async (req, res, next) => {
    //attempt to create a stockroom
    try{
        const stockroom = await Stockroom.create(req.body);
        return res.status(201).json({
            success: true,
            data: stockroom
        })
        }
    //if that fails, go through this 
    catch(err){
        if(err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message)
            return res.status(400).json({
                success: false,
                error: messages
            })
        }
        else{
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            })
        }
    } 
}