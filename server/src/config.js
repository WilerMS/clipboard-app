export const dbConfig = {
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'wiler',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3307,
  database: process.env.DB_NAME || 'dev'
}

export const dbTurso = {
  url: process.env.DB_TURSO_URL || 'libsql://bulles-fun-wilerms.turso.io',
  token: process.env.DB_TURSO_TOKEN || 'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MjA4MjM5ODEsImlkIjoiODBjNjhmYTgtOWUyNC00ODU5LWIzZjMtZTUzNmI3M2MxMzJjIn0.I-5YzIHXhZ5Nm7IIIuPfzH57GmqTUaxPQHLTLfqIl2RhwXsirvLVSh3CNJYloet4h2j8aCb-u_Ni_5Ws6mmBBQ'
}

export const PORT = process.env.PORT || 5000

export const JWT_SECRET = process.env.JWT_SECRET || 'secret'
