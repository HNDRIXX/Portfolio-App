import React from 'react'
import { AppRegistry, View, Text, TouchableOpacity, StyleSheet, ImageBackground, Platform, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { COLORS, useFonts } from '../constants';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import About from './About';

const Stacks = createStackNavigator()

function HomeView() {
    const navigation = useNavigation()
    const [fontsLoaded] = useFonts()

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <ImageBackground source={require('../assets/images/blob.png')} style={styles.backgroundImage}>
                {/* <View style={styles.overlay} /> */}

                <View style={styles.container}>
                    <View style={styles.greetingsContainer}>
                        <Text style={[styles.text, getFontSize(17)]}>HELLO!</Text>
                        <Text style={[styles.text, getFontSize(28)]}>I'm Patrick William Lofranco</Text>

                        <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.buttonMore}>
                            <Text 
                                style={{ 
                                    color: COLORS.white, 
                                    fontFamily: 'Poppins_400Regular' 
                                }}
                            >
                                Explore
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const getFontSize = (size) => {
    if (Platform.OS === 'web') {
        return { fontSize: size + 20 };
    } else {
        return { fontSize: size };
    }
};

export default function App() {
    return (
        <Stacks.Navigator 
            screenOptions={{
                headerShown: false
            }}

            initialRouteName = "HomeView"
        >
          <Stacks.Screen  name="HomeView" component={HomeView} />
          <Stacks.Screen  name="About" component={About} />
        </Stacks.Navigator>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },

    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },

    buttonMore: {
        marginHorizontal: 80,
        marginTop: 10,
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center'

    },
    
    container: {
        display:'flex',
        marginTop: -30,
        alignContent: 'center',
        justifyContent: 'center',
        height:Dimensions.get('window').height,
    },

    text: {
        color: '#fff',
        fontFamily: 'Poppins_800ExtraBold',
        textAlign: 'center',
    },

});


