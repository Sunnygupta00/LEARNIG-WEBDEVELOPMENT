// object basicall is a key : value

const product = {
    item_name: "xyz",
    price: 12,
    discount: 10,
    item_code: "12de"
}
// for in is basically only for objects
for (const key in product) {
    console.log(key, " ", product[key])
}
function createProduct(name, price, discount, code) {
    return {
        item_name: name,
        price: price,
        discount: discount,
        item_code: code
    }
}
const cloth = createProduct("tshirt", 999, 10, "3adf3")
//console.log(cloth)

// now using constructor, in constructor we use 'this' keyword

function Products(name, price, discount, code) { // in constructor we use name in uppercase
    this.item_name = name;
    this.price = price;
    this.discount = discount;
    this.item_code = code;
    this.disountValue = function () {
        return price * discount / 100;
    }
}
const football = new Products("ball", 100, 30, "xy32h");
console.log(football.disountValue())