const { Request } = require("tedious");
var TYPES = require('tedious').TYPES;

module.exports = function userQuery(app, connection) {
    app.post("/UserInfo", (req, res) => {
        const firstName = req.body.firstName
        const lastName = req.body.lastName
        const company = req.body.company
        const email = req.body.email
    
        if (email == "deleteAll") {
        const request = new Request(
            `DELETE FROM users`,
            (err, rowCount) => {
            if (err) {
                console.error(err.message);
            } else {
                console.log(`${rowCount} row(s) returned`);
            }
            }
        );
        connection.execSql(request);
        } else {
        const request = new Request(
            `INSERT INTO users (first_name, last_name, company, email) VALUES (@first,@last,@comp,@email)`,
            (err, rowCount) => {
            if (err) {
                console.error(err.message);
            } else {
                console.log(`${rowCount} row(s) returned`);
            }
            }
        );
    
        request.addParameter('first', TYPES.VarChar, firstName);
        request.addParameter('last', TYPES.VarChar, lastName);
        request.addParameter('comp', TYPES.VarChar, company);
        request.addParameter('email', TYPES.VarChar, email);
        connection.execSql(request);
        }
    })
}