const express = require("express");

const placesRoutes = require("./routes/places-routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(placesRoutes);

app.listen(5000);