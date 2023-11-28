//PRE ENTREGA 1
class ProductManager {
    constructor() {
      this.products = [];
      this.title = title;
      this.description = description;
      this.price = price;
      this.thumbnail = thumbnail;
      this.code = code;
      this.stock = stock;   
    }

static id = 0;

addProduct(titulo, descripcion, precio, ruta, codigo, stock){
    ProductManager.id++;
    const newProduct = {
        title: titulo,
        description: descripcion,
        price: precio,
        thumbnail: ruta,
        code: codigo,
        stock: stock,
    };
    this.products.push(newProduct);
}

getProducts(){
    return this.products;
}

getProductById(){
    return this.products.find(products => products.id === newProduct.id);
}
}