import "dotenv/config";

const PORT = process.env.PORT || 4000
const envWhitelist = process.env.WHITELIST_CORS ? (process.env.WHITELIST_CORS as string).split(',') : [];
const whitelist = [
  'http://localhost:8080'
].concat(envWhitelist);
console.log('Whitelist - ', whitelist);

