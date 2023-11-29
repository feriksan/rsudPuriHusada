import React, {Fragment} from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 20,
        fontStyle: 'bold',
    },
    printTitle: {
        width: '45%',
        textAlign: 'left',
        paddingLeft: 8,
    },
    printData: {
        width: '80%',
        textAlign: 'right',
        paddingRight: 8,
    },
    qty: {
        width: '10%',
        textAlign: 'right',
        paddingRight: 8,
    },
    rate: {
        width: '50%',
        textAlign: 'right',
        paddingRight: 8,
    },
});


const InvoiceTableRow = ({items, jadwal}) => {
    console.log(jadwal)
    // const rows = items.map( item =>
    //     <View style={styles.row} key={item.sno.toString()}>
    //         <Text style={styles.description}>{item.desc}</Text>
    //         <Text style={styles.qty}>:</Text>
    //         <Text style={styles.rate}>{item.rate}</Text>
    //         {/*<Text style={styles.amount}>{(item.qty * item.rate).toFixed(2)}</Text>*/}
    //     </View>
    // )
    return (
    <Fragment>
        <View style={styles.row} key={items.noSep.toString()}>
            <Text style={styles.printTitle}>No. RM</Text>
            <Text style={styles.qty}>:</Text>
            <Text style={styles.printData}>{items.peserta.noMr}</Text>
        </View>
        <View style={styles.row} key={items.noSep.toString()}>
            <Text style={styles.printTitle}>Nama</Text>
            <Text style={styles.qty}>:</Text>
            <Text style={styles.printData}>{items.peserta.nama}</Text>
        </View>
        <View style={styles.row} key={items.noSep.toString()}>
            <Text style={styles.printTitle}>Poli Tujuan</Text>
            <Text style={styles.qty}>:</Text>
            <Text style={styles.printData}>{jadwal.poli}</Text>
        </View>
        <View style={styles.row} key={items.noSep.toString()}>
            <Text style={styles.printTitle}>Nama Dokter</Text>
            <Text style={styles.qty}>:</Text>
            <Text style={styles.printData}>{jadwal.doctor}</Text>
        </View>
        <View style={styles.row} key={items.noSep.toString()}>
            <Text style={styles.printTitle}>Hari / Tanggal</Text>
            <Text style={styles.qty}>:</Text>
            <Text style={styles.printData}>{items.tglSep}</Text>
        </View>
        <View style={styles.row} key={items.noSep.toString()}>
            <Text style={styles.printTitle}>Waktu</Text>
            <Text style={styles.qty}>:</Text>
            <Text style={styles.printData}>{jadwal.jadwal}</Text>
        </View>
        <View style={styles.row} key={items.noSep.toString()}>
            <Text style={styles.printTitle}>No Antrian</Text>
            <Text style={styles.qty}>:</Text>
            <Text style={styles.printData}>{items.tujuanKunj}</Text>
        </View>
    </Fragment> )
};

export default InvoiceTableRow