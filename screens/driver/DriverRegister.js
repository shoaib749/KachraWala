import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Input, Button } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
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
                    placeholder='DriverID'
                    value={DriverId}
                    type="text"
                    onChangeText={(text) => setdriverId(text)}
                />
            <Input
                    placeholder='DriverName'
                    value={DriverName}
                    type="text"
                    onChangeText={(text) => setDriverName(text)}
                />
            <Input
                    placeholder='PhoneNumber'
                    value={PhoneNumber}
                    type="PhoneNumber"
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
            <TouchableOpacity>
                <Button title="submit" onPress={DriverRegister} />
            </TouchableOpacity>
        </View>
    )
}

export default DriverRegister

const styles = StyleSheet.create({})