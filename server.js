const app = require("express")();
require("dotenv").config({ path: "./config/config.env" }); //Loading Environment Variable
require("./config/db")(); //Connecting Database
require("colors");
if (process.env.NODE_ENV === "development") app.use(require("morgan")("dev")); //Development Logging

//Middleware for application
app.use(require("express").json());

// Mount Router with the Route Files
app.use("/api/v1/bootcamps", require("./routes/bootcamps"));

const server = app.listen(process.env.PORT || 1010, () =>
  console.log(
    `Server Started in ${process.env.NODE_ENV} Mode on Port ${process.env.PORT}`
      .bgYellow.italic.bold
  )
);

server.on("unhandledRejection", error => {
  console.log(`Error: ${error.message}`.red.bold);
  server.close(() => process.exit(1));
});
