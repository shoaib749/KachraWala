import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Input ,Image } from "react-native-elements"

const landing = ({Navigation}) => {
    return (
        <View>
            <Text>Select Your type:</Text>
            <TouchableOpacity onPress={()=>Navigation.Navigate("userRegister")}>
                <Image
                    source={{
                        uri: "../assets/ManUserLogo.jpg"
                    }}
                    style={styles.imageBox}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    source={{
                        uri: "../assets/truckDriver.jpg"
                    }}
                    style={styles.imageBox}
                />
            </TouchableOpacity>
        </View>
    )
}

export default landing

const styles = StyleSheet.create({
    imageBox: {
        width: 50,
        height: 50,
        padding: 25,
    }

})