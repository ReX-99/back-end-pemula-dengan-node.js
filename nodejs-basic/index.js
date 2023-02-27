const fs = require('fs');

const readableStream = fs.createReadStream('article.txt', {});

readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch(error) {
        
    }
});

readableStream.on('end', () => {
    console.log('Done');
});