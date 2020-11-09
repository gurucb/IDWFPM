const {Connection, Request} = require('tedious')

const config = {
  authentication: {
  options: {
      userName:"idwadmin",
      password:"Pass@word123",
    
  },
  type: "default"
  },
  server: "idwcdcsvr.database.windows.net",
  options: {
  database: "IDWCDC",
  encrypt: true,
  validateBulkLoadParameters:false,
  rowCollectionOnRequestCompletion:true
  }
};


const getConnection = async() => {
  return new Promise((resolve,reject)=>{
    const connection = new Connection(config);
    connection.on('connect',(err) => {
      if(err){
        reject(err);
      }
      else{
        resolve(connection);
      }

    });
  });
}


const executeQuery = async (sql) => {
  return new Promise(async (resolve, reject) => {
    try {
      const connection =  await  getConnection();
      const request = new Request(sql, (err,rowCount,rows) => {
        if(err) {
          reject(err);
        }
        else {
          resolve({rowCount:rowCount,rows:rows})
        }
      });
      connection.execSql(request)
    }
    catch(err){
      reject(err);
    }
  });
};




module.exports.GetRecommendedPrices = async () => {
  const sql = `select 
  ItemId as Id,
  Model as Name,
  fi.Price as 'actualprice',
  rp.price as 'recommprice',
  getdate() as 'recommdate'
  from flipkartitems fi inner join RecommendedPrice rp 
  on cast(fi.ITEMID as varchar(100)) = cast(rp.ID1 as varchar(100)) for JSON AUTO
  `;
  return await executeQuery(sql)
}