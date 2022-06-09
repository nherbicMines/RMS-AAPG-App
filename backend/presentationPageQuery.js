const { Request } = require("tedious");
var TYPES = require('tedious').TYPES;

module.exports = function presentationPageQuery(app, connection){
    app.get("/Presentations", (req, res) => {

        const request = new Request (
            `SELECT Title, Name, Time FROM presentations`, 

            (err, rowCount) => {
                if(err){
                    console.error(err.message);
                }else{
                    console.log(`${rowCount} row(s) returned`);
                }
            }
        );
        connection.execSql(request);
    });
}