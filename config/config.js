let config = require("./config.json");
let env = process.env.NODE_ENV || "development";
let envConfig = config[env];
// add env. config values to process.env
Object.keys(envConfig).forEach(key => (process.env[key] = envConfig[key]));
