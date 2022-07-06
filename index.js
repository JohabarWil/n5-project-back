const express = require('express');
require('dotenv').config();
const cors = require("cors");
const {dbConnection} = require('./database/config');
//
const app = express();
const server = require('http').createServer(app);
//
app.use(cors());
dbConnection();
//
const port = process.env.PORT_LOCAL;
app.use(express.static('public'));
// Router
/**
 * raiz del api
 */
app.get("/api", (req, res) => {
    res.json({message: "Api n5 test"});
});
app.use('/api/characters-hp', require('./routes/characters-hp'));
app.use('/api/characters-rm', require('./routes/characters-rm'));

// listen
server.listen(process.env.PORT || port, async () => {
    try {
        console.log("back corriendo", port);
    } catch (e) {
        console.error(e);
    }
});
