const url = require('url');

let uri = 'https://www.myweb.com/contact?name=hello&last=hii';

let parseUrl = url.parse(uri,true);   // if true it will parse the query parameter and convert to it an object.

console.log(parseUrl);