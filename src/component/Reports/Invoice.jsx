import React from 'react';
import { Page, Document, StyleSheet } from '@react-pdf/renderer';
import InvoiceTitle from './InvoiceTittle.jsx'
import InvoiceItemsTable from './InvoiceItemTable.jsx'


const styles = StyleSheet.create({
    page: {
        fontFamily: 'Helvetica',
        fontSize: 7,
        paddingTop: 10,
        paddingLeft:30,
        paddingRight:60,
        lineHeight: 1,
        flexDirection: 'column',
    },
    logo: {
        width: 74,
        height: 66,
        marginLeft: 'auto',
        marginRight: 'auto'
    }
});

const Invoice = ({invoice, barcode, penjadwalan, qr, rujukan, bpjsData}) => (
    <Document>
        <Page orientation={"landscape"} size="A5" style={styles.page}>
            <InvoiceTitle title='SURAT ELEGIBILITAS PESERTA'/>
            <InvoiceItemsTable invoice={invoice} jadwal={penjadwalan} barcode={barcode} qr={qr} rujukan={rujukan} bpjsData={bpjsData}/>
        </Page>
    </Document>
);

export default Invoice