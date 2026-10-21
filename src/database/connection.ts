import pg from "pg"
import "dotenv/config"

export const pool = new pg.Pool()