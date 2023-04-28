import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Input, Button } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
const UserRegister = ({ Navigation }) => {
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    function registerUser() {
        console.log("Inside submit");
        fetch("http://10.0.10.221:5000/user/register", {
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
            } else {
                console.log('Error');
            }
        })
    }

    return (
        <View>
            <Text>Enter details</Text>
            <Input placeholder="Full Name"
                autoFocus
                type="text"
                value={name}
                onChangeText={text => setName(text)} />
            <Input placeholder='PhoneNumber' value={phoneNumber} type="phonenumber" onChangeText={text => setPhoneNumber(text)} />
            <Input placeholder='location' value={location} type="text" onChangeText={(text) => setLocation(text)} />
            <Input placeholder='password' value={password} type="password" onChangeText={(text) => setPassword(text)} />
            <Input placeholder='ImageUrl' value={imageUrl} type="text" onChangeText={text => setImageUrl(text)} />


            <TouchableOpacity>
                <Button title="submit" onPress={registerUser} />
            </TouchableOpacity>
        </View>
    )
}

export default UserRegister

const styles = StyleSheet.create({})