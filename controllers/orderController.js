const db = require('../models/db');

exports.createOrder = async (req, res) => {
  const { tableNumber, orderDetails } = req.body;

  try {
    const orderJSON = JSON.stringify(orderDetails);
    const totalPrice = orderDetails.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const [result] = await db.query(
      'INSERT INTO orders (table_number, order_details, total_price) VALUES (?, ?, ?)',
      [tableNumber, orderJSON, totalPrice]
    );

    let printers = new Set();
    orderDetails.forEach(item => {
      if (item.category === 'minuman') {
        printers.add('C');
      } else if (item.category === 'makanan') {
        printers.add('B');
      }
    });

    res.status(201).json({ orderId: result.insertId, printers: Array.from(printers) });
  } catch (error) {
    res.status(500).json({ error: 'Terjadi kesalahan saat membuat pesanan.' });
  }
};
