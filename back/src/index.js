const express = require("express");
const cors = require('cors');

const dbConnection = require("./db/conection");

const postsRouter = require("./routes/posts");

const app = express();


app.use(cors()); // Para el intercambio con otros sitios

app.use("/posts", postsRouter);


dbConnection.connect(function (err) {
	console.log("Conectando a la base de datos...");
	if (err) console.error("ERROR");
	else
		app.listen(9000, () =>
			console.log("Conexión exitosa. Servidor ejecutandose en http://localhost:9000")
		);
});