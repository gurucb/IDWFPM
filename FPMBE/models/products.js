const tedious = require('tedious');

var ProductSchema = function(product)
{
    this.id = tedious.TYPES.id,
    this.name = tedious.TYPES.VarChar,
    this.actualPrice = tedious.TYPES.Decimal,
    this.recommPrice= tedious.TYPES.Decimal,
    this.recommDate = tedious.TYPES.DateTime
};

module.exports=ProductSchema