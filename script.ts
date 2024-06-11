export {}
//1
interface Mountain {
    name: string;
    height: number;
}

let mountains:Mountain[] = [
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

function findNameOfTallestMountain(allHill:Mountain[]):string {
    let bigHill:Mountain = allHill.reduce((prev, current) => (current.height > prev.height) ? current : prev);
    return bigHill.name;
}
let mName:string = findNameOfTallestMountain(mountains);
console.log(mName);

//2
interface Product {
    name: string;
    price: number;
}
let products:Product[] = [
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

function calcAverageProductPrice(prods:Product[]): number{
    // let avg:number = 0;
    // prods.forEach((n: Product) => {
    //     avg += n.price;
    // })
    let sum:number = prods.reduce((acc, current) => {
        return acc + current.price;
    }, 0);
    return sum / prods.length;
}

let avg = calcAverageProductPrice(products);
console.log(avg);

//3
interface InventoryItem{
    product: Product;
    quantity: number;
}

let inventory:InventoryItem[] = [
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

function calcInventoryValue(items:InventoryItem[]):number{
  
    // let sum:number = 0;
    // items.forEach((p: InventoryItem) => {
    //     sum += (p.product.price * p.quantity);
    // })
    // return sum;
    let sum: number = items.reduce((sum, p) => sum + (p.product.price * p.quantity), 0);
    return sum;
}

let result:number = calcInventoryValue(inventory);
console.log(result);