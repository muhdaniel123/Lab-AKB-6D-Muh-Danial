# Laboratorium Informatika, Universitas Muhammadiyah Makassar

### Lab Komputasi Bergerak - Expo Basic

<p align="center">
  <a href="https://expo.dev/">
    <img alt="expo sdk" height="128" src="https://github.com/expo/expo/blob/main/.github/resources/banner.png?raw=true">
    <h1 align="center">Expo</h1>
  </a>
</p>

<p align="center">
   <a aria-label="SDK version" href="https://www.npmjs.com/package/expo" target="_blank">
    <img alt="Expo SDK version" src="https://img.shields.io/npm/v/expo.svg?style=flat-square&label=SDK&labelColor=000000&color=4630EB" />
  </a>
  <a aria-label="Join our forums" href="https://forums.expo.dev" target="_blank">
    <img alt="Forums" src="https://img.shields.io/badge/Ask%20Questions%20-blue.svg?style=flat-square&logo=discourse&logoWidth=15&labelColor=000000&color=4630EB" />
  </a>
  <a aria-label="Join our Discord" href="https://chat.expo.dev" target="_blank">
    <img alt="Discord" src="https://img.shields.io/discord/695411232856997968.svg?style=flat-square&labelColor=000000&color=4630EB&logo=discord&logoColor=FFFFFF&label=" />
  </a>
  <a aria-label="Expo is free to use" href="https://github.com/expo/expo/blob/main/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-success.svg?style=flat-square&color=33CC12" target="_blank" />
  </a>
  <a aria-label="expo downloads" href="http://www.npmtrends.com/expo" target="_blank">
    <img alt="Downloads" src="https://img.shields.io/npm/dm/expo.svg?style=flat-square&labelColor=gray&color=33CC12&label=Downloads" />
  </a>
</p>

<p align="center">
  <a aria-label="try expo with snack" href="https://snack.expo.dev"><b>Try Expo in the Browser</b></a>
 |
  <a aria-label="expo documentation" href="https://docs.expo.dev">Read the Documentation 📚</a>
</p>

Expo adalah platform sumber terbuka untuk membuat aplikasi asli universal yang berjalan di Android, iOS, dan web. Ini mencakup runtime universal dan pustaka yang memungkinkan Anda membuat aplikasi asli dengan menulis React dan JavaScript. Repositori ini adalah tempat perangkat lunak klien Expo dikembangkan, dan mencakup aplikasi klien, modul, aplikasi, CLI, dan lainnya. [Expo Application Services (EAS)](https://expo.dev/eas) adalah platform layanan yang dihosting yang sangat terintegrasi dengan alat sumber terbuka Expo. EAS membantu Anda membuat, mengirim, dan mengulang aplikasi Anda sebagai individu atau tim.

[Click here to view the Expo Community Guidelines](https://expo.dev/guidelines). Terima kasih telah membantu menjaga komunitas Expo tetap terbuka dan open-source!

## 📚 Documentation

<p>Selamat datang di laboratorium ini! Di sini, kita akan belajar tentang berbagai aspek yang terkait dengan pengembangan perangkat lunak. Khususnya, fokus pembelajaran akan diberikan pada topik instalasi, antarmuka pengguna, routing, pengembangan, dan konfigurasi plugin.</p>

- [⚡ Installation](#-installation)
- [👀 User Interface](#-useriterface)
- [🚀 Routing](#-routing)
- [🧠 Config Plugins](#-plugin)
- [💡 API integration](#-api-integration)
- [👏 Development builds](#-development)

## ⚡ Installation

Pelajari cara memulai membuat aplikasi universal baru dengan Expo.
Untuk mengembangkan aplikasi dengan Expo, pastikan untuk memenuhi persyaratan dan menggunakan alat-alat yang direkomendasikan berikut.

Persyaratan
Untuk menggunakan Expo, Anda perlu menginstal alat-alat berikut di komputer Anda:

Node.js LTS release - Hanya rilis Node.js LTS (nomor genap) yang direkomendasikan.
Seperti yang dinyatakan secara resmi oleh Node.js, "Aplikasi produksi hanya harus menggunakan rilis Active LTS atau Maintenance LTS." Anda dapat menginstal Node.js menggunakan alat manajemen versi (seperti nvm atau volta atau alat lain pilihan Anda) untuk beralih antara versi Node.js yang berbeda.

Git untuk kontrol versi kode sumber.
Watchman (untuk pengguna Linux atau macOS).

Mulai
Setelah menginstal Node.js, Anda dapat menggunakan npx untuk membuat aplikasi baru.

## Cara Penggunaan

1. Buka terminal atau command prompt.
2. Jalankan perintah berikut untuk membuat aplikasi Expo baru:
   ```
   npx create-react-native-app nama-aplikasi-anda
   ```
   Ganti `nama-aplikasi-anda` dengan nama yang sesuai untuk aplikasi Anda.
3. Tunggu sampai proses selesai. Expo akan membuat proyek dan mengunduh dependensi yang diperlukan.
4. Setelah proses selesai, masuk ke direktori proyek dengan menjalankan perintah:
   ```
   cd nama-aplikasi-anda
   ```
   Ganti `nama-aplikasi-anda` dengan nama aplikasi yang Anda gunakan dalam perintah sebelumnya.
5. Sekarang, jalankan perintah berikut untuk memulai server pengembangan Expo:
   ```
   npm start
   ```
   Ini akan membuka Expo Developer Tools di browser Anda dan memberikan instruksi lebih lanjut.
6. Anda dapat memindai kode QR yang ditampilkan di Expo Developer Tools menggunakan aplikasi Expo Go di perangkat seluler Anda untuk melihat aplikasi Anda secara langsung.

Anda sekarang telah berhasil memulai aplikasi Expo baru dan siap untuk mulai mengembangkan! Untuk informasi lebih lanjut tentang pengembangan aplikasi dengan Expo, silakan merujuk ke [dokumentasi Expo](https://docs.expo.io/).

## 💡 API Integration

## 👀 Antarmuka Pengguna (User Interface)

Antarmuka Pengguna (UI) adalah elemen penting dalam pengembangan perangkat lunak yang menarik dan efektif. Di dalam submateri UI ini, kita akan mempelajari beberapa konsep yang menarik dan berguna dalam merancang antarmuka pengguna yang menarik dan fungsional. Berikut adalah beberapa subtopik yang akan kita jelajahi:

1. Splash Screen: Splash screen adalah gambar atau animasi yang ditampilkan saat aplikasi sedang memuat. Kita akan mempelajari cara membuat dan menyesuaikan splash screen agar menciptakan pengalaman awal yang menarik bagi pengguna.

2. App Icons: App icons adalah ikon yang mewakili aplikasi di layar utama perangkat pengguna. Kita akan belajar tentang desain ikon yang efektif, ukuran yang diperlukan, dan bagaimana mengintegrasikan ikon aplikasi dengan benar.

3. Safe Areas: Safe areas adalah area yang aman dari layar perangkat yang memastikan konten aplikasi tidak terpotong oleh elemen lain, seperti notch atau tombol navigasi. Kita akan mempelajari cara mengelola safe areas agar tampilan aplikasi tetap konsisten di berbagai perangkat.

4. Font: Pemilihan jenis huruf (font) yang tepat dapat memiliki dampak besar pada pengalaman pengguna. Kita akan menjelajahi berbagai jenis huruf, bagaimana mengimplementasikan dan menyesuaikan font dalam aplikasi, serta praktik terbaik dalam desain tipografi.

5. Penyimpanan Data: Data adalah komponen penting dalam aplikasi. Kita akan mempelajari berbagai cara menyimpan dan mengelola data dalam aplikasi, termasuk penggunaan penyimpanan lokal, penyimpanan cloud, dan database. Kami juga akan membahas praktik terbaik dalam pengelolaan data dan privasi pengguna.

Dengan mempelajari submateri ini, Anda akan memiliki pemahaman yang lebih baik tentang bagaimana merancang antarmuka pengguna yang menarik, responsif, dan menyenangkan. Anda akan dapat menciptakan pengalaman yang baik bagi pengguna dan meningkatkan nilai aplikasi Anda. Ayo kita mulai menjelajahi dunia antarmuka pengguna yang menarik bersama-sama!

## Splash Screen

Pelajari cara membuat splash screen untuk proyek Expo Anda dan praktik terbaik lainnya.

Splash screen, juga dikenal sebagai layar peluncuran, adalah tampilan pertama yang dilihat pengguna saat membuka aplikasi Anda. Ini tetap terlihat saat aplikasi sedang memuat. Anda juga dapat mengontrol perilaku saat splash screen menghilang dengan menggunakan API SplashScreen bawaan.

Konfigurasikan splash screen untuk aplikasi Anda
Splash screen default adalah tampilan putih kosong. Anda dapat menyesuaikannya menggunakan kunci "splash" di file app.json proyek Anda.

Buat gambar splash
Untuk membuat gambar splash, Anda dapat menggunakan [template Figma](https://www.figma.com/community/file/1155362909441341285). Template ini menyediakan desain minimum untuk ikon dan gambar splash untuk Android dan iOS.

Langkah-langkah untuk mengkonfigurasi splash screen dalam proyek Expo:

1. Unduh template Figma splash screen dari tautan di atas.
2. Buka template Figma menggunakan aplikasi Figma atau peramban web.
3. Sesuaikan desain gambar splash sesuai preferensi Anda.
4. Ekspor gambar splash untuk Android dan iOS dalam format yang sesuai (PNG atau JPG).
5. Salin gambar splash yang telah Anda ekspor ke direktori proyek Expo Anda.

Cara mengkonfigurasi splash screen dalam proyek Expo:

1. Buka file app.json dalam direktori proyek Anda.
2. Temukan bagian "expo" dalam file app.json.
3. Tambahkan kunci "splash" dengan nilai berikut:

```json
"splash": {
  "image": "./path/to/splash_image.png",
  "resizeMode": "contain",
  "backgroundColor": "#ffffff"
}
```

Pastikan untuk mengganti "./path/to/splash_image.png" dengan jalur relatif ke gambar splash yang telah Anda salin ke direktori proyek.

Dengan mengikuti langkah-langkah ini, Anda akan dapat membuat dan mengkonfigurasi splash screen yang sesuai dengan preferensi desain Anda untuk proyek Expo Anda.

Untuk informasi lebih lanjut tentang penggunaan dan pengaturan splash screen di Expo, Anda dapat merujuk ke [dokumentasi Expo tentang splash screen](https://docs.expo.io/versions/latest/sdk/splash-screen/).

## App Icons

Pelajari tentang mengonfigurasi ikon aplikasi dan praktik terbaik untuk Android dan iOS.

Ikon aplikasi adalah yang dilihat pengguna pada layar utama perangkat mereka dan di toko aplikasi. Android dan iOS memiliki persyaratan yang berbeda dan ketat.

Konfigurasikan ikon aplikasi
Cara paling sederhana untuk menyediakan ikon untuk aplikasi Anda adalah dengan menyediakan jalur lokal atau URL jarak jauh sebagai nilai properti ikon dalam file app.json.

Namun, dengan Expo, Anda juga dapat menyediakan nilai khusus platform untuk setiap platform. Misalnya, Anda dapat menyediakan ikon yang berbeda untuk Android menggunakan properti android.icon dan untuk iOS menggunakan properti ios.icon. Jika salah satu properti ini disediakan, properti tersebut akan memiliki prioritas lebih tinggi daripada ikon dasar untuk setiap platform.

Sebagian besar aplikasi berkualitas produksi mungkin ingin menyediakan sesuatu yang sedikit berbeda antara Android dan iOS.

Membuat ikon aplikasi
Untuk membuat ikon aplikasi, Anda dapat menggunakan template Figma ini. Template ini menyediakan desain minimum untuk ikon dan gambar splash untuk Android dan iOS.

Langkah-langkah untuk mengkonfigurasi ikon aplikasi dalam proyek Expo:

1. Unduh template Figma untuk ikon aplikasi dari tautan di atas.
2. Buka template Figma menggunakan aplikasi Figma atau peramban web.
3. Sesuaikan desain ikon aplikasi sesuai preferensi Anda.
4. Ekspor ikon aplikasi untuk Android dan iOS dalam format yang sesuai (PNG atau JPG).
5. Salin ikon aplikasi yang telah Anda ekspor ke direktori proyek Expo Anda.

Cara mengkonfigurasi ikon aplikasi dalam proyek Expo:

1. Buka file app.json dalam direktori proyek Anda.
2. Temukan bagian "expo" dalam file app.json.
3. Tambahkan kunci "icon" dengan nilai berikut:

```json
"icon": "./path/to/app_icon.png"
```

Pastikan untuk mengganti "./path/to/app_icon.png" dengan jalur relatif ke ikon aplikasi yang telah Anda salin ke direktori proyek.

Dengan mengikuti langkah-langkah ini, Anda akan dapat membuat dan mengkonfigurasi ikon aplikasi yang sesuai dengan preferensi desain Anda untuk proyek Expo Anda.

Untuk informasi lebih lanjut tentang penggunaan dan pengaturan ikon aplikasi di Expo, Anda dapat merujuk ke [dokumentasi Expo tentang ikon aplikasi](https://docs.expo.io/versions/latest/sdk/app-icons/).

## Safe Areas

Pelajari cara menambahkan safe areas (area aman) untuk proyek Expo Anda dan praktik terbaik lainnya.

Membuat safe area adalah cara yang baik untuk memastikan bahwa konten aplikasi Anda ditempatkan dengan tepat di sekitar notch, status bar, indikator home, dan elemen antarmuka perangkat dan sistem operasi lainnya.

Ketika konten pada layar aplikasi Anda tidak ditempatkan di dalam safe area, konten tersebut dapat terhalang oleh elemen antarmuka perangkat, seperti yang ditunjukkan dalam contoh di bawah ini:

![Without Safe Area](https://docs.expo.dev/static/images/safe-area/without-safe-area.png)

Tanpa mendefinisikan safe area, konten dapat terhalang oleh elemen antarmuka perangkat.
Pada contoh di atas, konten ditempatkan di bagian atas layar. Di Android, konten tersebut tersembunyi oleh status bar. Di iOS, konten tersebut tersembunyi oleh sudut yang melengkung, notch, dan status bar.

Untuk menambahkan safe areas dalam proyek Expo Anda, ikuti langkah-langkah berikut:

1. Buka file `App.js` atau komponen utama lainnya di direktori proyek Expo Anda.
2. Impor komponen `SafeAreaView` dari modul Expo dengan menambahkan baris berikut di bagian atas file:

   ```javascript
   import { SafeAreaView } from "expo-safe-area-context";
   ```

3. Bungkus konten utama aplikasi Anda dengan komponen `SafeAreaView` seperti ini:

   ```javascript
   <SafeAreaView style={{ flex: 1 }}>
     {/* Konten utama aplikasi Anda */}
   </SafeAreaView>
   ```

   Pastikan untuk mengganti `{/* Konten utama aplikasi Anda */}` dengan komponen atau tampilan konten utama aplikasi Anda.

Dengan menambahkan safe areas menggunakan komponen `SafeAreaView`, Anda memastikan bahwa konten aplikasi Anda tidak akan terhalang oleh elemen antarmuka perangkat. Hal ini akan memastikan tampilan yang konsisten dan pengalaman pengguna yang baik di berbagai perangkat.

Untuk informasi lebih lanjut tentang penggunaan dan pengaturan safe areas di Expo, Anda dapat merujuk ke [dokumentasi Expo tentang safe areas](https://docs.expo.dev/versions/latest/sdk/safe-area-context/).

Font Kustom
Pelajari tentang menggunakan font kustom, format font yang didukung untuk setiap platform, dan cara memuatnya.

Baik Android maupun iOS serta sebagian besar sistem operasi desktop dilengkapi dengan set font platform mereka sendiri. Namun, jika Anda ingin memberikan lebih banyak kepribadian merek ke aplikasi Anda, pemilihan font yang tepat dapat memberikan dampak yang besar.

Memperoleh Font
Hal pertama yang Anda butuhkan adalah file font. Sebagai contoh yang berfungsi, kita akan menggunakan Inter Black dari keluarga font Inter yang gratis dan sumber terbuka yang dikembangkan oleh Rasmus Anderson. Konvensi umum dalam aplikasi React Native adalah menempatkan font Anda dalam direktori ./assets/fonts. Namun, Anda dapat menempatkannya di mana pun Anda suka.

## Memuat Font

Setelah tahap instalasi, impor hook `useFonts` dari paket `expo-font` ke dalam proyek Anda. Hook ini akan melacak status pemuatan font. Ketika aplikasi diinisialisasi, hook tersebut akan memuat peta font seperti yang ditunjukkan dalam contoh di bawah ini:

```javascript
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("./assets/fonts/Inter-Black.otf"),
  });
}
```

Kemudian, Anda dapat menggunakan font pada komponen `<Text>` dengan menggunakan prop gaya `fontFamily`.

```javascript
<Text style={{ fontFamily: "Inter-Black", fontSize: 30 }}>Inter Black</Text>
```

Sebagai alternatif, Anda juga dapat menggunakan `Font.loadAsync` untuk memuat font dalam aplikasi Anda. Informasi lebih lanjut mengenai `Font.loadAsync` dapat ditemukan di [dokumentasi Expo Fonts](https://docs.expo.dev/develop/user-interface/fonts/#using-fontloadasync-instead-of-the-usefonts-hook).

Dengan mengikuti langkah-langkah ini, Anda dapat memuat dan menggunakan font dalam proyek Anda serta mengaplikasikannya pada komponen `<Text>` dengan menggunakan prop gaya `fontFamily`.

## Penyimpanan Data

Pelajari tentang berbagai pustaka yang tersedia untuk menyimpan data dalam proyek Expo Anda.

Menyimpan data dapat menjadi hal yang penting dalam fitur-fitur yang diimplementasikan dalam aplikasi seluler Anda. Ada berbagai cara untuk menyimpan data dalam proyek Expo Anda tergantung pada jenis data yang ingin Anda simpan dan persyaratan keamanan dari aplikasi Anda. Halaman ini mencantumkan berbagai pustaka untuk membantu Anda memutuskan solusi mana yang terbaik untuk proyek Anda.

### Expo SecureStore

![expo-secure-store](https://docs.expo.dev/static/images/packages/expo-secure-store.png)

`expo-secure-store` menyediakan cara untuk mengenkripsi dan menyimpan pasangan kunci-nilai secara aman di perangkat.

- [Referensi API Expo SecureStore](https://docs.expo.dev/versions/latest/sdk/securestore/)

Untuk informasi lebih lanjut tentang cara menginstal dan menggunakan `expo-secure-store`, lihat dokumentasi API-nya.

### Expo FileSystem

![expo-file-system](https://docs.expo.dev/static/images/packages/expo-file-system.png)

`expo-file-system` memberikan akses ke sistem file yang disimpan secara lokal di perangkat. Dalam Expo Go, setiap proyek memiliki sistem file terpisah dan tidak memiliki akses ke file proyek Expo lainnya. Namun, pustaka ini dapat menyimpan konten yang dibagikan oleh proyek lain ke sistem file lokal dan membagikan file lokal dengan proyek lain. Selain itu, pustaka ini juga mampu mengunggah dan mengunduh file dari URL jaringan.

- [Referensi API Expo FileSystem](https://docs.expo.dev/versions/latest/sdk/filesystem/)

Untuk informasi lebih lanjut tentang cara menginstal dan menggunakan `expo-file-system`, lihat dokumentasi API-nya.

### Expo SQLite

Paket `expo-sqlite` memberikan akses aplikasi Anda ke database yang dapat diquery melalui API yang mirip dengan WebSQL. Database ini dipertahankan di antara restart aplikasi Anda. Anda dapat menggunakannya untuk mengimpor database yang sudah ada, membuka database, membuat tabel, memasukkan item, melakukan query dan menampilkan hasil, serta menggunakan pernyataan yang sudah dipersiapkan.

- [Referensi API Expo SQLite](https://docs.expo.dev/versions/latest/sdk/sqlite/)

Untuk informasi lebih lanjut tentang cara menginstal dan menggunakan `expo-sqlite`, lihat dokumentasi API-nya.

### Async Storage

![Async Storage](https://react-native-async-storage.github.io/async-storage/img/logo.svg)

Async Storage adalah penyimpanan asinkron, tidak terenkripsi, berkelanjutan dengan pola pasangan kunci-nilai untuk aplikasi React Native. Ini memiliki API yang sederhana dan merupakan pilihan yang baik untuk menyimpan jumlah data kecil. Ini juga merupakan pilihan yang baik untuk menyimpan data yang tidak membutuhkan enkripsi, seperti preferensi pengguna atau keadaan aplikasi.

- [Dokumentasi Async Storage](https://react-native-async-storage.github.io/async-storage/)

Untuk informasi lebih lanjut tentang cara menginstal dan menggunakan Async Storage, lihat dokumentasinya.

### Pustaka Lainnya

Terdapat pustaka lain yang tersedia untuk menyimpan data untuk tujuan yang berbeda. Misalnya, Anda mungkin tidak membutuhkan enkripsi dalam proyek Anda atau sedang mencari solusi yang lebih cepat yang mirip dengan Async Storage.

Kami sarankan untuk melihat [React Native](https://reactnative.dev/docs/storage) untuk daftar pustaka yang dapat membantu Anda menyimpan data proyek Anda.

Dengan menggunakan pustaka-pustaka ini, Anda dapat memilih solusi yang sesuai dengan kebutuhan penyimpanan data dalam proyek Expo Anda.

# 🚀 Routing

## Expo Router

Expo Router adalah pustaka routing sumber terbuka untuk aplikasi Universal React Native yang dibangun dengan Expo.

Expo Router adalah router berbasis file untuk aplikasi React Native dan web. Ini memungkinkan Anda mengelola navigasi antara layar-layar dalam aplikasi Anda, memungkinkan pengguna berpindah dengan lancar antara bagian-bagian yang berbeda dari antarmuka aplikasi Anda, menggunakan komponen yang sama di beberapa platform (Android, iOS, dan web).

pustaka ini membawa konsep routing file terbaik dari web ke aplikasi universal - memungkinkan routing Anda berfungsi di setiap platform. Ketika sebuah file ditambahkan ke direktori aplikasi, file tersebut secara otomatis menjadi rute dalam navigasi Anda.

Fitur-fitur

- Native: Dibangun di atas suite React Navigation yang kuat, navigasi Expo Router benar-benar native dan dioptimalkan untuk platform secara default.
- Dapat Dibagikan: Setiap layar dalam aplikasi Anda secara otomatis dapat diakses melalui deep link. Ini memungkinkan setiap rute dalam aplikasi Anda dapat dibagikan dengan tautan.
- Offline-first: Aplikasi di-cache dan berjalan dengan mode offline-first, dengan pembaruan otomatis saat Anda menerbitkan versi baru. Menghandle semua URL asli masuk tanpa koneksi jaringan atau server.
- Dioptimalkan: Rute-rute secara otomatis dioptimalkan dengan evaluasi malas (lazy-evaluation) dalam mode produksi, dan bundling tertunda dalam mode pengembangan.
- Iterasi: Universal Fast Refresh di Android, iOS, dan web, bersama dengan memoisasi artefak dalam bundler untuk menjaga kecepatan pengembangan pada skala yang besar.
- Universal: iOS, Android, dan web berbagi struktur navigasi yang seragam, dengan kemampuan untuk menggunakan API khusus platform di tingkat rute.
- Dapat Ditemukan: Expo Router memungkinkan pembuatan konten statis pada saat pembangunan (build-time static rendering) di web, dan penghubungan universal ke aplikasi asli. Artinya, konten aplikasi Anda dapat diindeks oleh mesin pencari.

# Instalasi Expo Router

Pelajari cara memulai dengan cepat dengan membuat proyek baru menggunakan Expo Router atau menambahkan pustaka ini ke proyek yang sudah ada.

Berikut langkah-langkah untuk membuat proyek baru dengan pustaka Expo Router atau menambahkannya ke proyek yang sudah ada.

## Memulai dengan Cepat

1. Kami menyarankan untuk membuat aplikasi Expo baru menggunakan `create-expo-app`. Ini akan membuat proyek minimal dengan pustaka Expo Router sudah terpasang. Untuk membuat proyek, jalankan perintah berikut:

```
npx create-expo-app@latest --template tabs@49
```

2. Setelah pengaturan selesai, Anda dapat memulai proyek dengan menjalankan:

```
npx expo start
```

Untuk melihat aplikasi Anda di perangkat seluler, kami menyarankan untuk memulai dengan Expo Go. Ketika aplikasi Anda semakin kompleks dan Anda membutuhkan lebih banyak kontrol, Anda dapat membuat versi build pengembangan.
Anda juga dapat membuka proyek dalam web browser dengan menekan tombol `w` di antarmuka Terminal. Tekan `a` untuk Android (memerlukan Android Studio) atau `i` untuk iOS (memerlukan macOS dengan Xcode).

## Instalasi Manual

Pastikan versi Expo Router kompatibel dengan versi SDK Expo yang digunakan oleh proyek Anda.

| Expo SDK | Expo Router |
| -------- | ----------- |
| 49.0.0   | 2.0.0       |
| 48.0.0   | 1.0.0       |

### Persyaratan

Pastikan komputer Anda sudah siap untuk menjalankan aplikasi Expo.

1. Buat Proyek Expo
   Untuk membuat proyek baru, jalankan perintah berikut:

```
npx create-expo-app
```

2. Instal Dependensi
   Anda perlu menginstal dependensi berikut:

```
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar react-native-gesture-handler
```

Perintah di atas akan menginstal versi-versi dependensi yang kompatibel dengan versi SDK Expo yang digunakan oleh proyek Anda.

3. Pengaturan Titik Masuk
   SDK 49 dan yang lebih baruSDK 48
   Gunakan file entry expo-router/entry dalam package.json. File klien awal adalah app/\_layout.js.

```
{
  "main": "expo-router/entry"
}
```

4. Modifikasi Konfigurasi Proyek
   Tambahkan skema deep linking dan aktifkan Metro web pada konfigurasi aplikasi Anda (app.json atau app.config.js):

```
{
  "expo": {
+   "scheme": "myapp",
+   "web": {
+     "bundler": "metro"
+   }
  }
}
```

5. Modifikasi babel.config.js
   Tambahkan plugin expo-router/babel pada array plugins di dalam file babel.config.js proyek Anda:

```
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['expo-router/babel'],
  };
};
```

Untuk Expo SDK di bawah 49
Expo Router membutuhkan setidaknya metro@0.76.0. Jika Anda menggunakan Expo SDK versi di bawah 49, Anda perlu memaksa meningkatkan versi metro dengan menetapkan resolusi Yarn atau npm override.

Yarn

```
{
  "resolutions": {
    "metro": "0.76.0",
    "metro-resolver": "0.76.0"
  }
}
```

npm

```
npm install metro@0.76.0 metro-resolver@0.76.0
```

Dengan mengikuti langkah-langkah ini, Anda dapat membuat proyek baru dengan Expo Router atau menambahkan pustaka ini ke proyek yang sudah ada.

## 🧠 Config Plugins

## Pengenalan

Pengenalan tentang config plugin untuk proyek Expo.

Pemasangan otomatis modul native ke dalam proyek Anda memungkinkan. Kadang-kadang, modul memerlukan pengaturan yang lebih kompleks. Config plugin dapat digunakan untuk mengonfigurasi secara otomatis proyek native Anda untuk modul tersebut dan mengurangi kompleksitas dengan menghindari interaksi langsung dengan proyek native.

Apa itu config plugin
Config plugin adalah sistem untuk memperluas konfigurasi aplikasi dan menyesuaikan proses pra-pembangunan untuk aplikasi Anda. Mereka dapat digunakan untuk menambahkan modul native yang tidak termasuk secara default, atau untuk menambahkan kode native lain yang perlu dikonfigurasi lebih lanjut.

Secara internal, Expo CLI menggunakan config plugin untuk menghasilkan dan mengonfigurasi semua kode native untuk proyek yang dikelola. Plugin melakukan berbagai hal seperti menghasilkan ikon aplikasi, mengatur nama aplikasi, dan mengonfigurasi AndroidManifest.xml, Info.plist, dan sebagainya.

Anda dapat memandang plugin seperti bundler untuk proyek native, dan menjalankan `npx expo prebuild` sebagai cara untuk mengumpulkan proyek dengan mengevaluasi semua plugin proyek. Melakukan hal ini akan menghasilkan direktori android dan ios. Direktori ini dapat diubah secara manual setelah dihasilkan, tetapi kemudian mereka tidak dapat dibangkitkan kembali dengan aman tanpa potensi menimpa modifikasi manual.

Menggunakan config plugin
Config plugin Expo sebagian besar berasal dari modul Node.js. Anda dapat menginstalnya seperti paket lain di proyek Anda.

Sebagai contoh, expo-camera memiliki plugin yang menambahkan izin kamera ke AndroidManifest.xml dan Info.plist. Untuk menginstalnya di proyek Anda, jalankan perintah berikut:

```
expo install expo-camera
```

Di konfigurasi aplikasi Anda (app.json atau app.config.js), Anda dapat menambahkan expo-camera ke daftar plugin:

```json
{
  "expo": {
    "plugins": ["expo-camera"]
  }
}
```

Beberapa plugin seperti untuk expo-camera dapat disesuaikan dengan cara memberikan array, di mana argumen kedua adalah opsi:

```json
{
  "expo": {
    "plugins": [
      [
        "expo-camera",
        {
          "cameraPermission": "Izinkan $(PRODUCT_NAME) untuk mengakses kamera Anda."
        }
      ]
    ]
  }
}
```

Untuk setiap paket Expo yang memiliki config plugin yang tersedia, Anda akan menemukan informasi lebih lanjut mengenainya di referensi API paket tersebut.

Setelah menjalankan `npx expo prebuild`, modifikasi akan dikompilasi dan file-file native berubah.

Perubahan tersebut tidak berlaku sampai Anda membangun ulang proyek native, misalnya dengan menggunakan Xcode. Jika Anda menggunakan config plugin dalam aplikasi yang dikelola, mereka akan diterapkan selama fase pra-pembangunan pada eas build.

## 💡 API Integration

Dalam pengembangan aplikasi, seringkali kita perlu berkomunikasi dengan API untuk mendapatkan atau mengirim data. Dalam lingkungan Expo, kita dapat menggunakan pustaka Axios untuk melakukan permintaan HTTP ke API. Axios adalah pustaka JavaScript yang populer untuk melakukan permintaan HTTP dari browser atau dari sisi server.

Berikut adalah langkah-langkah untuk mengintegrasikan Axios dalam proyek Expo Anda:

1. Install Axios dengan menjalankan perintah berikut di terminal proyek Anda:

```shell
npm install axios
```

2. Setelah instalasi selesai, Anda dapat menggunakan Axios dalam kode JavaScript Anda. Contoh penggunaan Axios untuk melakukan permintaan GET ke API adalah sebagai berikut:

```javascript
import axios from "axios";

axios
  .get("https://api.example.com/data")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
```

3. Anda dapat mengganti URL `https://api.example.com/data` dengan URL API yang sesuai dengan kebutuhan Anda.

Dalam contoh di atas, kita menggunakan metode `get` untuk melakukan permintaan GET ke API. Anda juga dapat menggunakan metode lain seperti `post`, `put`, `delete`, dll. Sesuaikan dengan jenis permintaan yang Anda butuhkan.

4. Setelah mendapatkan data dari API, Anda dapat memprosesnya sesuai dengan kebutuhan aplikasi Anda.

Dengan menggunakan Axios, Anda dapat dengan mudah berinteraksi dengan API dalam aplikasi Expo Anda dan mengambil atau mengirim data sesuai kebutuhan. Pastikan untuk membaca dokumentasi resmi Axios (https://axios-http.com/) untuk informasi lebih lanjut tentang fitur dan opsi yang tersedia.

Sekarang, Anda siap untuk mengintegrasikan API dalam proyek Expo Anda menggunakan Axios!

## Contoh Penggunaan API dalam Expo (Metode GET)

Dalam contoh berikut, kita akan menggunakan Axios untuk melakukan permintaan GET ke API https://jsonplaceholder.typicode.com/users untuk mendapatkan informasi tentang 10 pengguna.

```javascript
import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import axios from "axios";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users?_limit=10"
        );
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <View>
      <Text>List Pengguna:</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>Nama: {item.name}</Text>
            <Text>Email: {item.email}</Text>
            <Text>
              Alamat: {item.address.street}, {item.address.city}
            </Text>
            <Text>Telepon: {item.phone}</Text>
            <Text>Website: {item.website}</Text>
            <Text>Perusahaan: {item.company.name}</Text>
            <Text>-------------------</Text>
          </View>
        )}
      />
    </View>
  );
}
```

## 👏 Development builds

"Masih dalam pengembangan"
