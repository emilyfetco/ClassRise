import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, Image } from "react-native";
import { router, useLocalSearchParams } from "expo-router";




export default function ExplanationPage() {
    const NavigateQuestionpage = () => router.navigate("./questionpage");

    const params = useLocalSearchParams(); 
    const visual = params.visual === "1"; 
    const questionid = Number(params.id); 
     const ChangeModes = () => {
        (global as any).visual = !(global as any).visual; // Toggle the visual mode   
        }; 
    // The question ID is already declared later in the code, so this line is removed to avoid redeclaration.

   const normalQuestions = [
    { question: "When we see a question like: What is 2 + 3? We can think of it as...", visual: "We start at 2 and count 3 more\nSo 2 + 3 equals 5", id: 1 },
    { question: "When we see a question like: What is 6 - 2? We can think of it as...", visual: "We start at 6 and count 2 steps back\nSo 6 - 2 equals 4", id: 2 },
    { question: "When we see a question like: What is 9 ÷ 3? We can think of it as...", visual: "We make equal groups of 3 from 9\nSo 9 ÷ 3 equals 3", id: 3 },
    { question: "When we see a question like: What is 7 × 2? We can think of it as...", visual: "We add 7 two times: 7 + 7\nSo 7 × 2 equals 14", id: 4 },
    { question: "When we see a question like: What is 8 + 5? We can think of it as...", visual: "We start at 8 and count 5 more\nSo 8 + 5 equals 13", id: 5 },
    { question: "When we see a question like: What is 15 - 7? We can think of it as...", visual: "We start at 15 and count 7 steps back\nSo 15 - 7 equals 8", id: 6 },
    { question: "When we see a question like: What is 12 ÷ 4? We can think of it as...", visual: "We make equal groups of 4 from 12\nSo 12 ÷ 4 equals 3", id: 7 },
    { question: "When we see a question like: What is 9 × 3? We can think of it as...", visual: "We add 9 three times: 9 + 9 + 9\nSo 9 × 3 equals 27", id: 8 },
    { question: "When we see a question like: What is 20 ÷ 5? We can think of it as...", visual: "We make equal groups of 5 from 20\nSo 20 ÷ 5 equals 4", id: 9 },
    { question: "When we see a question like: What is 10 + 15? We can think of it as...", visual: "We start at 10 and count 15 more\nSo 10 + 15 equals 25", id: 10 },
    { question: "When we see a question like: What is 18 - 9? We can think of it as...", visual: "We start at 18 and count 9 steps back\nSo 18 - 9 equals 9", id: 11 },
    { question: "When we see a question like: What is 50 ÷ 10? We can think of it as...", visual: "We make equal groups of 10 from 50\nSo 50 ÷ 10 equals 5", id: 12 },
    { question: "When we see a question like: What is 30 + 25? We can think of it as...", visual: "We start at 30 and count 25 more\nSo 30 + 25 equals 55", id: 13 },
    { question: "When we see a question like: What is 14 × 3? We can think of it as...", visual: "We add 14 three times: 14 + 14 + 14\nSo 14 × 3 equals 42", id: 14 },
    { question: "When we see a question like: What is 100 - 50? We can think of it as...", visual: "We start at 100 and count 50 steps back\nSo 100 - 50 equals 50", id: 15 },
];
const visualQuestions = [
    { question: "🐟 + 🐟 = ?", visual: "We add the fish together: 🐟 + 🐟 = 🐟🐟", id:1},
    { question: "🦆 + 🦆 = ?",  visual: "We add the ducks together: 🦆 + 🦆 = 🦆🦆", id:2},
    { question: "🐸🐸 - 🐸 = ?", visual: "We start with two frogs and take one away: 🐸🐸 - 🐸 = 🐸", id:3},
    { question: "🐢 + 🐢 = ?", visual: "We add the turtles together: 🐢 + 🐢 = 🐢🐢", id:4},
    { question: "🐠🐠 + 🐠 = ?", visual: "We add the fish together: 🐠🐠 + 🐠 = 🐠🐠🐠", id:5},
    { question: "🦆🦆🦆 × 2 = ?", visual: "We double the three ducks: 🦆🦆🦆 × 2 = 🦆🦆🦆🦆🦆🦆", id:6},
    { question: "🐸🐸🐸🐸 ÷ 2 = ?", visual: "We make two equal teams:🐸🐸🐸🐸 ÷ 2 = 🐸🐸", id:7},
    { question: "🐢 × 3 = ?", visual: "We triple the turtle: 🐢 × 3 = 🐢🐢🐢", id:8},
    { question: "🐟🐟🐟🐟 ÷ 2 = ?", visual: "We make two equal teams: 🐟🐟🐟🐟 ÷ 2 =🐟🐟", id:9},
    { question: "🐢🐢🐢 + 🐢 = ?", visual: "We add the turtles together: 🐢🐢🐢 + 🐢 = 🐢🐢🐢🐢", id:10},
    { question: "🦆🦆🦆 - 🦆 = ?", visual: "We start with three ducks and take one away: 🦆🦆🦆 - 🦆 = 🦆🦆", id:11},
    { question: "🐟🐟🐟🐟🐟 ÷ 5 = ?", visual: "We make five equal teams: 🐟🐟🐟🐟🐟 ÷ 5 = 🐟", id:12},
];

//const visual = (global as any).visual; // Retrieve the question set from global variable
const questionSet = visual ? visualQuestions : normalQuestions; // Determine the question set based on the global variable
//const questionid = (global as any).questionid; // Retrieve the question ID from global variable
const currentQuestion = questionSet.find((q) => q.id === questionid); // Find the current question based on the ID
    return (
        <ImageBackground
        source={require("./explanationpagebackground.png")} 
        style={styles.background} resizeMode="cover">
            <View style={styles.container}>

            <Text style={styles.title}>Explanation Page</Text>
            <Text style={styles.explanation}>
                {currentQuestion?.question}
            </Text>
            <Text style={styles.visual}>  {currentQuestion?.visual}  </Text>
            <TouchableOpacity style={styles.button} onPress={NavigateQuestionpage}>
                <Text style={styles.buttonText}> Try the question again </Text>
            </TouchableOpacity>
            {/*<TouchableOpacity style={styles.button} onPress={ChangeModes}>
                <Text style={styles.buttonText}> Change modes</Text>
            </TouchableOpacity>*/}
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 25, // This rounds the edges
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(202, 222, 255, 0.8)",
        padding: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
    background: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%"
    },
    title: {
        fontSize: 45,
        fontWeight: "bold",
        color: "#033280",
        marginBottom: 20
    },
    sectionTitle: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#3057c2",
        marginTop: 20
    },
    explanation: {
        fontSize: 25,
        color: "#000",
        textAlign: "center",
        marginVertical: 10
    },
    visual: {
        fontSize: 25,
        color: "#000",
        textAlign: "center",
        marginBottom: 20
    },
    button: {
        backgroundColor: "#0161ff",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 20,
    },
    buttonText: {
        color: "#c3e0ff",
        fontSize: 18,
        fontWeight: "bold",
    },
});
