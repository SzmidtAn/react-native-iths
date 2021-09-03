import {Pressable, Text, StyleSheet, ScrollView, View} from "react-native";
import React, {useContext, useEffect, useState} from 'react';

export const Categories = ({navigation}) => {
    const [category, setCategory] = useState(["Dogs", "Cats"])
    const [selectedCategory, setSelectedCategory] = useState()

    function showEventsForCategory(name) {
        console.log(name)
        setSelectedCategory(name)
        navigation.navigate('Animals', { category: name })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Categories</Text>
            {!category ? null : category?.map(i => {
                return <Pressable
                    key={i}
                    style={({pressed}) => [
                        {
                            backgroundColor: pressed ? 'red' : 'blue',
                        },
                        styles.button,
                    ]}
                    onPress={(e) => {
                        showEventsForCategory(i)}
                    }
                >
                    <Text style={styles.buttonText}>{i}</Text>
                </Pressable>
            })}
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ADD8E6',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        borderRadius: 8,
        padding: 6,
        height: 50,
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        marginBottom: 10
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
    },
    title: {
        margin: 70,
        fontSize: 32,
        color: 'white'
    },
    logo: {
        margin: 'auto',
        width: '80%',
        height: '60%',
    },
});