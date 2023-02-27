const { EventEmitter } = require(`events`);

const myEventEmitter = new EventEmitter();

// fungsi yang akan dijalankan ketika event coffee-order terjadi
const buatKopi = ({ name }) => {
    console.log(`Kopi ${name} telah dibuat!`);
}

const buatTagihan = ({ price }) => {
    console.log(`Bill sebesar ${price} telah dibuat!`);
}

const onCoffeeOrderedListener = ({ name, price }) => {
    buatKopi(name);
    buatTagihan(price);
}

// mendaftarkan fungsi makeCoffee sebagai listener event coffee-order
myEventEmitter.on(`coffee-order`, onCoffeeOrderedListener);

// memicu event `coffee-order` terjadi
myEventEmitter.emit(`coffee-order`, { name: `luwak`, price: 14990 });
