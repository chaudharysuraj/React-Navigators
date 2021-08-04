import React from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native';
const screen = Dimensions.get('window');

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={{ fontSize: 21, fontWeight: 'bold' }}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: screen.height * 0.085,
        backgroundColor: '#fff',
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: '5%'
    }
});

export default Header
