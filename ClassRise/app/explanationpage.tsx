import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, Image } from "react-native";
import { router } from "expo-router";

// Removed duplicate styles declaration

export function IncorrectScreen() {
    const onButtonClick = () => {
        router.push("./questionpage");
    };

    return (
        <ImageBackground
            source={require("@/app/explanationpagebackground.png")} // Change background to your image
            style={styles.background}
            resizeMode="cover" // Ensures the image fills the background
        >
            <View style={styles.overlay}>
                <TouchableOpacity style={styles.button} onPress={onButtonClick}>
                    <Text style={styles.buttonText}>Explain my mistake</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

export default function ExplanationPage() {
   const normalquestionsexplanation = [
    { question: "When we see a question like: What is 2 × 3? We can think of it as...", visual: "2 × 3", answer: ["6"] },
    { question: "When we see a question like: What is 6 - 2? We can think of it as...", visual: "6 - 2", answer: ["4"] },
    { question: "When we see a question like: What is 9 ÷ 3? We can think of it as...", visual: "9 ÷ 3", answer: ["3"] },
    { question: "When we see a question like: What is 7 × 2? We can think of it as...", visual: "7 × 2", answer: ["14"] },
    { question: "When we see a question like: What is 8 + 5? We can think of it as...", visual: "8 + 5", answer: ["13"] },
    { question: "When we see a question like: What is 15 - 7? We can think of it as...", visual: "15 - 7", answer: ["8"] },
    { question: "When we see a question like: What is 12 ÷ 4? We can think of it as...", visual: "12 ÷ 4", answer: ["3"] },
    { question: "When we see a question like: What is 9 × 3? We can think of it as...", visual: "9 × 3", answer: ["27"] },
    { question: "When we see a question like: What is 20 ÷ 5? We can think of it as...", visual: "20 ÷ 5", answer: ["5"] },
    { question: "When we see a question like: What is 10 + 15? We can think of it as...", visual: "10 + 15", answer: ["25"] },
    { question: "When we see a question like: What is 18 - 9? We can think of it as...", visual: "18 - 9", answer: ["9"] },
    { question: "When we see a question like: What is 50 ÷ 10? We can think of it as...", visual: "50 ÷ 10", answer: ["5"] },
    { question: "When we see a question like: What is 30 + 25? We can think of it as...", visual: "30 + 25", answer: ["55"] },
    { question: "When we see a question like: What is 14 × 3? We can think of it as...", visual: "14 × 3", answer: ["42"] },
    { question: "When we see a question like: What is 100 - 50? We can think of it as...", visual: "100 - 50", answer: ["50"] },
];
const visualQuestionsexplanation = [
    { question: "When we see a question like: 🐟 + 🐟 = ?", explanation: "We can think of it as: 🐟 + 🐟 = 🐟🐟", answer: "🐟🐟"},
    { question: "When we see a question like: 🦆 + 🦆 = ?",  explanation: "We can think of it as: 🦆 + 🦆 = 🦆🦆", answer: "🦆🦆"},
    { question: "When we see a question like: 🐸🐸 - 🐸 = ?", explanation: "We start with two frogs and take one away: 🐸🐸 - 🐸 = 🐸", answer: "🐸"},
    { question: "When we see a question like: 🐢 + 🐢 = ?", explanation: "We can think of it as: 🐢 + 🐢 = 🐢🐢", options:  "🐢🐢"},
    { question: "When we see a question like: 🐠🐠 + 🐠 = ?", explanation: "We can think of it as: 🐠🐠 + 🐠 = 🐠🐠🐠", answer: "🐠🐠🐠" },
    { question: "When we see a question like: 🦆🦆🦆 × 2 = ?", explanation: "We : 🦆🦆🦆 × 2 = 🦆🦆🦆🦆🦆🦆", options: ["🦆🦆", "🦆🦆🦆🦆🦆🦆", "🦆🦆🦆🦆"] },
    { question: "When we see a question like: 🐸🐸🐸🐸 ÷ 2 = ?", explanation: "🐸🐸", options: ["🐸", "🐸🐸", "🐸🐸🐸"] },
    { question: "When we see a question like: 🐢 × 3 = ?", explanation: "🐢🐢🐢", options: ["🐢", "🐢🐢", "🐢🐢🐢"] },
    { question: "When we see a question like: 🐟🐟🐟🐟 ÷ 2 = ?", explanation: "🐟🐟", options: ["🐟", "🐟🐟", "🐟🐟🐟"] },
    { question: "When we see a question like: 🐢🐢🐢 + 🐢 = ?", explanation: "We can think of it as: 🐢🐢🐢🐢", options: ["🐢", "🐢🐢", "🐢🐢🐢🐢"] },
    { question: "When we see a question like: 🦆🦆🦆 - 🦆 = ?", explanation: "We start with three ducks and take one away: 🦆🦆", answer: "🦆🦆"},
    { question: "When we see a question like: 🐟🐟🐟🐟🐟 ÷ 5 = ?", explanation: "🐟", options: ["🐟", "🐟🐟", "🐟🐟🐟"] },
    { question: "When we see a question like: 🦆🦆🦆🦆🦆🦆 × 0 = ?", explanation: "0", options: ["0", "🦆", "🦆🦆"] },
];
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Math Explanation Page</Text>
            
            <Text style={styles.sectionTitle}>Emoji Questions</Text>
            <Text style={styles.explanation}>
                When we see a question like "🐟 + 🐟 = ?", we can think of it as:
            </Text>
            <Text style={styles.visual}>🐟 + 🐟 = 🐟🐟</Text>
            
            <Text style={styles.sectionTitle}>Subtraction</Text>
            <Text style={styles.explanation}>
                If we have "🐸🐸 - 🐸 = ?", we start with two frogs and take one away:
            </Text>
            <Text style={styles.visual}>🐸🐸 - 🐸 = 🐸</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f8ff",
        padding: 20
    },
    background: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#3057c2",
        marginBottom: 20
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#3057c2",
        marginTop: 20
    },
    explanation: {
        fontSize: 18,
        color: "#000",
        textAlign: "center",
        marginVertical: 10
    },
    visual: {
        fontSize: 26,
        textAlign: "center",
        marginBottom: 20
    },
    button: {
        backgroundColor: "#3057c2",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 20,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    overlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});