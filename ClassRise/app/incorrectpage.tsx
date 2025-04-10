import React from "react";
import { Text, View, TouchableOpacity, ImageBackground, Image, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function CorrectScreen() {
    const onButtonClick = () => {
        router.navigate("./explanationpage");
    };

    return (
        <ImageBackground 
            source={require("@/app/Incorrectbackground.png")} // Change background to your image
            style={styles.background}
            resizeMode="cover" // Ensures the image fills the background
        >
            <View style={styles.container}>
                <Text style={styles.correctText}>Incorrect...</Text>
                <Image
                    source={require("@/app/SadFrog.png")}
                    style={styles.mascot}
                    resizeMode="contain"
                />
                <TouchableOpacity style={styles.button} onPress={onButtonClick}>
                    <Text style={styles.buttonText}>Explain my mistake</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
    },
    container: {
        alignItems: "center",
    },
    mascot: {
        width: 300,
        height: 300,
        marginBottom: 20,
    },
    correctText: {
        fontSize: 35,
        color: "#ffffff",
        textAlign: "center",
        marginBottom: -30,
        fontWeight: "bold",
    },
    button: {
        backgroundColor: "#ed3e3e",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 10,
        alignItems: "center",
    },
    buttonText: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "bold",
    },
});
