const express = require('express')
const app = express()
const { Connection, Request } = require("tedious");
const fs = require('fs');
const cors = require('cors')
var TYPES = require('tedious').TYPES;

app.use(cors());
app.use(express.json());

// Create connection to database
const config = {
  authentication: {
    options: {
      userName: "pcjadmin",
      password: "Gopcj12345"
    },
    type: "default"
  },
  server: "pcjserver.database.windows.net", 
  options: {
    database: "pcj",
    encrypt: true
  }
};
const connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on("connect", err => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Connected!");
  }
});

connection.connect();


// User Info Query
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

app.listen(3001, ()=> {
  console.log("Please work")
})






/*    OLD CODE -- MAY RETURN TO IT IF THIS GETS TOO FUCKY
================================================
const { Connection, Request } = require("tedious");

// Create connection to database
const config = {
  authentication: {
    options: {
      userName: "pcjadmin",
      password: "Gopcj12345"
    },
    type: "default"
  },
  server: "pcjserver.database.windows.net", 
  options: {
    database: "pcj",
    encrypt: true
  }
};



/* 
    //Use Azure VM Managed Identity to connect to the SQL database
    const config = {
        server: process.env["db_server"],
        authentication: {
            type: 'azure-active-directory-msi-vm',
        },
        options: {
            database: process.env["db_database"],
            encrypt: true,
            port: 1433
        }
    };

    //Use Azure App Service Managed Identity to connect to the SQL database
    const config = {
        server: process.env["db_server"],
        authentication: {
            type: 'azure-active-directory-msi-app-service',
        },
        options: {
            database: process.env["db_database"],
            encrypt: true,
            port: 1433
        }
    });



const connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on("connect", err => {
  if (err) {
    console.error(err.message);
  } else {
    queryDatabase();
  }
});

connection.connect();

function queryDatabase() {
  console.log("Reading rows from the Table...");

  // Read all rows from table
  const request = new Request(
    `SELECT * FROM users`,
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
}*/