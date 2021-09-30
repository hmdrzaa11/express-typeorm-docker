import app from "./app";
import { connect } from "./db/connect";

connect().then(() => {
  app.listen(8000, () => console.log("server on 8000"));
});
