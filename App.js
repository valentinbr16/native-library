import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';
import Book from './Book';
import { AntDesign } from '@expo/vector-icons';

export default function App() {

  const [searchInputValue, setSearchInputValue] = useState("");
  const [booksArray, setBooksArray] = useState([
    {title : 'Harry Potter', description:'Voldemort il meurt à la fin'},
    {title : 'Sherlock Holmes', description:'Wattson il meurt à la fin'},
    {title : 'Kirikou', description:'Sa tante elle meurt à la fin'},
    {title: 'Pokemon', description: 'Sacha il meurt à la fin'}
  ]);

  const filterBook = () => {
    console.log(searchInputValue);
    setBooksArray(booksArray.filter(book => book.title.toLowerCase().includes(searchInputValue.toLowerCase())));
    return booksArray;
  }

  const booksJSX = booksArray.map(book => {
    return ( <View style={styles.oneBook}>
              <AntDesign style={styles.bookIcon} name="book" size={32} color="black" />
              <Book title={book.title} description={book.description} />
            </View>
    )
  })


  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Ma Bibliothèque</Text>

        <View style={styles.searchBar}>
          <TextInput style={styles.searchInput} onChangeText={e => {setSearchInputValue(e)}} value={searchInputValue} />
          <Button onPress={filterBook} title="OK" color="green" />
        </View>

        <View>{booksJSX}</View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop : 50
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
    alignItems : 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  bookIcon : {
    margin: 10,
  }
});
