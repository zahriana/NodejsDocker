Build and run the Docker image on Container:

1. Masuk ke direktori "nodeapp"  

2. Masukkan perintah berikut untuk membuat docker image 
$ docker build -t nodeapp-img .

3. Jalankan docker image dengan container
$ docker run -d -p 8888:8888 --name nodeapp-cont nodeapp-img

4. Akses "localhost:8888" pada web browser untuk melihat apakah aplikasi berhasil berjalan

5. untuk menambahkan nginx sebagai proxy server masuk ke directori "nginx"

6. Masukkan perintah berikut untuk membuat docker image 
$ docker build -t nginxproxy .

7.Jalankan docker image dengan container
$ docker run -d -p 80:80 --link nodeapp-cont --name nginxproxy-cont nginxproxy

8. Akses "localhost:80" pada web browser untuk melihat apakah aplikasi nodejs berhasil berjalan
melalui port 80 proxy server.
