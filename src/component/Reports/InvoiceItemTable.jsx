import React from 'react';
import {View, StyleSheet } from '@react-pdf/renderer';
import InvoiceTableHeader from './InvoiceTabHandler.jsx'
import InvoiceTableRow from './InvoiceDataRow.jsx'
import InvoiceTableBlankSpace from './InvoiceEmptyRow.jsx'
import InvoiceTableFooter from './InvoiceFooter.jsx'

const tableRowsCount = 11;

const styles = StyleSheet.create({
    tableContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 24,
        // borderWidth: 1,
        // borderColor: '#bff0fd',
    },
});

const InvoiceItemsTable = ({invoice, jadwal}) => (
    <View style={styles.tableContainer}>
        {/*<InvoiceTableHeader />*/}
        <InvoiceTableRow items={invoice} jadwal={jadwal}/>
        {/*<InvoiceTableBlankSpace rowsCount={ tableRowsCount - invoice.items.length} />*/}
        {/*<InvoiceTableFooter items={invoice.items} />*/}
    </View>
);

export default InvoiceItemsTable