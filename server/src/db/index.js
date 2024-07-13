// import { createPool } from 'mysql2/promise'
import { dbTurso } from './../config.js'
import { createClient } from "@libsql/client";

export const turso = createClient({
  url: dbTurso.url,
  authToken: dbTurso.token,
});