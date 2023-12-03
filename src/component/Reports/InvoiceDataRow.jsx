import React, {Fragment} from 'react';
import {Text, View, StyleSheet, Image} from '@react-pdf/renderer';

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 10,
        fontStyle: 'bold',
    },
    row2:{
        flexDirection: 'row',
        height: 10,
        marginTop:40
    },
    printTitle: {
        width: '50%',
        textAlign: 'left',
        paddingLeft: 8,
    },
    printData: {
        width: '70%',
        textAlign: 'left',
        paddingRight: 2,
    },
    qty: {
        width: '5%',
        textAlign: 'left',
        paddingRight: 1,
    },
    rate: {
        width: '50%',
        textAlign: 'left',
        paddingRight: 8,
    },
    divider: {
        width: '20%'
    },
    barcode: {
        height: '20px',
        width: '100%',
        marginBottom: 20
    },
    peserta: {
        textAlign:"center",
        width:"75%"
    },
    dividerQr:{
        width:'77%'
    },
    qr: {
        height: '50px',
        width: '60px',
        marginTop: 40
    }
});


const InvoiceTableRow = ({items, jadwal, barcode, qr}) => {
    const checkNull = (string) => {
        if(jadwal.dataJson == null){
            return ""
        }
        let checkChar = string.trim().split(/\s+/)
        return checkChar != 0 ? string : "Empty"
    }
    return (
    <Fragment>
        <View style={styles.row} key={items.noSep.toString()}>
            <Text style={styles.printTitle}>No. Sep</Text>
            <Text style={styles.qty}>:</Text>
            <Text style={styles.printData}>{items.peserta.noMr}</Text>
            <Text style={styles.divider}></Text>
            <Image style={styles.barcode}
                src={barcode}
            />
        </View>
        <View style={styles.row} key={items.noSep.toString()}>
            <Text style={styles.printTitle}>Tgl. Sep</Text>
            <Text style={styles.qty}>:</Text>
            <Text style={styles.printData}>{items.peserta.nama}</Text>
            <Text style={styles.divider}></Text>
            <Text style={styles.printTitle}>PRB</Text>
            <Text style={styles.qty}>:</Text>
            <Text style={styles.printData}>Prolanis DM, Prolanis HT</Text>
        </View>
        <View style={styles.row} key={items.noSep.toString()}>
            <Text style={styles.printTitle}>No. Kartu</Text>
            <Text style={styles.qty}>:</Text>
            <Text style={styles.printData}>{checkNull(jadwal.dataJson == null ? "" : jadwal.dataJson.poli)}</Text>
            <Text style={styles.divider}></Text>
            <Text style={styles.printTitle}>Peserta</Text>
            <Text style={styles.qty}>:</Text>
            <Text style={styles.printData}>PEKERJA MANDIRI</Text>
        </View>
        <View style={styles.row} key={items.noSep.toString()}>
            <Text style={styles.printTitle}>Nama Perserta</Text>
            <Text style={styles.qty}>:</Text>
            <Text style={styles.printData}>{checkNull(jadwal.dataJson == null ? "" : jadwal.dataJson.doctor)}</Text>
            <Text style={styles.divider}></Text>
            <Text style={styles.printTitle}>Jns. Rawat</Text>
            <Text style={styles.qty}>:</Text>
            <Text style={styles.printData}>Rawat Jalan</Text>
        </View>
        <View style={styles.row} key={items.noSep.toString()}>
            <Text style={styles.printTitle}>Tgl. Lahir</Text>
            <Text style={styles.qty}>:</Text>
            <Text style={styles.printData}>{items.tglSep}</Text>
            <Text style={styles.divider}></Text>
            <Text style={styles.printTitle}>Jns.Kunjunga</Text>
            <Text style={styles.qty}>:</Text>
            <Text style={styles.printData}>- Kunjungan Kontrol(ulangan)</Text>
        </View>
        <View style={styles.row} key={items.noSep.toString()}>
            <Text style={styles.printTitle}>No. Telepon</Text>
            <Text style={styles.qty}>:</Text>
            <Text style={styles.printData}>{checkNull(jadwal.dataJson == null ? "" : jadwal.dataJson.jadwal)}</Text>
            <Text style={styles.divider}></Text>
            <Text style={styles.printTitle}>Poli Perujuk</Text>
            <Text style={styles.qty}>:</Text>
            <Text style={styles.printData}>-</Text>
        </View>
        <View style={styles.row} key={items.noSep.toString()}>
            <Text style={styles.printTitle}>Sub/Spesialis</Text>
            <Text style={styles.qty}>:</Text>
            <Text style={styles.printData}>{items.noSep}</Text>
            <Text style={styles.divider}></Text>
            <Text style={styles.printTitle}>Kls. Hak</Text>
            <Text style={styles.qty}>:</Text>
            <Text style={styles.printData}>Kelas 3</Text>
        </View>
        <View style={styles.row} key={items.noSep.toString()}>
            <Text style={styles.printTitle}>Dokter</Text>
            <Text style={styles.qty}>:</Text>
            <Text style={styles.printData}>{items.noSep}</Text>
            <Text style={styles.divider}></Text>
            <Text style={styles.printTitle}>Kls. Rawat</Text>
            <Text style={styles.qty}>:</Text>
            <Text style={styles.printData}></Text>
        </View>
        <View style={styles.row} key={items.noSep.toString()}>
            <Text style={styles.printTitle}>Faskes</Text>
            <Text style={styles.qty}>:</Text>
            <Text style={styles.printData}>{items.noSep}</Text>
            <Text style={styles.divider}></Text>
            <Text style={styles.printTitle}>Penjamin</Text>
            <Text style={styles.qty}>:</Text>
            <Text style={styles.printData}></Text>
        </View>
        <View style={styles.row} key={items.noSep.toString()}>
            <Text style={styles.printTitle}>Diagnosa Awal</Text>
            <Text style={styles.qty}>:</Text>
            <Text style={styles.printData}>{items.noSep}</Text>
            <Text style={styles.divider}></Text>
            <Text style={styles.printTitle}></Text>
            <Text style={styles.qty}></Text>
            <Text style={styles.printData}></Text>
        </View>
        <View style={styles.row} key={items.noSep.toString()}>
            <Text style={styles.printTitle}>Catatan</Text>
            <Text style={styles.qty}>:</Text>
            <Text style={styles.printData}>{items.noSep}</Text>
            <Text style={styles.divider}></Text>
            <Text style={styles.printTitle}></Text>
            <Text style={styles.qty}></Text>
            <Text style={styles.printData}></Text>
        </View>
        <View style={styles.row} key={items.noSep.toString()}>
            <Text style={styles.printTitle}></Text>
            <Text style={styles.qty}></Text>
            <Text style={styles.printData}></Text>
            <Text style={styles.divider}></Text>
            <Text style={styles.peserta}>Pasien/Keluarga Pasien</Text>
        </View>
        <View style={styles.row} key={items.noSep.toString()}>
            <Text style={styles.dividerQr}></Text>
            <Image style={styles.qr}
                   src={qr}
            />
        </View>
        <View style={styles.row2} key={items.noSep.toString()}>
            <Text style={styles.printTitle}></Text>
            <Text style={styles.qty}></Text>
            <Text style={styles.printData}></Text>
            <Text style={styles.divider}></Text>
            <Text style={styles.peserta}>{items.peserta.nama}</Text>
        </View>



    </Fragment> )
};

export default InvoiceTableRow