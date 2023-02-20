# CRUD React Api

## install JSON Server

    Todo:
    1.  npm install json-server
    2.  db.json
    3.  setup file package.json
    4.  jalankan server : npm start port=3030

## install React Router Dom

    Todo:
    1.  npm install react-router-dom
    2.  db.json
    3.  setup file package.json
    4.  jalankan server : npm start port=3030

## install React Bootstrap & Axios

    Todo:
    1.  npm install react-bootstrap bootstrap
    2.  npm i axios
    3.  Home.jsx
        fetch data from file db.json
    4.  App.js
        Import dan pasang { BrowserRouter, Routes, Route } dari react-router-dom

## Create Data

    Todo:
    1.  Create.jsx
        - buat functional Create
        - import dan pasang axios
        - import dan pasang Navigate dari react-router-dom
        - deklarasi hook dengan object
        - pasang handleSubmit
    2.  App.jsx
        - import dan panggil path Create
    3.  Home.jsx
        - import dan panggil Link
    4.  pengujian pada browser:
        - pada halaman root klik button create+, akan tampil form input untuk add user
        - lakukan input data, kemudian klik  Add Data
        - jika setup yang kita lakukan berhasil , akan ada alert succes, dan
          data berhasil bertambah serta tersimpan kedalam db.json

## Update Data

    Todo:
    1.  Update.jsx
        - copy data dari Create lalu modifikasi
        - buat functional Update
        - import dan pasang axios
        - import dan pasang Navigate dari react-router-dom
        - deklarasi hook yang dapatkan nilai dari parameter yang diberikan di URL
        - deklarasi hook dengan object
        - pasang handleSubmit
    2.  App.jsx
        - import dan panggil path Update
    3.  Home.jsx
        - import dan panggil Link Update
    4.  pengujian pada browser:
        - pada table klik button Update pada salah satu data, akan tampil form update untuk update data
        - lakukan update data, kemudian klik  Update Data
        - jika setup yang kita lakukan berhasil , akan ada alert succes, dan
          data berhasil terupdate serta tersimpan kedalam db.json
