const { EventEmitter } = require(`events`);

const myeventEmitter = new EventEmitter();

const ulangTahunNama = ({name}) => {
    console.log(`Happy birtday ${name}!`);
}

const ulangTahunUmur = ({umur}) => {
    console.log(`Yang Ke ${umur}!`);
}

const onBirthdayListener = ({ name, umur }) => {
    ulangTahunNama(name);
    ulangTahunUmur(umur);
}

myeventEmitter.on(`ulang-tahun`, onBirthdayListener);

myeventEmitter.emit(`ulang-tahun`, { name: `Dafa`, umur: 5 });