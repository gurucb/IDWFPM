const express = require("Express");
const prices =  require('./dbProvider')

const Router = express.Router()

Router.route('/') 
.get(async (req, res, next) => {
    try{

        const {rows} = await prices.GetRecommendedPrices();
        console.log(rows)
        res.send(rows);
    }
    catch(err){
        res.status(500).send(err)
    }
}); 
  
module.exports = Router