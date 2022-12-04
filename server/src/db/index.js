import { createPool } from 'mysql2/promise'
import { db_config } from './../config.js'

export const pool = createPool(db_config)