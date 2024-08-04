const db = require('../models/db');

exports.getBill = async (req, res) => {
  const { tableNumber } = req.params;

  try {
    const [rows] = await db.query(
      'SELECT * FROM orders WHERE table_number = ?',
      [tableNumber]
    );

    if (rows.length === 0) {
      return res.status(404).json({ error: 'Tidak ada pesanan ditemukan untuk meja tersebut.' });
    }

    const billDetails = rows.map(order => ({
      orderId: order.id,
      orderDetails: JSON.parse(order.order_details),
      totalPrice: order.total_price,
      createdAt: order.created_at
    }));

    res.status(200).json({ tableNumber, billDetails });
  } catch (error) {
    res.status(500).json({ error: 'Terjadi kesalahan saat mengambil tagihan.' });
  }
};
