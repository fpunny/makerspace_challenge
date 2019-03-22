const fs = require('fs');
const directories = [
    './src/graphql/models/',
    './src/graphql/mutations/',
    './src/graphql/queries/',
    './src/models/'
];

if (process.argv.length < 3) {
    console.error('Please provide atleast 1 object name');
    return;
}

const args = process.argv.slice(2);
args.forEach(arg => {
    console.log('Creating files for ' + arg);
    directories.forEach(dir => {
        fs.writeFileSync(dir + arg + '.js', '');
        fs.appendFileSync(dir + 'index.js', '\nexport * from \'./' + arg + '\';');
        console.log(dir + arg + '.js created');
    });
});

console.log(args.length + ' objects initalized');