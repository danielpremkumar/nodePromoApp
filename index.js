var oracledb = require("oracledb");
const justice = require("./oracleConfig");
const query = require("./promoQuery");
oracledb.poolMax = 1;
oracledb.getConnection(justice, function(err, connection) {
  if (err) {
    console.error(err);
    return;
  }
  connection.execute(query, function(err, result) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(result.rows);
  });
});
