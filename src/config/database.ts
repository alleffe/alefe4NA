import { Pool } from "pg";

// Substitua pela sua string de conexão do Render.com
const connectionString = "postgresql://alefe_user:hBQv50N6JZIs3TJxGJYIhSFVZzRNzsaB@dpg-crcf50jv2p9s73cf5hh0-a.oregon-postgres.render.com/alefe";

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  },
});

export default pool;
