import React from 'react';
import { Page, Document, Image, StyleSheet } from '@react-pdf/renderer';
import InvoiceTitle from './InvoiceTittle.jsx'
import BillTo from './BillTo'
import InvoiceNo from './InvoiceNo'
import InvoiceItemsTable from './InvoiceItemTable.jsx'
import InvoiceThankYouMsg from './InvoiceThankyou.jsx'
import logo from '../../assets/react.svg'


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

const Invoice = ({invoice, barcode, penjadwalan, qr}) => (
    <Document>
        <Page orientation={"landscape"} size="A6" style={styles.page}>
            <InvoiceTitle title='SURAT ELEGIBILITAS PESERTA'/>
            {/*<InvoiceNo invoice={invoice}/>*/}
            {/*<BillTo invoice={invoice}/>*/}
            <InvoiceItemsTable invoice={invoice} jadwal={penjadwalan} barcode={barcode} qr={qr}/>
            <InvoiceThankYouMsg />
        </Page>
    </Document>
);

export default Invoice