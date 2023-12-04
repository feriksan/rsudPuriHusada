import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({

    titleContainer:{
        flexDirection: 'column',
        marginTop: 12
    },
    reportTitle:{
        fontSize: 7,
        textAlign: 'left',
        textTransform: 'uppercase',
    }
});


const InvoiceThankYouMsg = () => (
    <View style={styles.titleContainer}>
        {/*<QRCode value={'https://ant.design/' || '-'} />*/}
        <Text style={styles.reportTitle}>*Saya Menyetujui BPJS Kesehatan menggunakan informasi Medis Pasien jika diperlukan.</Text>
        <Text style={styles.reportTitle}><Text style={styles.reportTitle}>*Saya Menyetujui BPJS Kesehatan menggunakan informasi Medis Pasien jika diperlukan.</Text></Text>
        <Text style={styles.reportTitle}>Cetakan ke 1 20/11/2023 11:54:59 AM</Text>
    </View>
);

export default InvoiceThankYouMsg