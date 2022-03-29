import products from "../data/product.json";

export const get_product = (req, res) => {
  const { product_id } = req.params;
  let product = products.find((p) => p.id == product_id);

  if (product == null) {
    return res.status(404).json({ message: "product tidak ditemukan" });
  }

  return res.status(200).json(product);
};

export const get_products = (req, res) => {
  return res.status(200).json(products);
};

export const add_product = (req, res) => {
  const { name, price, type, qty } = req.body;

  let product = {
    id: products.length + 1,
    name: name,
    price: price,
    type: type,
    qty: qty,
  };

  products.push(product);

  return res.status(201).json(product);
};

export const update_product = (req, res) => {
  const { product_id } = req.params;
  const { name, price, type, qty } = req.body;

  let product = products.find((p) => p.id == product_id);

  if (product == null) {
    return res.status(404).json({ message: "product tidak ditemukan" });
  }

  product.name = name;
  product.price = price;
  product.type = type;
  product.qty = qty;

  return res.status(200).json(product);
};

export const delete_product = (req, res) => {
  const { product_id } = req.params;
  let product = products.find((p) => p.id == product_id);

  if (product == null) {
    return res.status(404).json({ message: "product tidak ditemukan" });
  }

  products.splice(product.index, 1);

  return res.status(200).json({message: "product berhasil di hapus"});
};
