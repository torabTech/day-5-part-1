const express = require('express');
const app = express();

require('./api/db/dbconnection');

const gameMainRoutes = require('./api/routes/games');

app.use('/api/games',gameMainRoutes);

const port = process.env.port || 3000;

app.listen(port,function(){
    console.log(`Server is running at port: ${port}`);
});