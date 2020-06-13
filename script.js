let aracBilgileri = [
  {
    id: 'bmw116d_1234',
    model : '116d',
    yil : 2015,
    renk : 'white',
    servisKayitlari : [
      {
        id : 'bmw116d_1234_1', tarih : '30.01.2016', km:13000, toplamÜcret:900,
        servisDetayi : 
        [
          {id : 'bmw116d_1234_1_1', islem : 'yag degisimi', ücret : 300},
          {id : 'bmw116d_1234_1_2', islem : 'filtre degisimi', ücret : 300},
          {id : 'bmw116d_1234_1_3', islem : 'fren hidroligi', ücret : 300}      
        ]
      },
      {
        id : 'bmw116d_1234_2', tarih : '10.01.2017', km:28000, toplamÜcret:1800,
        servisDetayi : 
        [
          {id : 'bmw116d_1234_2_1', islem : 'yag degisimi', ücret : 350},
          {id : 'bmw116d_1234_2_2', islem : 'filtre degisimi', ücret : 350},
          {id : 'bmw116d_1234_2_3', islem : 'fren hidroligi', ücret : 300},
          {id : 'bmw116d_1234_2_4', islem : 'balata degisimi', ücret : 800}      
        ]
      }
    ]
  },
  {
    id: 'bmw118i_1234',
    model : '118i',
    yil : 2015,
    renk : 'white',
    servisKayitlari : [
      {
        id : 'bmw1118i_1234_1', tarih : '30.01.2016', km:13000, toplamÜcret:900,
        servisDetayi : 
        [
          {id : 'bmw118i_1234_1_1', islem : 'yag degisimi', ücret : 300},
          {id : 'bmw118i_1234_1_2', islem : 'filtre degisimi', ücret : 300},
          {id : 'bmw118i_1234_1_3', islem : 'fren hidroligi', ücret : 300}      
        ]
      },
      {
        id : 'bmw118i_1234_2', tarih : '10.01.2017', km:28000, toplamÜcret:1800,
        servisDetayi : 
        [
          {id : 'bmw118i_1234_2_1', islem : 'yag degisimi', ücret : 350},
          {id : 'bmw118i_1234_2_2', islem : 'filtre degisimi', ücret : 350},
          {id : 'bmw118i_1234_2_3', islem : 'fren hidroligi', ücret : 300},
          {id : 'bmw118i_1234_2_4', islem : 'balata degisimi', ücret : 800}      
        ]
      }
    ]
  },
  {
    id: 'bmw320d_1234',
    model : '320d',
    yil : 2015,
    renk : 'white',
    servisKayitlari : [
      {
        id : 'bmw320d_1234_1', tarih : '30.01.2016', km:13000, toplamÜcret:900,
        servisDetayi : 
        [
          {id : 'bmw320d_1234_1_1', islem : 'yag degisimi', ücret : 300},
          {id : 'bmw320d_1234_1_2', islem : 'filtre degisimi', ücret : 300},
          {id : 'bmw320d_1234_1_3', islem : 'fren hidroligi', ücret : 300}      
        ]
      },
      {
        id : 'bmw320d_1234_2', tarih : '10.01.2017', km:28000, toplamÜcret:1800,
        servisDetayi : 
        [
          {id : 'bmw320d_1234_2_1', islem : 'yag degisimi', ücret : 350},
          {id : 'bmw320d_1234_2_2', islem : 'filtre degisimi', ücret : 350},
          {id : 'bmw320d_1234_2_3', islem : 'fren hidroligi', ücret : 300},
          {id : 'bmw320d_1234_2_4', islem : 'balata degisimi', ücret : 800}      
        ]
      }
    ]
  }
]

console.log(aracBilgileri[0].servisKayitlari[0].servisDetayi);