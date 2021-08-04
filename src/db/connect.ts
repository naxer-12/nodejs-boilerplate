import mongoose from "mongoose";
import config from "config";
import log from "../logger/log";

function connect() {
  log.info("HELLO ");

  const dbUri = config.get("dbUri") as string;
  // log.info(`Server listing at http://${host}:${port}`);

  console.log(dbUri);
  return mongoose
    .connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      log.info("Database connected");
    })
    .catch((error) => {
      log.error("db error", error);
      process.exit(1);
    });
}

export default connect;