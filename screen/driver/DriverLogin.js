import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Input, Image } from "react-native-elements"
import { StatusBar } from 'expo-status-bar'
const DriverLogin = ({ navigation }) => {
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const signIn = () => {
        fetch("http://10.0.10.221:5000/driver/login", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                phoneNumber: phoneNumber,
                password: password,
            })
        })
            .then((res) => {
                if (res.status == 200) {
                    console.log(res.status);
                    return res.json();
                } else if (res.status == 401) {
                    alert("Driver does not exist");
                } else if (res.status == 500) {
                    alert("Server Error")
                } else if (res.status == 400) {
                    alert("Enter correct password!");
                }
            })
            .then(data => {
                
                // console.log(data.id);
                // console.log(data.imageurl);
                // console.log(data.name);
                console.log(data.message);
                navigation.navigate("Home");
                // console.log(data.token);
                // navigation.replace('HomeScreen', {
                //     id: data.id,
                //     name: data.name,
                //     imageurl: data.imageurl,
                //     email: email,
                // })
                // navigation.replace("HomeScreen");
            })
            .catch(error => {
                console.error(error);
            });
    }
    return (
        <KeyboardAvoidingView behavior='margin' style={styles.container}>
            <StatusBar style='light' />
            <Image
                source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEXOjlL3ufvgqrkonIOW6Vj30FKf_LHdQJPdcm6XcZRw&usqp=CAU&ec=48665701",
                }}
                style={{ width: 200, height: 200, alignSelf: "center" }}
            />
            <View style={styles.inputContainer}>
                <Input placeholder='Phone Number'
                    autoFocus
                    type="number"
                    value={phoneNumber}
                    onChangeText={(text) => setPhoneNumber(text)} />
                <Input placeholder='Password'
                    secureTextEntry
                    type="password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    onSubmitEditing={signIn} />

            </View>
            <Button containerStyle={styles.button} onPress={signIn} title="Login" />
            <Button containerStyle={styles.button} type='outline' title="Register" onPress={() => navigation.navigate("DriverRegister")} />
        </KeyboardAvoidingView>
    )
}

export default DriverLogin

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