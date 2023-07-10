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

const tunjanganAnak = 1000000
const tahun = new Date().getFullYear()
let jumlahAnakYangTercover = 0
let totalTunjangan = 0

for (let i = 0; i<data.length; i++){
    const karyawan = data[i]
        let tunjanganIstri = karyawan.status === 'Menikah' ? 2000000 : 0

        // untuk menghitung jumlah anak yang tercover
        for (let j = 0 ; j < karyawan.anak.length ; j ++){            
            const umur = new Date(karyawan.anak[j].tanggalLahir).getFullYear()
            const umurAnak = tahun-umur
            if(umurAnak <= 24 && jumlahAnakYangTercover < 2) {
                jumlahAnakYangTercover += 1
            }
        }
        totalTunjangan = tunjanganIstri + (tunjanganAnak * jumlahAnakYangTercover)
}


console.log(`jumlah tunjangan yang diberikan adalah ${totalTunjangan}`);