export const db_config = {
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'wiler',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  database: process.env.DB_NAME || 'db_name',
}

export const PORT = process.env.PORT || 5000

export const JWT_SECRET = process.env.JWT_SECRET || 'secret'

