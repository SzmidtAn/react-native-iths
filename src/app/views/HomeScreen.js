import * as React from 'react';
import {Button, Text, TextInput, View} from "react-native";
import {useState} from "react";
import {AppStateContext} from "../../../App";
import {styles} from "./Categories";

export const HomeScreen = ({ navigation }) => {
    const [value, setValue] = React.useContext(AppStateContext);
    const [name, setName] = useState()

    function saveName(e) {
        setName(e.target.value)
    }

    return (
            value ?
                <View style={styles.container} >
                <Text style={styles.title}>Welcome, {value}!</Text>
                    <Button
                        title="Show me animals"
                        onPress={() =>{
                            navigation.navigate('Categories', { name: 'Jane' })
                        }
                        }
                    />
                    <br/>
                    <Button
                        title="I just love cats"
                        onPress={() =>{
                            navigation.navigate('CatsOnly', { name: 'Jane' })
                        }
                        }
                    />
                </View>
                : <NameComponent saveName={saveName} name={name} setValue={setValue}  />
    );
};

const NameComponent = (props) => {

    return <>
        <Text>What is your name?</Text>
        <TextInput
            style={{
                height: 60,
                borderColor: 'gray',
                borderWidth: 1
            }}
            placeholder="You can type in me"
            onChange={e => props.saveName(e)}
        />
        <Button
            title="Ok"
            onPress={() =>{
                props.setValue(props.name)
            }
            }
        />
    </>
}
