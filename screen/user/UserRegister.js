import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Input, Button } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar'
const UserRegister = ({ navigation }) => {
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [imageUrl, setImageUrl] = useState("");

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
        <View style={styles.container}>
            <StatusBar style='ligth' />
            <Text>Enter details</Text>
            <View style={styles.inputContainer}>
                <Input placeholder="Full Name"
                    autoFocus
                    type="text"
                    value={name}
                    onChangeText={text => setName(text)}
                />
                <Input
                    placeholder='PhoneNumber'
                    value={phoneNumber}
                    type="phonenumber"
                    onChangeText={text => setPhoneNumber(text)}
                />
                <Input
                    placeholder='location'
                    value={location}
                    type="text"
                    onChangeText={(text) => setLocation(text)}
                />
                <Input
                    placeholder='password'
                    value={password}
                    secureTextEntry
                    type="password"
                    onChangeText={(text) => setPassword(text)}
                />
                <Input
                    placeholder='ImageUrl'
                    value={imageUrl}
                    type="text"
                    onChangeText={text => setImageUrl(text)}
                />
            </View>
                <Button containerStyle={styles.button} title="submit" onPress={registerUser} />
            
        </View>
    )
}

export default UserRegister

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