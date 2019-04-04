const cart = [{name: "widget", price: 9.95 }, { name: "Gadget", price: 22.95 }];

const names = cart.map(x => x.name);

function getName(a) {
    return a.name;
}

const names2 = cart.map(getName);

const lowPrice = cart.filter(i => i.price < 10);

console.log(names2);
console.log(lowPrice);

function sqr(a){
    return a * a;
}
const sqrNames = names2.map(sqr);

console.log(sqrNames);

var a = "A".toLowerCase();

console.log(a);