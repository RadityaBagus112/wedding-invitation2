export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Andika Galih Saputra',
            child: 'Putra ke 1',
            father: 'Tohani',
            mother: 'Siti Muslikhah',
            image: './src/assets/images/cowo.png'
        },
        P: {
            id: 2,
            name: 'Destry Nurvita',
            child: 'Putri ke 7',
            father: 'Dayat',
            mother: 'Carsem',
            image: './src/assets/images/cewe.png'
        },

        couple: './src/assets/images/couple.png'
    },

    time: {
        marriage: {
            year: '2026',
            month: 'Agustus',
            date: '13',
            day: 'Kamis',
            hours: {
                start: '08:00',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2026',
            month: 'Agustus',
            date: '13',
            day: 'Kamis',
            hours: {
                start: '08:00',
                finish: 'Selesai'
            }
        },
        address: 'Kediaman Mempelai Wanita, Jl.Tangsi rt02/rw04, Desa Pageraji Kec. Cilongok, Kab. Banyumas',
    },

    link: {
        calendar: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Akad+Nikah+Andika+Galih+Saputra+%26+Destry+Nurvita&dates=20260813T080000/20260813T100000&details=Dengan+penuh+rasa+syukur+dan+kebahagiaan%2C+kami+mengundang+Anda+untuk+menjadi+saksi+dan+bagian+dari+momen+suci+Akad+Nikah+Andika+Galih+Saputra+%26+Destry+Nurvita.+Kehadiran+serta+doa+restu+Anda+akan+menjadi+anugerah+yang+tak+ternilai+bagi+kami.+Terima+kasih+atas+segala+doa%2C+dukungan%2C+dan+kasih+yang+diberikan.&location=Rumah+Mempelai+Putri%2C+Desa+Pageraji',
        map: 'https://maps.app.goo.gl/ZNDCCzqFVbkzXK616',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.png'
        },
        {
            id: 2,
            image: './src/assets/images/2.png'
        },
        {
            id: 3,
            image: './src/assets/images/3.png'
        },
        {
            id: 4,
            image: './src/assets/images/4.png'
        },
        {
            id: 5,
            image: './src/assets/images/5.png'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'DESTRY NURVITA',
            icon: './src/assets/images/mandiri.png',
            rekening: '1800013605383'
        },
        {
            id: 2,
            name: 'ANDIKA GALIH SAPUTRA',
            icon: './src/assets/images/mandiri.png',
            rekening: '1730018884420'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbwisUDmqBZYKWEL7VadCpGh1jrXxX9gf3HfeYSqpAmAnw9WEvUdn6Bkt8hfdOt4yvuWPw/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
