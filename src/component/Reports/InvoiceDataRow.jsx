import React, {Fragment} from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#90e5fc'
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 20,
        fontStyle: 'bold',
    },
    description: {
        width: '40%',
        textAlign: 'left',
        paddingLeft: 8,
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


const InvoiceTableRow = ({items}) => {
    const rows = items.map( item =>
        <View style={styles.row} key={item.sno.toString()}>
            <Text style={styles.description}>{item.desc}</Text>
            <Text style={styles.qty}>:</Text>
            <Text style={styles.rate}>{item.rate}</Text>
            {/*<Text style={styles.amount}>{(item.qty * item.rate).toFixed(2)}</Text>*/}
        </View>
    )
    return (<Fragment>{rows}</Fragment> )
};

export default InvoiceTableRow