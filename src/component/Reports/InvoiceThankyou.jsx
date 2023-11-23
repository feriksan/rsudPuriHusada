import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';
import {QRCode} from "antd";

const styles = StyleSheet.create({

    titleContainer:{
        flexDirection: 'row',
        marginTop: 12
    },
    reportTitle:{
        fontSize: 10,
        textAlign: 'center',
        textTransform: 'uppercase',
    }
});


const InvoiceThankYouMsg = () => (
    <View style={styles.titleContainer}>
        {/*<QRCode value={'https://ant.design/' || '-'} />*/}
        <Text style={styles.reportTitle}>Thank you for your business</Text>
    </View>
);

export default InvoiceThankYouMsg