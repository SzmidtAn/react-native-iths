import {Pressable, Text, StyleSheet, ScrollView, Image, Button} from "react-native";
import React, {useContext, useEffect, useState} from 'react';
import {dataApi} from "../api";

export const Animals = ({navigation, route}) => {
    const animalsCategory = route.params.category
    const [animals, setAnimals] = useState()

    useEffect(() => {
        loadNextAnimal()
    }, [])

    const getDogsFromApi = () => {
        dataApi.getRandomDog()
            .then(i => i.json())
            .then(i => {
                console.log(i)
                setAnimals(i.message)
            })
    }

    const getCatFromApi = () => {
        dataApi.getRandomCat()
            .then(i => i.json())
            .then(i => {
                console.log(i)
                setAnimals(i[0].url)
            })
    }

    function loadNextAnimal() {
        if (animalsCategory === "Dogs") {
            getDogsFromApi()
        }else {
            getCatFromApi()
        }
        }

    return(
        <>
        <Text style={styles.title}>{animalsCategory}</Text>
            <Image
                style={styles.logo}
                source={animals}
            />
            <Pressable
                style={({pressed}) => [
                    {
                        backgroundColor: pressed ? 'red' : 'blue',
                    },
                    styles.button,
                ]}
                onPress={(e) =>
                    loadNextAnimal()
                }
            >
                <Text style={styles.buttonText}>More {animalsCategory}</Text>
            </Pressable>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
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
        height: '60%',
    },
});