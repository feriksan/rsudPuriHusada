import React, {Fragment} from 'react';
import {Text, View, StyleSheet, Image} from '@react-pdf/renderer';
import DynamicTextView from "./DynamicTextView.jsx";

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:"center",
        height: 16,
        fontStyle: 'bold',
    },
    row2:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:"center",
        height: 16,
        marginTop:40
    },
    rowLong: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:"center",
        display:"flex",
        height: 32,
        fontStyle: 'bold',
    },
    row3: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        height: 16,
        fontStyle: 'bold',
        width: "50%",
        flexWrap: 'wrap',
        flex: 1,
    },
    item: {
        flexDirection:"row",
        flexWrap: 'wrap',
        flex: 1,
        width: '50%' // is 50% of container width
    },
    printTitle: {
        // backgroundColor: '#ffa6c9',
        width: '58%',
        fontSize:11 ,
        textAlign: 'left',
        paddingLeft: 8,
    },
    printData: {
        // backgroundColor: '#ffa6c9',
        width: '90%',
        flexWrap: 'wrap',
        maxWidth:'90%',
        fontSize:11,
        justifyContent:"center",
        textAlign: 'left',
        paddingRight: 2,
        textOverflow:"ellipsis",
        display: 'table-cell',
        verticalAlign: 'middle'
    },
    printDataLong: {
        // backgroundColor: '#ffa6c9',
        width: '90%',
        height:25,
        flexWrap: 'wrap',
        maxWidth:'90%',
        justifyContent:"center",
        alignItems:"center",
        verticalAlign:"middle",
        fontSize:11,
        textAlign: 'left',
        paddingRight: 2,
        textOverflow:"ellipsis"
    },
    qty: {
        width: '7%',
        fontSize:11,
        textAlign: 'left',
        paddingRight: 1,
    },
    rate: {
        width: '50%',
        textAlign: 'left',
        paddingRight: 8,
    },
    divider: {
        width: '5%'
    },
    barcode: {
        height: '20px',
        width: '770px',
        marginBottom: 20
    },
    peserta: {
        textAlign:"center",
        width:"60%",
        fontSize: 12
    },
    dividerQr:{
        width:'83%'
    },
    qr: {
        height: '50px',
        width: '60px',
        marginTop: 40
    }
});


const InvoiceTableRow = ({items, jadwal, barcode, qr, bpjsData, rujukan}) => {
    console.log(rujukan)
    const checkNull = (string) => {
        if(jadwal.dataJson == null){
            return "-"
        }
        let checkChar = string.trim().split(/\s+/)
        return checkChar != 0 ? string : "Empty"
    }
    return (
    <Fragment>
        {/*<DynamicTextView leftData={items.noSep} rightData={barcode} leftTittle={"No. Sep"} rightTittle={""} type1={"text"} type2={"barcode"}></DynamicTextView>*/}
        <View style={styles.row} key={items.noSep.toString()}>
            <Text style={styles.printTitle}>No. Sep</Text>
            <Text style={styles.qty}>:</Text>
            <Text style={styles.printData}>{items.noSep}</Text>
            <Text style={styles.divider}></Text>
            <Image style={styles.barcode}
                src={barcode}
            />
        </View>
        <View style={styles.row} key={items.noSep.toString()}>
            <Text style={styles.printTitle}>Tgl. Sep</Text>
            <Text style={styles.qty}>:</Text>
            <Text style={styles.printData}>{items.tglSep}</Text>
            <Text style={styles.divider}></Text>
            <Text style={styles.printTitle}>PRB</Text>
            <Text style={styles.qty}>:</Text>
            <Text style={styles.printData}>Prolanis DM, Prolanis HT</Text>
        </View>
        <View style={styles.row} key={items.noSep.toString()}>
            <Text style={styles.printTitle}>No. Kartu</Text>
            <Text style={styles.qty}>:</Text>
            <Text style={styles.printData}>{items.peserta.noKartu}</Text>
            <Text style={styles.divider}></Text>
            <Text style={styles.printTitle}>Peserta</Text>
            <Text style={styles.qty}>:</Text>
            <Text style={styles.printData}>{bpjsData.jenisPeserta.keterangan}</Text>
        </View>
        <View style={items.peserta.nama.split("").length > 23 ? styles.rowLong : styles.row} key={items.noSep.toString()}>
            <Text style={styles.printTitle}>Nama Perserta</Text>
            <Text style={styles.qty}>:</Text>
            <Text style={items.peserta.nama.split("").length > 23 ? styles.printDataLong : styles.printData}>{items.peserta.nama}</Text>
            <Text style={styles.divider}></Text>
            <Text style={styles.printTitle}>Jns. Rawat</Text>
            <Text style={styles.qty}>:</Text>
            <Text style={styles.printData}>{items.jnsPelayanan}</Text>
        </View>
        <View style={styles.row} key={items.noSep.toString()}>
            <Text style={styles.printTitle}>Tgl. Lahir</Text>
            <Text style={styles.qty}>:</Text>
            <Text style={styles.printData}>{items.peserta.tglLahir}</Text>
            <Text style={styles.divider}></Text>
            <Text style={styles.printTitle}>Jns.Kunjunga</Text>
            <Text style={styles.qty}>:</Text>
            <Text style={styles.printData}>- Kunjungan Kontrol(ulangan)</Text>
        </View>
        <View style={checkNull(jadwal.dataJson.poli).split("").length > 23 ? styles.rowLong : styles.row} key={items.noSep.toString()}>
            <Text style={styles.printTitle}>No. Telepon</Text>
            <Text style={styles.qty}>:</Text>
            <Text style={styles.printData}>{bpjsData.mr.noTelepon}</Text>
            <Text style={styles.divider}></Text>
            <Text style={styles.printTitle}>Poli Perujuk</Text>
            <Text style={styles.qty}>:</Text>
            <Text style={checkNull(jadwal.dataJson.poli).split("").length > 23 ? styles.printDataLong : styles.printData}>{checkNull(jadwal.dataJson.poli)}</Text>
        </View>
        <View style={styles.rowLong} key={items.noSep.toString()}>
            <Text style={styles.printTitle}>Sub/Spesialis</Text>
            <Text style={styles.qty}>:</Text>
            <Text style={styles.printDataLong}>{items.diagnosa}</Text>
            <Text style={styles.divider}></Text>
            <Text style={styles.printTitle}>Kls. Hak</Text>
            <Text style={styles.qty}>:</Text>
            <Text style={styles.printData}>{bpjsData.hakKelas.keterangan}</Text>
        </View>
        <View style={checkNull(jadwal.dataJson.doctor).split("").length > 23 ? styles.rowLong : styles.row} key={items.noSep.toString()}>
            <Text style={styles.printTitle}>Dokter</Text>
            <Text style={styles.qty}>:</Text>
            <Text style={checkNull(jadwal.dataJson.doctor).split("").length > 23 ? styles.printDataLong : styles.printData}>{checkNull(jadwal.dataJson.doctor)}</Text>
            <Text style={styles.divider}></Text>
            <Text style={styles.printTitle}>Kls. Rawat</Text>
            <Text style={styles.qty}>:</Text>
            <Text style={styles.printData}></Text>
        </View>
        <View style={styles.row} key={items.noSep.toString()}>
            <Text style={styles.printTitle}>Faskes</Text>
            <Text style={styles.qty}>:</Text>
            <Text style={styles.printData}>{rujukan.asalFaskes}</Text>
            <Text style={styles.divider}></Text>
            <Text style={styles.printTitle}>Penjamin</Text>
            <Text style={styles.qty}>:</Text>
            <Text style={styles.printData}></Text>
        </View>
        <View style={styles.row} key={items.noSep.toString()}>
            <Text style={styles.printTitle}>Diagnosa Awal</Text>
            <Text style={styles.qty}>:</Text>
            <Text style={styles.printData}>{rujukan.asalFaskes}</Text>
            <Text style={styles.divider}></Text>
            <Text style={styles.printTitle}></Text>
            <Text style={styles.qty}></Text>
            <Text style={styles.printData}></Text>
        </View>
        <View style={styles.row} key={items.noSep.toString()}>
            <Text style={styles.printTitle}>Catatan</Text>
            <Text style={styles.qty}>:</Text>
            <Text style={styles.printData}>{items.catatan}</Text>
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
            <Text style={styles.dividerQr}>*Saya Menyetujui BPJS Kesehatan menggunakan informasi Medis Pasien jika diperlukan. {'\n'} Cetakan ke 1 20/11/2023 11:54:59 AM</Text>
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