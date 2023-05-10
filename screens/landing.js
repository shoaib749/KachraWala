import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Input, Image } from "react-native-elements"

const landing = ({ Navigation }) => {
    return (
        <View>
            <Text>Select Your type:</Text>
            <TouchableOpacity onPress={() => Navigation.navigate("userRegister")}>
                <Image
                    source={require("../assets/ManUserLogo.jpg")}
                    style={styles.imageBox}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Navigation.navigate("driverRegister")}>
                <Image
                    source={require("../assets/truckDriver.jpg")}
                    style={styles.imageBox}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    imageBox: {
        width: 50,
        height: 50,
        padding: 25,
    }

})

export default landing
