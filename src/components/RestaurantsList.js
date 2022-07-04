import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';

import RestaurantsDetail from './RestaurantsDetail';

export default function ResultsList({title, priceCategory, navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={priceCategory}
        keyExtractor={result => result.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Restaurant')}>
              <RestaurantsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});
