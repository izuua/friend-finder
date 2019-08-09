var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);


app.listen(PORT, function() {
    console.log(`App listening on PORT: ${PORT}`);
})