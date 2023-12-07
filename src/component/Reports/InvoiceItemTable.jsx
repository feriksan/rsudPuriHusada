import React from 'react';
import {View, StyleSheet } from '@react-pdf/renderer';
import InvoiceTableRow from './InvoiceDataRow.jsx'

const tableRowsCount = 11;

const styles = StyleSheet.create({
    tableContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 14,
    },
});

const InvoiceItemsTable = ({invoice, jadwal, barcode, qr, rujukan, bpjsData}) => (
    <View style={styles.tableContainer}>
        <InvoiceTableRow items={invoice} jadwal={jadwal} barcode={barcode} qr={qr} rujukan={rujukan} bpjsData={bpjsData}/>
    </View>
);

export default InvoiceItemsTable