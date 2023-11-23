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
        fontSize: 9,
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

const Invoice = ({invoice}) => (
    <Document>
        <Page size="A6" style={styles.page}>
            <Image style={styles.logo} src={logo} />
            <InvoiceTitle title='Invoice'/>
            {/*<InvoiceNo invoice={invoice}/>*/}
            {/*<BillTo invoice={invoice}/>*/}
            <InvoiceItemsTable invoice={invoice} />
            <InvoiceThankYouMsg />
        </Page>
    </Document>
);

export default Invoice