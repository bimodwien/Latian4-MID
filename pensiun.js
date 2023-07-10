const data = [{
    'nama' : 'Podo',
    'status' : 'Menikah',
    'anak' : [
        {
            'namaAnak': 'anak pertama',
            'tanggalLahir' : new Date('1997-04-12')
        },
        {
            'namaAnak' : 'anak kedua',
            'tanggalLahir' : new Date('2002-04-12')
        },
        {
            'namaAnak' : 'anak Ketiga',
            'tanggalLahir' : new Date('2009-04-12')
        }
    ]
}]

for (let i = 0; i<data.length; i++){
    if (data[i].status === 'Menikah'){
        let tunjangan = 2000000
        let tunjanganAnak = 1000000
        console.log(data[i].anak);
        
    }
    else{
        console.log('Belum Menikah');
    }
}