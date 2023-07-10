const data = [{
    'nama' : 'Podo',
    'status' : 'Cerai',
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
let jumlahAnak = 0
let totalTunjangan = 0

for (let i = 0; i<data.length; i++){
    if (data[i].status === 'Menikah'){
        let tunjanganIstri = 2000000
        for (let j = 0 ; j < data[i].anak.length ; j ++){            
            const umur = new Date(data[i].anak[j].tanggalLahir).getFullYear()
            const umurAnak = tahun-umur
            if(umurAnak <= 24 && jumlahAnak < 2) {
                jumlahAnak += 1
            }
        }
        totalTunjangan = tunjanganIstri + (tunjanganAnak*jumlahAnak)
    }
    else{
            for (let j = 0 ; j < data[i].anak.length ; j ++){            
            const umur = new Date(data[i].anak[j].tanggalLahir).getFullYear()
            const umurAnak = tahun-umur
            if(umurAnak <= 24 && jumlahAnak < 2) {
                jumlahAnak += 1
            }
        }
        totalTunjangan = tunjanganAnak*jumlahAnak
    }
}


console.log(`jumlah tunjangan yang diberikan adalah ${totalTunjangan}`);