const dbConnection = require('../db/conection');

module.exports = {

    getAll: function(req, res){
        dbConnection.query('SELECT * FROM posts', function(err, results, fields){
            res.send(results);
        });
    }

}