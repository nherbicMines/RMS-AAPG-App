const { Request } = require("tedious");
var TYPES = require('tedious').TYPES;

module.exports = function userQuery(app, connection) {
    app.get("/Session", (req, res) => {
        const time = req.body.time;
        const day = req.body.day;
    
        const request = new Request(
            "SELECT * FROM presentations",
            (err, rowCount) => {
            if (err) {
                console.error(err.message);
            } else {
                console.log(`${rowCount} row(s) returned`);
            }
            }
        );
    
        request.addParameter('time', TYPES.VarChar, time);
        request.addParameter('day', TYPES.VarChar, day);
        connection.execSql(request);
        
    });
}
//"SELECT Title, Name, Number, Session, Time FROM presentations WHERE Day = @day AND Time LIKE '%@time%' AND Session = @session;"