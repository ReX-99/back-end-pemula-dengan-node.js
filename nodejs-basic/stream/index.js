const fs = require(`fs`);
const path = require(`path`);

const fileinput = path.resolve(__dirname, 'input.txt');
const fileoutput = path.resolve(__dirname, 'output.txt');

const readableStream = fs.createReadStream(fileinput, {
    highWaterMark: 15
});
const writeableStream = fs.createWriteStream(fileoutput);

readableStream.on('readable', () => {
    try {
        let text = readableStream.read();
        writeableStream.write(`${text}\n`)
    } catch (error) {
        console.log('Error: ', error);
    }
})

readableStream.on('end', () => {
    writeableStream.end();
})