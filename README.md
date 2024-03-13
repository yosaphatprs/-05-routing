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

Jawaban:

Kekurangan yang mungkin terjadi jika menggunakan pendekatan pada Praktikum 2 untuk menangani routing adalah jika terdapat banyak folder yang harus diakses, maka akan sulit untuk mengelola routingnya. Selain itu, jika terdapat banyak folder, maka akan sulit untuk mengetahui folder mana yang harus diakses terlebih dahulu. Tidak itu saja, pendekataan dengan metode nested routing ini tidak cocok jika ingin mengakses halaman yang selalu berubah, seperti akan mengakses id tertentu karena pastinya akan susah jika harus membuat folder sesuai dengan id yang ada. Sehingga jika ingin mengakses halaman yang selalu berubah atau mengakses id, akan lebih cocok jika menggunakan dynamic routing.

### Praktikum 3

Pada praktikum ketiga, terdapat penerapan pendekatan dengan dynamic routing. Pendekataan ini sangat berguna jika digunakan untuk melakukan routing halaman yang akan diakses berdasarkan ID. Hal ini dikarenakan path yang berubah secara dinamis akan didapatkan dan dapat dengan lebih mudah untuk diakses. Langkah yang saya lakukan pada praktikum ini adalah membuat folder products yang didalamnya terdapat folder bernama [productId], kurung siku pada penamaan akan menandakan bahwa itu adalah path dinamis yang dapat diambil nilainya nanti. Selanjutnya saya membuat file page.tsx di dalam folder products dan [productId]. 

Pada file page.tsx di dalam folder products, saya isikan sebagai berikut

```typescript
export default function ProductList() {
    return (
        <div>
            <h1>Product List</h1>
            <h2>Product 1</h2>
            <h2>Product 2</h2>
            <h2>Product 3</h2>
        </div>
    );
}
```
Dengan output sebagai berikut:
![Praktikum 3](/assets-report/praktikum-3_products-dynamic.png)

Kemudian pada file page.tsx di dalam folder [productId], saya isikan sebagai berikut

```typescript
type Props = {
    params: {
        productId: string
    }
}

export default function ProductDetails({ params }: Props) {
    return (
        <h1>Details about product {params.productId}</h1>
    )
}
```

Dengan output sebagai berikut (jika mengisi url dengan /products/1):
![Praktikum 3](/assets-report/praktikum-3_first-blog-dynamic.png)

Pada praktikum 3 ini terdapat 2 Todo,

Todo pertama adalah menerapkan dynamic route pada praktikum 2, saya melakukannya dengan membuat sebuah folder [blogId] di dalam folder Blog, kemudian saya buat sebuah file page.tsx di dalam folder [blogId] tersebut dan saya isikan dengan kode berikut:

```typescript
type Props = {
    params: {
        blogId: string
    }
}

export default function ProductDetails({ params }: Props) {
    return (
        <h1>This is Blog {params.blogId}</h1>
    )
}
```

Output dari kode diatas adalah sebagai berikut (jika mengisi url dengan /blogs/1):
![Praktikum 3](/assets-report/praktikum-3_first-blog-dynamic.png)

Sedangkan jika mengakses /blogs/5, maka outputnya adalah sebagai berikut:
![Praktikum 3](/assets-report/praktikum-3_fifth-blog-dynamic.png)

Todo kedua adalah dengan menggunakan konsep Nested Routes dan Dynamic Routes, buatlah halaman dengan routing /products/[productId]/reviews/[reviewId]

Langkah yang saya lakukan adalah membuat folder reviews di dalam folder [productId] dan di dalam folder reviews tersebut saya membuat sebuah folder bernama [reviewId]. Selanjutnya saya membuat file page.tsx di dalam folder reviews dan [reviewId]. Isi dari file page.tsx di dalam folder reviews adalah sebagai berikut:

```typescript
type Props = {
    params: {
        productId: string
        reviewId: string
    }
}

export default function ProductDetails({ params }: Props) {
    return (
        <>
            <h1>Here's review for {params.productId}</h1>
            <h2>Review ID: {params.reviewId}</h2>
        </>
    )
}
```

Output dari kode di atas adalah sebagai berikut (jika mengisi url dengan /products/5/reviews/1):
![Praktikum 3](/assets-report/praktikum-3_products-reviews-dynamic.png)


### Praktikum 4

Pada praktikum 4, terdapat penerapan dari penggunaan komponen Link untuk melakukan navigasi antar halaman. Komponen ini sudah disediakan oleh library Next.js sehingga tidak perlu membuat komponen sendiri. Langkah yang saya lakukan adalah melakukan import komponen tersebut dengan kode berikut:

```typescript
import Link from "next/link";
```

Kemudian saya ubah kode pada page.tsx dalam folder app dengan kode berikut:

```typescript
export default function Home() {
    return (
        <div>
            <h1>Welcome to Home</h1>
            <Link href='/profile'>Profile</Link>
            <br />
            <Link href='/about'>About</Link>
        </div>
    );
}
```

Output dari kode diatas adalah sebagai berikut:
![Praktikum 4](/assets-report/praktikum-4_home.png)

Jika salah satu link di klik, maka akan pindah halaman sesuai route yang dituju.

Pada praktikum ini terdapat Todo untuk menerapkan komponen Link ini pada praktikum sebelumnya. Disini saya mengambil praktikum 3 sebagai contoh. Saya menerapkan komponen Link pada file page.tsx di dalam folder products untuk melakukan navigasi ke halaman detail produk sesuai dengan Id-nya.

Kode page.tsx dalam folder products saya ubah menjadi sebagai berikut:

```typescript
import Link from "next/link";

export default function ProductList() {
    return (
        <div>
            <h1>Product List</h1>
            <Link href='/products/1'>Product 1</Link>
            <br />
            <Link href='/products/2'>Product 2</Link>
            <br />
            <Link href='/products/3'>Product 3</Link>
        </div>
    );
}
```

Maka tampilan dari halaman products akan menjadi seperti berikut:
![Praktikum 4](/assets-report/praktikum-4_products.png)

Selanjutnya jika Product 1 diklik, maka akan menuju halaman detail dari product 1 seperti berikut:
![Praktikum 4](/assets-report/praktikum-4_products-first.png)

Kemudian jika Product 3 diklik, maka akan menuju halaman detail dari product 3 seperti berikut:
![Praktikum 4](/assets-report/praktikum-4_products-third.png)