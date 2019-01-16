const express = require('express');
const app = express();
const mysql = require('mysql');
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var connection = mysql.createConnection({
  host: "localhost",
  user: "servicio2",
  password: "servicio2.123",
  database: "mobasign"
});

connection.connect();


app.put('/rest/area', function (req, res) {
   connection.query('UPDATE `Area` SET `Nombre_Area`=?, `Id_Inmueble`=? ,`Estatus`=? where `Id_Area`=?', [req.body.Nombre_Area,req.body.Id_Inmueble,req.body.Estatus,req.body.Id_Area],function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});


app.listen(2468, function () {
 console.log('Node app is running on port 2468');

});  