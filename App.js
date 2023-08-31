import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import  {createDrawerNavigator}  from '@react-navigation/drawer';
import { AppRegistry, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';

import Home from './components/Home';
import About from './components/About'

import Projects from './components/Projects';

import { COLORS } from './constants';

AppRegistry.registerComponent('main', () => App);

const Drawer = createDrawerNavigator()

export default function App() {
  useEffect(() => {
      NavigationBar.setBackgroundColorAsync(COLORS.baseGray)
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>

      <NavigationContainer>
        <Drawer.Navigator 
          initialRouteName='Home' 
          screenOptions={{
            headerTitle: "",
            headerStyle: {
              backgroundColor: COLORS.baseGray
            },
            headerTintColor: COLORS.white,
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            drawerType: 'slide',
            drawerActiveTintColor: 'white',
            drawerInactiveTintColor: '#A8A8A8',
            drawerStyle: {
              width: '70%',
              backgroundColor: COLORS.baseGray
            },
            drawerCloseAnimation: 'slide',
          }}
        >
          <Drawer.Screen name='Home' component={Home}/>
          <Drawer.Screen name='About' component={About}/>
          <Drawer.Screen name='Projects' component={Projects}/>
        </Drawer.Navigator>
      </NavigationContainer>
        <StatusBar
          style='light'
          hidden={false}
          backgroundColor={COLORS.baseGray}
          translucent={false}
          networkActivityIndicatorVisible={true}
        />
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});