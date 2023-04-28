import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Input, Image } from "react-native-elements"
import { StatusBar } from 'expo-status-bar'
const UserLogin = ({ navigation }) => {
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const signIn = () => {
        fetch("http://10.0.10.170:5000/user/login", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                password: password,
                phonenumber: phoneNumber,
            })
        })
            .then((res) => {
                if (res.status == 200) {
                    console.log(res.status);
                    return res.json();
                } else if (res.status == 401) {
                    alert("User does not exist");
                } else if (res.status == 500) {
                    alert("Server Error")
                } else if (res.status == 400) {
                    alert("Enter correct password!");
                }
            })
            .then(data => {
                console.log(data.id);
                console.log(data.imageurl);
                console.log(data.name);
                console.log(data.message);
                console.log(data.token);
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
            <StatusBar style='ligth' />
            <Image
                source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkQdGDvjlPJJGz50TBbXfBRMRT7nJIuYN4Q-dVuQKfkg&usqp=CAU&ec=48665701",
                }}
                style={{ width: 200, height: 200 }}
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
            <Button containerStyle={styles.button} type='outline' title="Register" onPress={() => navigation.navigate("UserRegister")} />
        </KeyboardAvoidingView>
    )
}

export default UserLogin

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