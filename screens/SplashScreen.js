import React from 'react';
import { View, Text, Image, Button, StyleSheet  } from 'react-native';
import { useFonts } from 'expo-font';

export default function SplashScreen({navigation}) {

    let [fontsLoaded] = useFonts({
        'Indie Flower' : require('../assets/IndieFlower-Regular.ttf')
    })

    const goToLibrary = () => {
        navigation.navigate('Library');

        // navigation.reset({
        //     index:0,
        //     routes: [{
        //         name:'Library'
        //     }]
        // });
    }

    if(!fontsLoaded) {
        return <View><Text>Loading...</Text></View>
    } else {

        return (
            <View style={styles.container}>
                <Image source={require('../assets/noble_JB.png')} style={styles.img} />
                <Text style={styles.libraryName}>P8 Kathleen Books</Text>
    
                <Button title='Démarrer' color='green' onPress={goToLibrary} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    },
    libraryName : {
        fontFamily: 'Indie Flower',
        fontSize: 26,
        marginBottom: 100,
    },
    img : {
        width: 200,
        height: 200,
    }
})