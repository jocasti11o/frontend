import React, { Component } from 'react';
import {
 View,
 Text,
 StyleSheet,
 ScrollView,
 Image,
 Dimensions,
 TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

export default class SmartMarkIndex extends Component {
 constructor(props) {
    super(props);
    this.state = {
      productList: [],
      categories: [],
      userID: null,
    };
 }

 async componentDidMount() {
    try {
      const value = await AsyncStorage.getItem('userID');
      if (value !== null) {
        this.setState({ userID: value });
      }

      axios
        .get('http://YOUR_SERVER_URL/api/categories')
        .then((response) => {
          this.setState({ categories: response.data });
        })
        .catch((error) => {
          console.log(error);
        });

      axios
        .get('http://YOUR_SERVER_URL/api/products')
        .then((response) => {
          this.setState({ productList: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
 }

 render() {
    const { productList, categories, userID } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={styles.categoryContainer}
              onPress={() =>
                this.props.navigation.navigate('Category', {
                 categoryID: category.id,
                 userID: userID,
                })
              }
            >
              <Image
                source={{ uri: category.image }}
                style={styles.categoryImage}
              />
              <Text style={styles.categoryText}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <ScrollView showsVerticalScrollIndicator={false}>
          {productList.map((product) => (
            <TouchableOpacity
              key={product.id}
              style={styles.productContainer}
              onPress={() =>
                this.props.navigation.navigate('Product', {
                 productID: product.id,
                 userID: userID,
                })
              }
            >
              <Image
                source={{ uri: product.image }}
                style={styles.productImage}
              />
              <Text style={styles.productText}>{product.name}</Text>
              <Text style={styles.productPrice}>{product.price}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
 }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
 },
 categoryContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
 },
 categoryImage: {
    width: 60,
    height: 60,
 },
 categoryText: {
    marginTop: 5,
    fontSize: 14,
 },
 productContainer: {
    marginTop: 20,
    alignItems: 'center',
 },
 productImage: {
    width: 100,
    height: 100,
 },
 productText: {
    marginTop: 5,
    fontSize: 16,
 },
 productPrice: {
    marginTop: 5,
    fontSize: 16,
    color: 'red',
 },
});