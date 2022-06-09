const { Request } = require("tedious");
var TYPES = require('tedious').TYPES;

module.exports = function presentationPageQuery(app, connection){
    app.get("/Presentations", (req, res) => {

        // create a new request
        const request = new Request (
            `SELECT Title, Name, Time FROM presentations`,    

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
