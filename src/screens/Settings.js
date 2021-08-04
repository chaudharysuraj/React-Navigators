import React, { useState } from 'react';
import { Text, TextInput, View, Dimensions, ScrollView, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
const screen = Dimensions.get('window');

const SettingsScreen = () => {
    const [text, setText] = useState('')
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const update = () => {
        let dt = state.reducer.data;
        dt.push(text);
        setText('');
        dispatch({ type: 'UPDATE_DATA', data: dt });
    }

    return (
        <>
            <Header title="Settings" />
            <View
                style={styles.scrollViewParent}>
                <Text style={styles.text}>{'List'}</Text>
                <ScrollView
                    scrollEnabled={true}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ alignItems: 'center' }}
                >
                    {
                        state.reducer.data.map((i, index) => {
                            return <Text key={index} style={{ fontSize: 15, color: '#000' }}>{i}</Text>
                        })
                    }
                </ScrollView>
            </View>
            <TextInput
                value={text}
                onChangeText={val => setText(val)}
                onSubmitEditing={() => update()}
                placeholder="Enter and Submit to Update List"
                style={styles.input}
            />
        </>
    );
}

const styles = StyleSheet.create({
    scrollViewParent: {
        height: screen.height * 0.3,
        alignItems: 'center',
        paddingVertical: '2%'
    },
    input: {
        width: screen.width * 0.75,
        alignSelf: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#000'
    },
    text: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    }
});

export default SettingsScreen;
