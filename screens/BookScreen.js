import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

export default function BookScreen({route}) {

    if("imageLinks" in route.params.volumeInfo) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image style={styles.img}
                        source={{uri: route.params.volumeInfo.imageLinks.thumbnail}}
                        />
                <Text style={styles.title}>Titre</Text>
                <Text style={styles.text}>{route.params.volumeInfo.title}</Text>
    
                <Text style={styles.title}>Auteur</Text>
                <Text style={styles.text}>{route.params.volumeInfo.authors}</Text>
    
                <Text style={styles.description}>{route.params.volumeInfo.description}</Text>
                
            </View>
        </ScrollView>
        )
    } else {
        return (
        <ScrollView>
            <View style={styles.container}>
                
                <Text style={styles.title}>Titre</Text>
                <Text style={styles.text}>{route.params.volumeInfo.title}</Text>
    
                <Text style={styles.title}>Auteur</Text>
                <Text style={styles.text}>{route.params.volumeInfo.authors}</Text>
    
                <View style={styles.description}>
                    <Text>{route.params.volumeInfo.description}</Text>
                </View>

                
            </View>
        </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop : 10,
      marginBottom : 400,
      alignItems: 'center',
    },
    img : {
        width: '100%',
        height:250,
        resizeMode: 'contain',
    },
    title :{
        fontWeight: 'bold',
        fontSize: 24,
        textTransform: 'uppercase',
        marginTop:20
    },
    description : {
        marginTop:20,
        marginHorizontal: 15,
    },
    text :{
        marginHorizontal: 15,
    }
})