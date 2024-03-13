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