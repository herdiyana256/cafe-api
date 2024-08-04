Cafe API
API untuk sistem pemesanan di Cafe. Proyek ini menggunakan Node.js dan Express untuk backend, serta MySQL sebagai database.
![swagger2](https://github.com/user-attachments/assets/72986406-e91d-43ba-9c3f-1989b36f4f21)
![swagger1](https://github.com/user-attachments/assets/022fd1e7-d54e-47f2-a424-e35fc87f4aab)

Persyaratan
Node.js
MySQL
XAMPP (opsional, untuk menjalankan MySQL dan phpMyAdmin secara lokal)
Instalasi
Clone repositori ini:

bash
Copy code
git clone <URL-repository-GitHub-Anda>
cd cafe-api
Instal dependensi:

bash
Copy code
npm install
Inisialisasi database:

Buka phpMyAdmin di browser Anda.
Pilih Import dan unggah file data.sql dari root direktori proyek Anda.
Klik Go untuk menjalankan file SQL.
Atau gunakan command line:

bash
Copy code
mysql -u root -p < data.sql
Konfigurasi
Pastikan Anda memiliki file models/db.js yang dikonfigurasi dengan benar untuk terhubung ke database MySQL Anda. Contoh:

javascript
Copy code
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'cafe_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool.promise();
Menjalankan Aplikasi
Jalankan server dengan perintah:

bash
Copy code
node app.js
Server akan berjalan di port 3000. Anda dapat mengakses API di http://localhost:3000.

Dokumentasi API
Dokumentasi API tersedia di http://localhost:3000/api-docs.

Pengujian Endpoint Menggunakan Postman
1. POST /order
Endpoint ini digunakan untuk membuat pesanan baru.

URL: http://localhost:3000/order
Metode: POST
Body: JSON
Contoh Body:

json
Copy code
{
  "tableNumber": "MEJA NO 1",
  "orderDetails": [
    { "category": "minuman", "name": "Jeruk", "variant": "DINGIN", "price": 12000, "quantity": 1 },
    { "category": "minuman", "name": "Kopi", "variant": "PANAS", "price": 6000, "quantity": 1 },
    { "category": "promo", "name": "Nasi Goreng + Jeruk Dingin", "price": 23000, "quantity": 2 },
    { "category": "minuman", "name": "Teh", "variant": "MANIS", "price": 8000, "quantity": 1 },
    { "category": "makanan", "name": "Mie", "variant": "GORENG", "price": 15000, "quantity": 1 }
  ]
}
2. GET /bill/{tableNumber}
Endpoint ini digunakan untuk mendapatkan tagihan untuk meja tertentu.

URL: http://localhost:3000/bill/MEJA NO 1
Metode: GET



http://localhost:3000/api-docs/#/default/get_bill__tableNumber_
└── data.sql
Lisensi
Proyek ini dilisensikan di bawah MIT License. Lihat file LICENSE untuk detail lebih lanjut.
