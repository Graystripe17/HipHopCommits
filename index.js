var quote = [
    'a',
    'b',
    'c',
    'd',
];


Array.prototype.randomElement = function() {
    return this[Math.floor(Math.random() * this.length)]
}

document.write(quote.randomElement());
