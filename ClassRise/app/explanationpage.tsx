import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, Image } from "react-native";
import { router } from "expo-router";




export default function ExplanationPage() {
    const NavigateQuestionpage = () => {
            router.navigate("./questionpage");
        }; 
     const ChangeModes = () => {
        (global as any).visual = !(global as any).visual; // Toggle the visual mode   
        }; 

   const normalQuestions = [
    { question: "When we see a question like: What is 2 + 3? We can think of it as...", visual: "2 + 3 = 5", id: 1 },
    { question: "When we see a question like: What is 6 - 2? We can think of it as...", visual: "6 - 2 = 4", id: 2 },
    { question: "When we see a question like: What is 9 ÷ 3? We can think of it as...", visual: "9 ÷ 3 = 3", id: 3 },
    { question: "When we see a question like: What is 7 × 2? We can think of it as...", visual: "7 × 2 = 14", id: 4 },
    { question: "When we see a question like: What is 8 + 5? We can think of it as...", visual: "8 + 5 = 13", id: 5 },
    { question: "When we see a question like: What is 15 - 7? We can think of it as...", visual: "15 - 7 = 8", id: 6 },
    { question: "When we see a question like: What is 12 ÷ 4? We can think of it as...", visual: "12 ÷ 4 = 3", id: 7 },
    { question: "When we see a question like: What is 9 × 3? We can think of it as...", visual: "9 × 3 = 27", id: 8 },
    { question: "When we see a question like: What is 20 ÷ 5? We can think of it as...", visual: "20 ÷ 5 = 5", id: 9 },
    { question: "When we see a question like: What is 10 + 15? We can think of it as...", visual: "10 + 15 = 25", id: 10 },
    { question: "When we see a question like: What is 18 - 9? We can think of it as...", visual: "18 - 9 = 9", id: 11 },
    { question: "When we see a question like: What is 50 ÷ 10? We can think of it as...", visual: "50 ÷ 10 = 5", id: 12 },
    { question: "When we see a question like: What is 30 + 25? We can think of it as...", visual: "30 + 25 = 55", id: 13 },
    { question: "When we see a question like: What is 14 × 3? We can think of it as...", visual: "14 × 3 = 42", id: 14 },
    { question: "When we see a question like: What is 100 - 50? We can think of it as...", visual: "100 - 50 = 50", id: 15 },
];
const visualQuestions = [
    { question: "When we see a question like: 🐟 + 🐟 = ?", visual: "We can think of it as: 🐟 + 🐟 = 🐟🐟", id:1},
    { question: "When we see a question like: 🦆 + 🦆 = ?",  visual: "We can think of it as: 🦆 + 🦆 = 🦆🦆", id:2},
    { question: "When we see a question like: 🐸🐸 - 🐸 = ?", visual: "We start with two frogs and take one away: 🐸🐸 - 🐸 = 🐸", id:3},
    { question: "When we see a question like: 🐢 + 🐢 = ?", visual: "We can think of it as: 🐢 + 🐢 = 🐢🐢", id:4},
    { question: "When we see a question like: 🐠🐠 + 🐠 = ?", visual: "We can think of it as: 🐠🐠 + 🐠 = 🐠🐠🐠", id:5},
    { question: "When we see a question like: 🦆🦆🦆 × 2 = ?", visual: "We can double the three ducks that we have: 🦆🦆🦆 × 2 = 🦆🦆🦆🦆🦆🦆", id:6},
    { question: "When we see a question like: 🐸🐸🐸🐸 ÷ 2 = ?", visual: "We can make two equal teams for a game:🐸🐸🐸🐸 ÷ 2 = 🐸🐸", id:7},
    { question: "When we see a question like: 🐢 × 3 = ?", visual: "We can triple the turtle that we have: 🐢 × 3 = 🐢🐢🐢", id:8},
    { question: "When we see a question like: 🐟🐟🐟🐟 ÷ 2 = ?", visual: "We can make two equal teams for a game: 🐟🐟🐟🐟 ÷ 2 =🐟🐟", id:9},
    { question: "When we see a question like: 🐢🐢🐢 + 🐢 = ?", visual: "We can think of it as: 🐢🐢🐢 + 🐢 = 🐢🐢🐢🐢", id:10},
    { question: "When we see a question like: 🦆🦆🦆 - 🦆 = ?", visual: "We start with three ducks and take one away: 🦆🦆🦆 - 🦆 = 🦆🦆", id:11},
    { question: "When we see a question like: 🐟🐟🐟🐟🐟 ÷ 5 = ?", visual: "We can make teams for a game: 🐟🐟🐟🐟🐟 ÷ 5 = 🐟", id:12},
    { question: "When we see a question like: 🦆🦆🦆🦆🦆🦆 × 0 = ?", visual: "We don't multiply the ducks by anything so the answer is zero: 🦆🦆🦆🦆🦆🦆 × 0 = 0", id:13},
];
const visual = (global as any).visual; // Retrieve the question set from global variable
const questionSet = visual ? visualQuestions : normalQuestions; // Determine the question set based on the global variable
const questionid = (global as any).questionid; // Retrieve the question ID from global variable
const currentQuestion = questionSet.find((q) => q.id === questionid); // Find the current question based on the ID
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Explanation Page</Text>
            <Text style={styles.explanation}>
            {currentQuestion?.question} 
            </Text>
            <Text style={styles.visual}>  {currentQuestion?.visual}  </Text>
             <TouchableOpacity style={styles.button} onPress={NavigateQuestionpage}>
            <Text style={styles.buttonText}> Try the question again </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={ChangeModes}>
            <Text style={styles.buttonText}> ...</Text>
            </TouchableOpacity>
        </View>
    )
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
