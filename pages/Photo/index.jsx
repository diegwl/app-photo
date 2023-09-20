import { useState } from "react";
import { View, Pressable, StyleSheet, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export default function Photo() {

    const [image, setImage] = useState('https://reactnative.dev/docs/assets/p_cat2.png')

    const gallery = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }

    };

    const camera = async () => {
        const result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }

    };

    return(
        <View style={styles.container}>
            
            <View style={styles.imgArea}>
                <Image source={{uri: (image)}} style={styles.img} />
            </View>

            <View style={styles.options} >
                <View style={styles.option}>
                    <Pressable style={styles.btn} onPress={gallery} >
                        <AntDesign 
                            name="picture"
                            size={60}
                            color={'#03045e'}
                        />
                    </Pressable>
                </View>

                <View style={styles.option}>
                    <Pressable style={styles.btn} onPress={camera} >
                        <AntDesign 
                            name="camera"
                            size={60}
                            color={'#03045e'}
                        />
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        backgroundColor: '#03045e',
        gap: 60,
    },
    imgArea: {
        width: 270,
        height: 270,
        backgroundColor: '#00b4d8',
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        elevation: 30,
    },
    img: {
        width: '94%',
        height: '94%',
        borderRadius: 15,
    },
    btn: {
        width: '60%',
        height: 120,
        color: '#fff',
        alignItems: "center",
        justifyContent: "center",
    },
    options: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#03045e',
        gap: 60,
        flexDirection: 'row',
    },
    option: {
        width: 120,
        height: 120,
        backgroundColor: '#00b4d8',
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        elevation: 30,
    },
})