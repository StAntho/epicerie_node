import { config } from 'dotenv';

config();

export const PORT = process.env.PORT;
export const DATABASE_USER = process.env.DATABASE_USER;
export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
