let env = process.env.NODE_MODE;

let name = null;
if (['production', 'prd', 'prod'].includes(env)) {
    name = '';
} else if (!env || env == 'development') {
    name = '_dev';
} else {
    name = '_' + env;
}
module.exports = require('./config' + name);