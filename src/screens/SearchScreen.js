import React, {useState} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import RestaurantsList from '../components/RestaurantsList';
import useRestaurants from '../hooks/useRestaurants';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchApi, restaurants, errorMessage] = useRestaurants();

  // console.log(restaurants);

  const filterRestaurantsByPrice = price => {
    return restaurants.filter(restaurant => {
      return restaurant.price === price;
    });
  };
  return (
    <View style={{flex: 1}}>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        onSearchTermSubmit={() => searchApi(searchTerm)}
      />
      <Text>{errorMessage ? <Text>{errorMessage}</Text> : null}</Text>
      <ScrollView>
        <RestaurantsList
          title="Cost Effective"
          priceCategory={filterRestaurantsByPrice('€')}
        />
        <RestaurantsList
          title="Bit Pricier"
          priceCategory={filterRestaurantsByPrice('€€')}
        />
        <RestaurantsList
          title="Big Spender"
          priceCategory={filterRestaurantsByPrice('€€€')}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});
export default SearchScreen;
