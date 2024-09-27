export const dbConfig = {
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'wiler',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3307,
  database: process.env.DB_NAME || 'dev'
}

export const dbTurso = {
  url: process.env.DB_TURSO_URL,
  token: process.env.DB_TURSO_TOKEN
}

export const PORT = process.env.PORT || 5000

export const JWT_SECRET = process.env.JWT_SECRET || 'secret'
