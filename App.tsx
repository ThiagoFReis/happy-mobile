import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';

import mapMarker from './src/images/map-marker.png';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        provider= { PROVIDER_GOOGLE } 
        style={styles.map} 
        initialRegion={{
          latitude: -15.8618931,
          longitude: -47.9515105,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        <Marker 
          icon={mapMarker}
          coordinate={{
            latitude: -15.8618931,
            longitude: -47.9515105,
          }}
        >
          <Callout>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Lar das meninas</Text>
            </View>
          </Callout>
        </Marker> 
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
  },

  calloutText: {

  },
});
