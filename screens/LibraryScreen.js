import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, Button, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';
// import Book from '../Book';

export default function LibraryScreen({navigation}) {

    const [searchInputValue, setSearchInputValue] = useState("");
    const [booksArray, setBooksArray] = useState([]);

    const filterBook = () => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchInputValue}&key=AIzaSyDOKiKypQtB-temR-m3jjToLjGdyPSNe5w`)
        .then(res => {
        setBooksArray(res.data.items) 

        console.log(res.data.items);   
        })
    }


    return (
      <ScrollView>
        <View style={styles.container}>
          
          <Text style={styles.headerTitle}>Ma Bibliothèque</Text>

          <View style={styles.searchBar}>
              <TextInput style={styles.searchInput} onChangeText={e => {setSearchInputValue(e)}} value={searchInputValue} />
              <Button onPress={filterBook} title="OK" color="green" />
          </View>
              {
          booksArray.map((item) => (
            
                <ListItem.Swipeable
                  bottomDivider

                  leftContent={
                    <Button
                      onPress={() => navigation.navigate('Book', item)}
                      title="Détails"     
                    />
                  }
                >
                <AntDesign style={styles.bookIcon} name="book" size={32} color="black" />
                <ListItem.Content>
                  <ListItem.Title>{item.volumeInfo.title}</ListItem.Title>
                  <ListItem.Subtitle>{item.volumeInfo.subtitle}</ListItem.Subtitle>
                </ListItem.Content>
                </ListItem.Swipeable>
              ))
          }
        </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  marginTop : 10
},
headerTitle : {
  fontWeight: 'bold',
  textAlign: 'center',
  margin: 10,
},
searchInput : {
  borderWidth : 1,
  borderColor: 'black',
  width : 200,
},
searchBar : {
  flexDirection : 'row',
  justifyContent : 'center',
},
oneBook : {
  flexDirection: 'row',
  alignItems: 'center',
  width: '80%',
  padding: 10,
},
})