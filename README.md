# PRETEST SIATDEV

Aplikasi Nodejs sederhana dengan nginx sebagai proxy server

## Getting Started

Langkah pertama adalah membuat docker image dari dockerfile

### Membuat docker image dari aplikasi nodejs

Masuk ke direktori "nodeapp"  

```
$ cd nodeapp
```

Masukkan command berikut untuk membuat docker image 

```
$ docker build -t nodeapp-img .
```

Untuk menjalankan image dan mengaktifkan container, jalankan command berikut:

```
$ docker run -d -p 8888:8888 --name nodeapp-cont nodeapp-img
```

Selanjutnya akses "localhost:8888" pada web browser untuk melihat apakah aplikasi berhasil berjalan

### Menjadikan nginx sebagai proxy server

Untuk menambahkan nginx sebagai proxy server masuk ke directori "nginx"

```
$ cd nginx
```

Masukkan command berikut untuk membuat docker image 

```
$ docker build -t nginxproxy .
``` 

Untuk menjalankan image dan mengaktifkan container, jalankan command berikut:

```
$ docker run -d -p 80:80 --link nodeapp-cont --name nginxproxy-cont nginxproxy
``` 

**--link nodeapp-cont** merupakan command dimana container ini melakukan link ke container nodeapp-cont yang telah di run sebelumnya

Selanjutnya akses "localhost:80" pada web browser untuk melihat apakah aplikasi nodejs berhasil berjalan
pada port 80 proxy server nginx.
