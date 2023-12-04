import React from 'react';
import {Text, View, StyleSheet, Image} from '@react-pdf/renderer';

const styles = StyleSheet.create({

    tittleContainer2:{
        flexDirection:'column',
        marginLeft:40,
        marginTop: 10,
        marginBottom: 10
    },
    titleContainer:{
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10
    },
    reportTitle:{
        letterSpacing: 2,
        fontSize: 15,
        textAlign: 'right',
        textTransform: 'uppercase',
    },
    reportSubTitle:{
        letterSpacing: 2,
        fontSize: 10,
        textAlign: 'right',
        textTransform: 'uppercase',
    },
    logo:{
        height:35,
        width: "50%"
    }
});


const InvoiceTitle = ({title}) => (
    <>
        <View style={styles.titleContainer} wrap={true}>
            <Image style={styles.logo}
                   src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/BPJS_Kesehatan_logo.svg/2560px-BPJS_Kesehatan_logo.svg.png"
            />
            <View style={styles.tittleContainer2}>
                <Text style={styles.reportTitle}>{title}</Text>
                <Text style={styles.reportSubTitle}>RSUD PURI HUSADA</Text>
            </View>
        </View>
    </>
);

export default InvoiceTitle