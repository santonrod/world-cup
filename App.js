import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './app/components/HomeScreen';
import DetailsScreen from './app/components/DetailsScreen'

const RootStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Details: { screen: DetailsScreen },
  },
  {
    defaultNavigationOptions: () => ({
      initialRouteName: 'Details',
      headerTitleContainerStyle: {
        justifyContent: 'center',
      },
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }),
  },
);

// const ModalNavigator = createStackNavigator(
//   {
//     Home: { screen: HomeScreen },
//     Details: { screen: DetailsScreen },
//   },
//   {
//     headerMode: 'none',
//     mode: 'modal',
//     defaultNavigationOptions: {
//       gesturesEnabled: false,
//     },
//     transitionConfig: () => ({
//       transitionSpec: {
//         duration: 2000,
//       },
//       screenInterpolator: sceneProps => {
//         const { layout, position, scene } = sceneProps;
//         const { index } = scene;

//         const height = layout.initHeight;
//         const translateY = position.interpolate({
//           inputRange: [index - 1, index, index + 1],
//           outputRange: [height, 0, 0],
//         });

//         const opacity = position.interpolate({
//           inputRange: [index - 1, index - 0.99, index],
//           outputRange: [0, 1, 1],
//         });

//         return { opacity, transform: [{ translateY }] };
//       },
//     }),
//   }
// );

const App = createAppContainer(RootStack);
// const App = createAppContainer(ModalNavigator);

export default App