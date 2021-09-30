import { createConnection } from "typeorm";
import { User } from "../entity";

export async function connect() {
  try {
    let connection = await createConnection({
      type: "postgres",
      host: "postgres",
      username: "admin",
      password: "password",
      entities: [User],
    });
    await connection.synchronize();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
