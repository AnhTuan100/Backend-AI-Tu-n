let products = [
    { id: 1, name: "Laptop", price: 1200, stock: 5 },
    { id: 2, name: "Phone", price: 800, stock: 10 }
];
function addProduct(p) {
    products.push(p);
    console.log(`Đã thêm sản phẩm: ${p.name}`);
}


function updatePrice(id, newPrice) {
    const product = products.find(p => p.id === id);
    if (product) {
        product.price = newPrice;
        console.log(`Đã cập nhật giá sản phẩm ID ${id} thành ${newPrice}`);
    } else {
        console.log(`Không tìm thấy sản phẩm với ID: ${id}`);
    }
}

function findbyPrice(min, max) {
    return products.filter(p => p.price >= min && p.price <= max);
}

function Sell(id, quantity) {
    const product = products.find(p => p.id === id);
    if (product) {
        if (product.stock >= quantity) {
            product.stock -= quantity;
            console.log(`Đã bán ${quantity} sản phẩm ID ${id}`);
        } else {
            console.log(`Không đủ hàng trong kho cho sản phẩm ID ${id}`);
        }
    } else {
        console.log(`Không tìm thấy sản phẩm với ID: ${id}`);
    }
}

function toJSON() {
    return JSON.stringify((products.filter(p => p.price > 700)), (key, value) => {
        if (key === 'stock') return undefined;
        return value;
    }, 2);
}

addProduct({ id: 3, name: "Tablet", price: 500, stock: 8 });
updatePrice(2, 750);
Sell(1, 2);
console.log(findbyPrice(700, 1300));
console.log(toJSON());
