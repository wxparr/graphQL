const express = require('express');
const graphHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// app use cors
app.use(cors());
// connecct to mlab dbase
mongoose.connect("mongodb://wxparr:Hacker9786@ds151008.mlab.com:51008/gql-wxparr");
//mongodb://<dbuser>:<dbpassword>@ds151008.mlab.com:51008/gql-wxparr
mongoose.connection.once('open', () => {
    console.log("connection is successful");
});

app.use('/graphql', graphHTTP({
    //options
    schema,
    graphiql: true
}))

app.listen(4000,() => {
        console.log("now listening for requests on prot 4000");
    })