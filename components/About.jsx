import React, {useRef, useEffect} from 'react'
import { AppRegistry, View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground, Platform,  Dimensions, BackHandler} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { COLORS, useFonts } from '../constants';
import { useNavigation, useIsFocused } from '@react-navigation/native';

export default function About() {
    // const [fontsLoaded] = useFonts()
    // if(!fontsLoaded){ return null }

    const navigation = useNavigation()
    const isFocused = useIsFocused()

    useEffect(() => {
        const backAction = () => {
            if (isFocused) {
                navigation.openDrawer()
                return true
            }
            return false
        };

        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction)

        return () => backHandler.remove()
    }, [isFocused, navigation])
    

    return (
        <ImageBackground source={require('../assets/images/blob.png')} style={styles.aboutContainer}>
                <View>
                <View style={styles.aboutWrapper}>
                    <Text style={styles.aboutTitle}>ABOUT</Text>

                    <View style={styles.outlineImage}>
                        <Image source={require('../assets/images/patrick.jpg')} style={styles.aboutImage} resizeMode={"cover"} />
                    </View>

                    <Text ellipsizeMode="tail"  style={styles.aboutText}>
                        I'm <Text style={{ color: COLORS.tertiary }}>Patrick William Lofranco</Text>, and I am a passionate <Text style={{ color: COLORS.tertiary }}>Web Developer, Web Designer, and Programmer</Text>. With a strong foundation in these fields, I strive to create exceptional digital experiences that combine functionality, aesthetics, and user satisfaction.
                    </Text>

                    {/* <Text ellipsizeMode="tail" style={styles.aboutText}>
                        Furthermore, my programming skills allow me to take on complex projects and develop customized solutions tailored to specific needs. I enjoy the challenge of problem-solving and take pride in writing clean and efficient code. Whether it's building interactive web applications or optimizing existing systems, I am committed to delivering high-quality solutions.
                    </Text> */}
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    aboutContainer: {
        flex: 1,
        backgroundColor: COLORS.baseGray,
        padding: 45,
        // justifyContent: 'center'
    },

    aboutWrapper: {
        alignItems: 'center',
        marginVertical: 80
    },

    aboutTitle: {
        fontFamily: 'Poppins_800ExtraBold',
        fontSize: 45,
        letterSpacing: -2,
        color: COLORS.white
    },

    outlineImage: { 
        justifyContent: 'center',
        borderWidth: 5,
        borderColor: COLORS.tertiary,
        borderRadius: 190,
        width: 160,
        height: 160,
    },

    aboutImage: {
        width: 140,
        height: 140,
        borderRadius: 90,
        position: 'absolute',
        left: '3.2%',
    },

    aboutText: {
        fontFamily: 'Poppins_500Medium',
        fontStyle: 'italic',
        color: COLORS.white,
        textAlign: 'center',
        fontSize: 15,
        paddingTop: 20
    }

});


