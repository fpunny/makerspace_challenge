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
    console.log('Removing files for ' + arg);
    directories.forEach(dir => {
        try {
            let file = fs.readFileSync(dir + 'index.js').toString();
            file = file.replace('export * from \'./' + arg + '\';', '').trim();
            fs.writeFileSync(dir + 'index.js', file);
            fs.unlinkSync(dir + arg + '.js');
            console.log(dir + arg + '.js removed');
        } catch (e) {
            console.log('Unable to remove object ' + arg + ' from ' + dir);
        }
    });
});

console.log(args.length + ' objects removed');