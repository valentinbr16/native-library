import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';
import Book from '../Book';

export default function LibraryScreen() {

    const [searchInputValue, setSearchInputValue] = useState("");
    const [booksArray, setBooksArray] = useState([]);

    useEffect(() => {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=kamasutra&key=AIzaSyDOKiKypQtB-temR-m3jjToLjGdyPSNe5w')
        .then(res => {
        setBooksArray(res.data.items)    
        console.log(res.data.items)
        })
    }, [])

    const [newBooksArray, setNewBooksArray] = useState([]);
    
    const filterBook = () => {
      setNewBooksArray(booksArray.filter(book => book.volumeInfo.title.toLowerCase().includes(searchInputValue.toLowerCase())));
      return newBooksArray;
      }

    // @Todo
    // const seeMoreDetails = () => {

    // }

if(Object.entries(booksArray).length > 0) {
    return (
      <View style={styles.container}>
        
        <Text style={styles.headerTitle}>Ma Bibliothèque</Text>

        <View style={styles.searchBar}>
            <TextInput style={styles.searchInput} onChangeText={e => {setSearchInputValue(e)}} value={searchInputValue} />
            <Button onPress={filterBook} title="OK" color="green" />
        </View>

        <FlatList 
        data={newBooksArray}
        
        renderItem={({item}) => {
          // <TouchableOpacity onPress={seeMoreDetails}>
            <View style={styles.oneBook}>
              <AntDesign style={styles.bookIcon} name="book" size={32} color="black" />
              <Book title={item.volumeInfo.title} description={item.volumeInfo.subtitle} />
            </View>
          // </TouchableOpacity>
        }}

        keyExtractor = {item => item.id.toString()} 

        showsVerticalScrollIndicator={false}
        />
        </View>
    );
}
else {
    return <Text>Loading...</Text>
  }
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
bookIcon : {
  margin: 10,
}
});