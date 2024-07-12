// import { createPool } from 'mysql2/promise'
import { dbConfig, dbTurso } from './../config.js'
import { createClient } from "@libsql/client";

// export const pool = createPool(dbConfig)


export const turso = createClient({
  url: dbTurso.url,
  authToken: dbTurso.token,
});
 
const { rows: result } = await turso.execute("SELECT * FROM notes")
console.log({result})