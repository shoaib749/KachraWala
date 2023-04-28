import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native-elements'
import { StatusBar } from 'expo-status-bar'
const Landing = ({ navigation }) => {
    return (

        <View style={styles.container}>
            <StatusBar style='ligth' />
            <Text>Select Your type:</Text>
            <TouchableOpacity onPress={() => navigation.navigate("UserLogin")}>
                <Image
                    source={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkQdGDvjlPJJGz50TBbXfBRMRT7nJIuYN4Q-dVuQKfkg&usqp=CAU&ec=48665701",
                    }}
                    style={{ width: 200, height: 200 }}
                />
                {/* https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkQdGDvjlPJJGz50TBbXfBRMRT7nJIuYN4Q-dVuQKfkg&usqp=CAU&ec=48665701
                    https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLgX_eD705Fowa44d4g7w7MMYmy2PC7fGd7wlZKnwuCw&usqp=CAU&ec=48665701
                    https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAc3CJtaWqgbaOGDCURG2gS76dpnaB8d9GIdny6wuNiQ&usqp=CAU&ec=48665701
                    https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7JdzaeJaD-KEtp6b3-pFBDWviCq5zRc95Fza24zPRbw&usqp=CAU&ec=48665701
                    https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Nal7Db4iPgGRxrvUItkqNNkrU4ZNaJAtLXsYTbuhhQ&usqp=CAU&ec=48665701
                */}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("DriverRegister")}>
                <Image
                    style={{ width: 200, height: 200 }}
                    source={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEXOjlL3ufvgqrkonIOW6Vj30FKf_LHdQJPdcm6XcZRw&usqp=CAU&ec=48665701"
                    }} />
                {/* https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA1lXAm3r1_vvdl3imFhZ_UCOZjUwKJbiwBOgucU6jCQ&usqp=CAU&ec=48665701 
                    https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUw-MgHap_0DAav8vVEMUowDeAoQwuMHUxsLa4G0xrsg&usqp=CAU&ec=48665701*/}
            </TouchableOpacity>
        </View>
    )
}

export default Landing

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white"
    },
    imageBox: {
        height: 75,
        width: 75,
        padding: 25,
    }
})