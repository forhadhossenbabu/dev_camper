const express = require("express");
require("dotenv").config({ path: "./config/config.env" }); //Loading Environment Variable

const app = express();

app.listen(process.env.PORT || 1010, () =>
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
  )
);
