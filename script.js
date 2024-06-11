"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mountains = [
    {
        name: "Kilimanjaro",
        height: 19341
    },
    {
        name: "Everest",
        height: 29029
    },
    {
        name: "Denali",
        height: 20310
    }
];
function findNameOfTallestMountain(allHill) {
    var bigHill = allHill.reduce(function (prev, current) { return (current.height > prev.height) ? current : prev; });
    return bigHill.name;
}
var mName = findNameOfTallestMountain(mountains);
console.log(mName);
var products = [
    {
        name: "Oat Milk",
        price: 3.99
    },
    {
        name: "Rice Milk",
        price: 4.50
    },
    {
        name: "Cashew Milk",
        price: 2.99
    }
];
function calcAverageProductPrice(prods) {
    // let avg:number = 0;
    // prods.forEach((n: Product) => {
    //     avg += n.price;
    // })
    var sum = prods.reduce(function (acc, current) {
        return acc + current.price;
    }, 0);
    return sum / prods.length;
}
var avg = calcAverageProductPrice(products);
console.log(avg);
var inventory = [
    {
        product: {
            name: "motor",
            price: 10.00
        },
        quantity: 10
    },
    {
        product: {
            name: "sensor",
            price: 12.50
        },
        quantity: 4
    },
    {
        product: {
            name: "LED",
            price: 1.00
        },
        quantity: 20
    }
];
function calcInventoryValue(items) {
    // let sum:number = 0;
    // items.forEach((p: InventoryItem) => {
    //     sum += (p.product.price * p.quantity);
    // })
    // return sum;
    var sum = items.reduce(function (sum, p) { return sum + (p.product.price * p.quantity); }, 0);
    return sum;
}
var result = calcInventoryValue(inventory);
console.log(result);
