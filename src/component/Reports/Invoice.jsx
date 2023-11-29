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
        paddingTop: 30,
        paddingLeft:60,
        paddingRight:60,
        lineHeight: 1.5,
        flexDirection: 'column',
    },
    logo: {
        width: 74,
        height: 66,
        marginLeft: 'auto',
        marginRight: 'auto'
    }
});

const Invoice = ({invoice, barcode, penjadwalan}) => (
    <Document>
        <Page size="A6" style={styles.page}>
            <InvoiceTitle title='Registrasi Pasien'/>
            {/*<InvoiceNo invoice={invoice}/>*/}
            {/*<BillTo invoice={invoice}/>*/}
            <InvoiceItemsTable invoice={invoice} jadwal={penjadwalan}/>
            <InvoiceThankYouMsg />
            <Image
                src={barcode}
            />
        </Page>
    </Document>
);

export default Invoice