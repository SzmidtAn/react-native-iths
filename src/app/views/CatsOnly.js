import {Pressable, Text, StyleSheet, ScrollView, Image, Button} from "react-native";
import React, {useContext, useEffect, useState} from 'react';
import {dataApi} from "../api";

export const CatsOnly = ({navigation, route}) => {
    const [animals, setAnimals] = useState()

    useEffect(() => {
        getAllCatsFromApi()
    }, [])

    const getAllCatsFromApi = () => {
        dataApi.getAllCats()
            .then(i => i.json())
            .then(i => {
                console.log(i)
                setAnimals(i)
            })
    }

    return(
        <>
            <ScrollView style={styles.container}>
                {animals?.map(i => {
                    return (
                        <Image

                            style={styles.logo}
                            source={{
                                uri: i.url,
                            }}
                        />
                    )
                })}

            </ScrollView>
        </>
    )

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#e6adc4',

    },
    title: {
        fontSize: 35,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
    },
    button: {
        borderRadius: 8,
        padding: 6,
        height: 50,
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        elevation: 5,
        marginBottom: 10,
        textColor: 'white'
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
    },
    logo: {
        margin: 'auto',
        width: '80%',
        height: '30%',

        marginBottom: 40,
    },
});