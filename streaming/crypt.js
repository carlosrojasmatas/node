var crypto = require('crypto');
var algo="aes256";
var paraph=process.argv[2];
var stream = crypto.createDecipher(algo, paraph);
process.stdin.pipe(stream).pipe(process.stdout);
