import { createConnection } from "typeorm";

export async function connect() {
  try {
    let connection = await createConnection({
      type: "postgres",
      host: "postgres",
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
