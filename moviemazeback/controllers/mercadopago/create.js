import mercadopago from "mercadopago";

mercadopago.configure({ access_token: process.env.MERCADOPAGO_KEY })

const controller = {
  create: (req, res) => {
    let data = req.body;

    // Verifica si data es un objeto o un array
    const items = Array.isArray(data) ? data : [data];
    
    // console.log(data.items)
    const preference = {
      items: data.items.map((item) => ({
        id: item.product_id._id,
        title: item.product_id.title,
        currency_id: "ARS",
        picture_url: item.product_id.cover_photo,
        unit_price: parseFloat(item.product_id.price),
        description: item.product_id.description,
        quantity: 1,
      })),
      back_urls: {
        success: "http://localhost:3000/shop",
        failure: "",
        pending: "",
      },
      auto_return: "approved",
      binary_mode: true,
    };

    mercadopago.preferences
      .create(preference)
      .then((response) => res.status(200).json({ response }))
      .catch((error) => res.status(400).json({ error: error.message }));
  },
};

export default controller;
