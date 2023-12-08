import {Text, View, StyleSheet, Image} from '@react-pdf/renderer';
import React, {useEffect, useState} from "react";

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:"center",
        height: 16,
        fontStyle: 'bold',
    },
    row2:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:"center",
        height: 16,
        marginTop:40
    },
    rowLong: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:"center",
        display:"flex",
        height: 32,
        fontStyle: 'bold',
    },
    row3: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        height: 16,
        fontStyle: 'bold',
        width: "50%",
        flexWrap: 'wrap',
        flex: 1,
    },
    item: {
        flexDirection:"row",
        flexWrap: 'wrap',
        flex: 1,
        width: '50%' // is 50% of container width
    },
    printTitle: {
        // backgroundColor: '#ffa6c9',
        width: '58%',
        fontSize:11 ,
        textAlign: 'left',
        paddingLeft: 8,
    },
    printData: {
        // backgroundColor: '#ffa6c9',
        width: '90%',
        flexWrap: 'wrap',
        maxWidth:'90%',
        fontSize:11,
        justifyContent:"center",
        textAlign: 'left',
        paddingRight: 2,
        textOverflow:"ellipsis",
        display: 'table-cell',
        verticalAlign: 'middle'
    },
    printDataLong: {
        // backgroundColor: '#ffa6c9',
        width: '90%',
        height:25,
        flexWrap: 'wrap',
        maxWidth:'90%',
        justifyContent:"center",
        alignItems:"center",
        verticalAlign:"middle",
        fontSize:11,
        textAlign: 'left',
        paddingRight: 2,
        textOverflow:"ellipsis"
    },
    qty: {
        width: '7%',
        fontSize:11,
        textAlign: 'left',
        paddingRight: 1,
    },
    rate: {
        width: '50%',
        textAlign: 'left',
        paddingRight: 8,
    },
    divider: {
        width: '5%'
    },
    barcode: {
        height: '20px',
        width: '770px',
        marginBottom: 20
    },
    peserta: {
        textAlign:"center",
        width:"60%",
        fontSize: 12
    },
    dividerQr:{
        width:'83%'
    },
    qr: {
        height: '50px',
        width: '60px',
        marginTop: 40
    }
});

const DynamicTextView = ({leftTittle, rightTittle, leftData, rightData, type1, type2}) => {
    const [longText, setLongText] = useState(false)
    let leftText;
    let rightText;

    useEffect(() => {
        generateField()
    }, []);
    const generateField = () => {
        console.log(leftData)
        console.log(rightData)
        if(leftData.split("").length > 23 || rightData.split("").length > 23){
            console.log("Panjang")
            setLongText(true)
            leftText = checkTextLength(leftData, type1)
            console.log(leftText)
            rightText = checkTextLength(rightData, type2)
        }else{
            console.log("Pendek")
            setLongText(false)
            leftText = getTextField(type1, leftData, false)
            rightText = getTextField(type2, rightData, false)
        }
    }
    const checkTextLength = (text, type) => {
        let outText;
        if(text.split("").length > 23){
            outText = getTextField(type, text, true)
        }else{
            outText = getTextField(type, text, false)
        }
        return outText
    }
    const getTextField = (type, data, isLong) => {
        switch (type) {
            case "text":
                console.log("Text")
                return <Text style={isLong ? styles.printDataLong : styles.printData}>{data}</Text>
            case "barcode":
                return <Image style={styles.barcode}
                              src={data}
                        />
            case "qr":
                return <Image style={styles.qr}
                              src={data}
                        />
            default:
                break
        }
    }
    return(
        <>
            <View style={longText ? styles.row : styles.rowLong }>
                <Text style={styles.printTitle}>{leftTittle}</Text>
                <Text style={styles.qty}>:</Text>
                {leftText}
                <Text style={styles.divider}></Text>
                <Text style={styles.printTitle}>{rightTittle}</Text>
                <Text style={styles.qty}>:</Text>
                {rightText}
            </View>
        </>
    )
}

export default DynamicTextView