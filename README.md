## Laporan Praktikum

|  | Pemrograman Berbasis Framework 2024 |
|--|--|
| NIM |  2141720031 |
| Nama |  Josafat Pratama Susilo |
| Kelas | TI - 3A |

### Praktikum 1

Pada praktikum satu, terdapat Todo untuk menambahkan sebuah halaman profile dengan routing next.js berisikan biodata. Langkah yang saya lakukan adalah dengan membuat sebuah folder bernama profile dan dalam folder tersebut saya buat sebuah file bernama page.tsx. Penamaan folder disini akan berpengaruh pada url yang akan diakses pada routing. Untuk isi dari page.tsx, saya isikan sebagai berikut

```typescript
export default function About() {
    return (
        <h1>
            Nama: Josafat Pratama Susilo
            <br />
            NIM: 2141720031
            <br />
            TTL: Malang, 01-05-2003
        </h1>
    )
}
```

Dengan output sebagai berikut:
![Praktikum 1](/assets-report/01.png)

### Praktikum 2

Pada praktikum kedua, terdapat penerapan dari nested routing. Routing ini terapkan dengan membuat folder di dalam folder dari routing lain. Langkah yang saya lakukan dalam praktikum ini adalah membuat sebuah folder bernama blogs dan di dalam folder blogs tersebut, saya membuat 2 folder baru yaitu first dan second. Selanjutnya pada masing-masing folder tersebut (blogs, first, dan second) saya membuat sebuah file bernama page.tsx. 

Pada file page.tsx di dalam folder blogs, saya isikan sebagai berikut

```typescript
export default function Blog() {
    return (
        <h1><i>Blog</i></h1>
    );
}
```

Output dari kode diatas adalah sebagai berikut:
![Praktikum 2](/assets-report/praktikum-2_blog.png)

Kemudian pada file page.tsx di dalam folder first, saya isikan sebagai berikut

```typescript
export default function First() {
    return (
        <h1><i>First Blog</i></h1>
    );
}
```

Output dari kode diatas adalah sebagai berikut:
![Praktikum 2](/assets-report/praktikum-2_first-blog.png)

Pada praktikum 2 terdapat Todo yang harus dilakukan yaitu mengisi page.tsx dalam folder second. Saya mengisi file tersebut sebagai berikut

```typescript
export default function Second() {
    return (
        <h1><i>Second Blog</i></h1>
    );
}
```

Output dari Todo adalah sebagai berikut:
![Praktikum 2](/assets-report/praktikum-2_second-blog.png)

Dalam praktikum 2 juga terdapat pertanyaan berikut:
```
Apa kekurangan yang mungkin terjadi jika menggunakan pendekatan pada Praktikum 2 untuk menangani routing?
```

Jawabannya adalah:

Kekurangan yang mungkin terjadi jika menggunakan pendekatan pada Praktikum 2 untuk menangani routing adalah jika terdapat banyak folder yang harus diakses, maka akan sulit untuk mengelola routingnya. Selain itu, jika terdapat banyak folder, maka akan sulit untuk mengetahui folder mana yang harus diakses terlebih dahulu. Tidak itu saja, pendekataan dengan metode nested routing ini tidak cocok jika ingin mengakses halaman yang selalu berubah, seperti akan mengakses id tertentu karena pastinya akan susah jika harus membuat folder sesuai dengan id yang ada. Sehingga jika ingin mengakses halaman yang selalu berubah atau mengakses id, akan lebih cocok jika menggunakan dynamic routing.
