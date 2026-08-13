require('ts-node').register({
    transpileOnly:true,
    project: require('path').join(__dirname, 'tsconfig.json'),
}); // This will register the TypeScript compiler
require('./src'); // This will load our Typescript application
