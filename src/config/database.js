require('dotenv/config');

module.exports = {
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  username: process.env.DB_USER_NAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATA_BASE,
  port: process.env.DB_DATA_PORT,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
