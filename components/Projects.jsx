import tmIcon from '../assets/images/stacks/tm.png'

// import lighSqlIcon from '../assets/images/stacks/lightdbsql.webp'

import React from "react";
import { View, Text, Image, ImageBackground, StyleSheet, ScrollView } from "react-native";
import { useFonts, COLORS  } from "../constants";
import CachedImage from 'react-native-expo-cached-image';

const androidIcon = 'https://img.icons8.com/?size=512&id=17836&format=png'
    javaIcon = 'https://img.icons8.com/?size=512&id=13679&format=png'
    firebaseIcon = 'https://img.icons8.com/?size=512&id=62452&format=png'
    tensorFlowIcon = 'https://img.icons8.com/?size=512&id=n3QRpDA7KZ7P&format=png'
    htmlIcon = 'https://img.icons8.com/?size=512&id=20909&format=png'
    cssIcon = 'https://img.icons8.com/?size=512&id=21278&format=png'
    bsIcon = 'https://img.icons8.com/?size=512&id=84710&format=png'
    jsIcon = 'https://img.icons8.com/?size=512&id=108784&format=png'
    ciIcon = 'https://avatars.githubusercontent.com/u/44521256?v=4'
    phpIcon = 'https://cdn-icons-png.flaticon.com/256/5968/5968332.png'
    lightSqlDb = 'https://imgtr.ee/images/2023/08/24/db6cdc941b320ac5ebece81fb8242137.png'
    laravelIcon = 'https://seeklogo.com/images/L/laravel-logo-9B01588B1F-seeklogo.com.png'
    postgreIcon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png'
    pythonIcon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png'
    djangoIcon = 'https://seeklogo.com/images/D/django-logo-4C5ECF7036-seeklogo.com.png'


const ProjectDisplay = ({src, projImgStyle, projName, projDesc, projTS, projGH}) => {
    return (
        <View>
            <View style={[styles.imageWrapper, projImgStyle]}>
                <Image source={src} style={styles.projectImage}/>
            </View>

            <Text style={styles.projectName}>{projName}</Text>
            <Text style={styles.projectDesc}>{projDesc}</Text>
            
            {/* <ExpoFastImage cacheKey={index} source={icon} style={styles.stack}/> */}

            <View style={styles.stackContainer}>
                {projTS.map((icon, index) => (
                    <CachedImage
                        key={index}
                        isBackground
                        source={{ uri: icon }}
                        style={styles.stack}
                    />
                ))}
            </View>
        </View>
    )
}

export default function Projects() {
    const [fontsLoaded] = useFonts()
    if(!fontsLoaded) { return null }

    return (
        <ImageBackground source={require('../assets/images/blob.png')} style={styles.projectContainer}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.projectView}>
                <Text style={styles.projectTitle}>PROJECTS</Text>
                
                <ProjectDisplay 
                    src={require('../assets/images/libmb.png')}
                    projImgStyle={styles.imgStyle1}
                    projName="Mobile Library Management System"
                    projDesc="BHive is my On The Job Training Project in DENR EMB MIMAROPA 4B. This system features a interactable Organizational Chart that can be modify, add, sort, and delete for each employee and staff member. With a Floor plan Locator, which displays the particular location and attendance status of every employee that is connected to the face-recognition device."
                    projTS={[androidIcon, javaIcon, tensorFlowIcon, firebaseIcon]}
                />

                <ProjectDisplay 
                    src={require('../assets/images/pwdmobile.webp')}
                    projName="PWD Accessibility Map Locator"
                    projImgStyle={styles.imgStyle2}
                    projDesc="BHive is my On The Job Training Project in DENR EMB MIMAROPA 4B. This system features a interactable Organizational Chart that can be modify, add, sort, and delete for each employee and staff member. With a Floor plan Locator, which displays the particular location and attendance status of every employee that is connected to the face-recognition device."
                    projTS={[androidIcon, javaIcon, firebaseIcon]}
                />

                <ProjectDisplay 
                    src={require('../assets/images/bhive.webp')}
                    projName="BHive"
                    projImgStyle={styles.imgStyle3}
                    projDesc="BHive is my On The Job Training Project in DENR EMB MIMAROPA 4B. This system features a interactable Organizational Chart that can be modify, add, sort, and delete for each employee and staff member. With a Floor plan Locator, which displays the particular location and attendance status of every employee that is connected to the face-recognition device."
                    projTS={[htmlIcon, cssIcon, bsIcon, jsIcon,  ciIcon, lightSqlDb]}
                />

                
                <ProjectDisplay 
                    src={require('../assets/images/snaps.jpg')}
                    projName="Snaps"
                    projImgStyle={styles.imgStyle3}
                    projDesc="BHive is my On The Job Training Project in DENR EMB MIMAROPA 4B. This system features a interactable Organizational Chart that can be modify, add, sort, and delete for each employee and staff member. With a Floor plan Locator, which displays the particular location and attendance status of every employee that is connected to the face-recognition device."
                    projTS={[laravelIcon, bsIcon, postgreIcon]}
                />
                
                <ProjectDisplay 
                    src={require('../assets/images/udmclinic.jpg')}
                    projName="UDM Clinic"
                    projImgStyle={styles.imgStyle3}
                    projDesc="BHive is my On The Job Training Project in DENR EMB MIMAROPA 4B. This system features a interactable Organizational Chart that can be modify, add, sort, and delete for each employee and staff member. With a Floor plan Locator, which displays the particular location and attendance status of every employee that is connected to the face-recognition device."
                    projTS={[pythonIcon, bsIcon, djangoIcon]}
                />

                <ProjectDisplay 
                    src={require('../assets/images/libweb.jpg')}
                    projName="Web Library Management System"
                    projImgStyle={styles.imgStyle3}
                    projDesc="BHive is my On The Job Training Project in DENR EMB MIMAROPA 4B. This system features a interactable Organizational Chart that can be modify, add, sort, and delete for each employee and staff member. With a Floor plan Locator, which displays the particular location and attendance status of every employee that is connected to the face-recognition device."
                    projTS={[htmlIcon, cssIcon, jsIcon, firebaseIcon]}
                />

                <ProjectDisplay 
                    src={require('../assets/images/water.jpg')}
                    projName="PuriWater"
                    projImgStyle={styles.imgStyle3}
                    projDesc="BHive is my On The Job Training Project in DENR EMB MIMAROPA 4B. This system features a interactable Organizational Chart that can be modify, add, sort, and delete for each employee and staff member. With a Floor plan Locator, which displays the particular location and attendance status of every employee that is connected to the face-recognition device."
                    projTS={[htmlIcon, cssIcon, jsIcon, phpIcon, lightSqlDb]}
                />

                <ProjectDisplay 
                    src={require('../assets/images/workit.jpg')}
                    projName="WorkIT"
                    projImgStyle={styles.imgStyle3}
                    projDesc="BHive is my On The Job Training Project in DENR EMB MIMAROPA 4B. This system features a interactable Organizational Chart that can be modify, add, sort, and delete for each employee and staff member. With a Floor plan Locator, which displays the particular location and attendance status of every employee that is connected to the face-recognition device."
                    projTS={[htmlIcon, cssIcon, jsIcon, phpIcon, lightSqlDb]}
                />

                <ProjectDisplay 
                    src={require('../assets/images/tourmanila.jpg')}
                    projName="Manila Web Tour Guide"
                    projImgStyle={styles.imgStyle3}
                    projDesc="BHive is my On The Job Training Project in DENR EMB MIMAROPA 4B. This system features a interactable Organizational Chart that can be modify, add, sort, and delete for each employee and staff member. With a Floor plan Locator, which displays the particular location and attendance status of every employee that is connected to the face-recognition device."
                    projTS={[htmlIcon, cssIcon, jsIcon]}
                /> 

                <View style={styles.spacing}/>
            </ScrollView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    projectContainer: {
        flex: 1,
    },      

    projectView: {
        padding: 20,
    },

    projectTitle: {
        color: COLORS.white,
        fontFamily: 'Poppins_800ExtraBold',
        fontSize: 45,
        letterSpacing: -2,
        textAlign: 'center'
    },

    imageWrapper: {
        width: '100%',
        // marginTop: -50,
        // marginBottom: -70,
        aspectRatio: 1,
    },

    imgStyle1: {
        marginTop: -55,
        marginBottom: 20,
    },

    imgStyle2: { marginVertical: 20 },
    imgStyle3: { marginVertical: -50 },

    spacing: { padding: 50 },

    projectImage: {
        flex: 1,
        resizeMode: 'contain',
        width: undefined,
        height: undefined
    },

    projectName: {
        color: COLORS.white,
        fontFamily: 'Poppins_800ExtraBold',
        lineHeight: 25,
        marginBottom: 10,
        fontSize: 24,
    },

    projectDesc: {
        fontSize: 12,
        lineHeight: 16,
        fontFamily: 'Poppins_500Medium',
        color: COLORS.white,
    },

    stackContainer: {
        marginTop: 10,
        flexDirection: 'row'
    },

    stack: {
        width: 22,
        marginRight: 5,
        height: 22
    },  
})