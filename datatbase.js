/*var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "EkeszBokesz",
    database: "users",
  });

  //database
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE users", function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });
  });

//tables,primary key
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE tanarok (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255), password VARCHAR(255))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("tanarok Table created");
    });
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE diakok (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255), password VARCHAR(255))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("diakok Table created");
    });
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE webmester (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255), password VARCHAR(255))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("webmester Table created");
    });
  });



//table,ha mar letezik
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table altered");
    });
  });


  //insert into tanarok
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO tanarok (username, password) VALUES ?";
    var values = [
      ['Tanar1', 'jelszo1'],
      ['Tanar2', 'jelszo2'],
      ['Tanar3', 'jelszo3'],
      ['Tanar4', 'jelszo4'],
      ['Tanar5', 'jelszo5'],
      ['Tanar6', 'jelszo6'],
      ['Tanar7', 'jelszo7'],
      ['Tanar8', 'jelszo8'],
      ['Tanar9', 'jelszo9'],
      ['Tanar10', 'jelszo10'],
      ['Tanar11', 'jelszo11'],
      ['Tanar12', 'jelszo12'],
      ['Tanar13', 'jelszo13'],
      ['Tanar14', 'jelszo14']
    ];
    con.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted into tanarok: " + result.affectedRows);
    });
  });

  //insert into diakok
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO diakok (username, password) VALUES ?";
    var values = [
        ['John', 'Highway'],
        ['Peter', 'Lowtret'],
        ['Amy', 'Apple'],
        ['Hannah', 'Mountain'],
        ['Michael', 'Valley'],
        ['Sandy', 'Ocean'],
        ['Betty', 'Green'],
        ['Richard', 'Sky'],
        ['Susan', 'Oneway'],
        ['Vicky', 'YellowGarden'],
        ['Ben', 'ParkLane'],
        ['William', 'Central'],
        ['Chuck', 'MainToad98'],
        ['Viola', 'Sideway33']
    ];
    con.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted into diakok: " + result.affectedRows);
    });
  });

  //insert into webmester
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO webmester (username, password) VALUES ?";
    var values = [
      ['webmester', 'mesterweb']
    ];
    con.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted into webmester: " + result.affectedRows);
    });
  });*/
  var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "EkeszBokesz",
    database: "users",
});

// Connect to the database
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    // Create database
    con.query("CREATE DATABASE IF NOT EXISTS users", function (err, result) {
        if (err) throw err;
        console.log("Database created or already exists");

        // Use the 'users' database
        con.query("USE users", function (err) {
            if (err) throw err;

            // Create tables
            var createTableQueries = [
                "CREATE TABLE IF NOT EXISTS tanarok (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255), password VARCHAR(255))",
                "CREATE TABLE IF NOT EXISTS diakok (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255), password VARCHAR(255))",
                "CREATE TABLE IF NOT EXISTS webmester (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255), password VARCHAR(255))",
            ];

            createTableQueries.forEach(function(query) {
                con.query(query, function (err, result) {
                    if (err) throw err;
                    console.log("Table created or already exists");
                });
            });

            // Alter table
            var alterTableQuery = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
            con.query(alterTableQuery, function (err, result) {
                if (err) throw err;
                console.log("Table altered or already has the column");
            });

            // Insert into tanarok
            var tanarokValues = [
                ['Tanar1', 'jelszo1'],
                // ... (other values)
            ];
            con.query("INSERT INTO tanarok (username, password) VALUES ?", [tanarokValues], function (err, result) {
                if (err) throw err;
                console.log("Number of records inserted into tanarok: " + result.affectedRows);
            });

            // Insert into diakok
            // ... (similar structure)

            // Insert into webmester
            // ... (similar structure)

            // Close the connection when done with all operations
            con.end(function(err) {
                if (err) throw err;
                console.log("Connection closed.");
            });
        });
    });
});
