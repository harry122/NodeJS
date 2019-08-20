// console.log(global); // we can write it in capital letter also

// __dirname

console.log(__dirname);

// __filename

console.log(__filename);

// process object

// console.log(process);

console.log(process.title);

// console.log(process.env);         // important

process.env.SECRET_KEY = 'Super Secret';

console.log(process.env.SECRET_KEY);

console.log(process.cwd());  // current working dir

console.log(process.memoryUsage());

// module

console.log(module);  
console.log(module.filename);

console.log(typeof module.exports);