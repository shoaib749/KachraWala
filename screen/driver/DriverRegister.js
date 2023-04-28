import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const DriverRegister = () => {
    const [driverName, setDriverName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [location, setLocation] = useState("");
    const [password, setPassword] = useState("");

    function registerUser() {
        console.log("Inside submit");
        fetch("http://10.0.10.170:5000/user/register", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                location: location,
                password: password,
                phoneNumber: phoneNumber,
                imageurl: imageUrl
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
        <View>
            <Text>DriverRegister</Text>
        </View>
    )
}

export default DriverRegister

const styles = StyleSheet.create({})