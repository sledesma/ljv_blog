module.exports = (function(){

    let connection = false;

    if(connection === false) {
        console.log('Creando conexión a MySQL...')

        const mysql = require('mysql')

        connection = mysql.createConnection({
          host: 'localhost',
          user: 'root',
          password: '',
          database: 'blog'
        })
    }

    return connection;

})();