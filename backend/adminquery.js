const { Request } = require("tedious");
var TYPES = require('tedious').TYPES;

const function adminQuery(app, connection){
    app.get("/Admin", (req, res) => {
        // create a new request
        const request = new Request (
        "SELECT * FROM ",    
      // throw err if query failed or display the res to the console
      (err, rowCount) => {
        if (err) {
            console.error(err.message);
        } else {
          console.log(`${rowCount} row(s) returned`);
        }
      }
  );    
    request.on("row", columns => {
      columns.forEach(column => {
        console.log("%s\t%s", column.metadata.colName, column.value);
      });
    });
    connection.execSql(request);
  });
}

module.exports.adminQuery