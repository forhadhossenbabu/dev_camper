module.exports = async () => {
  const db_connection = await require("mongoose").connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });
  console.log(
    `MongoDB Connected: ${db_connection.connection.host}`.italic.bgWhite.black.underline
      .bold
  );
};
