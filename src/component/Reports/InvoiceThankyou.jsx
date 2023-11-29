import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({

    titleContainer:{
        flexDirection: 'row',
        marginTop: 12
    },
    reportTitle:{
        fontSize: 7,
        textAlign: 'center',
        textTransform: 'uppercase',
    }
});


const InvoiceThankYouMsg = () => (
    <View style={styles.titleContainer}>
        {/*<QRCode value={'https://ant.design/' || '-'} />*/}
        <Text style={styles.reportTitle}>RSUD PURI HUSADA TEMBILAHAN</Text>
    </View>
);

export default InvoiceThankYouMsg