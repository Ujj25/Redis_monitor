const crypto = require('crypto');

exports.md5=(s)=>{

return crypto.createHash('md5').update(s, 'utf8').digest();
}