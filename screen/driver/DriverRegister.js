import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Input, Button } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar'
const DriverRegister = () => {
    const [DriverId, setdriverId] = useState("");
    const [DriverName, setDriverName] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    const [Location, setLocation] = useState("");
    const [Password, setPassword] = useState("");

    function registerDriver() {
        console.log("Inside submit");
        fetch("http://10.0.10.170:5000/driver/register", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                DriverId: DriverId,
                DriverName: DriverName,
                PhoneNumber: PhoneNumber,
                Location: Location,
                Password: Password 
            })
        }).then((res) => {
            if (res.status == 200) {
                console.log("added")
                res.json();
                navigation.navigate("Home");
            } else {
                console.log('Error');
            }
        })
    }
    return (
        <View style={styles.container}>
            <StatusBar style='light' />
            <Text>Enter details</Text>
            <View style={styles.inputContainer}>
            <Input
                    placeholder='Driver ID'
                    value={DriverId}
                    type="text"
                    onChangeText={(text) => setdriverId(text)}
                />
            <Input
                    placeholder='Driver Name'
                    value={DriverName}
                    type="text"
                    onChangeText={(text) => setDriverName(text)}
                />
            <Input
                    placeholder='Phone Number'
                    value={PhoneNumber}
                    type="phoneNumber"
                    onChangeText={(text) => setPhoneNumber(text)}
                />
            <Input
                    placeholder='Location'
                    value={Location}
                    type="Location"
                    onChangeText={(text) => setLocation(text)}
                />
            <Input
                    placeholder='Password'
                    value={Password}
                    secureTextEntry
                    type="password"
                    onChangeText={(text) => setPassword(text)}
                />        


            </View>
                <Button containerStyle={styles.button} title="submit" onPress={registerDriver} />
            
        </View>
    )
}

export default DriverRegister

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white"
    },
    inputContainer: {
        width: 300,
    },
    button: {
        width: 200,
        marginTop: 10,
    },
})