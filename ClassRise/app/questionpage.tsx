import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, Image } from "react-native";
import { useRouter } from "expo-router";
import { useLocalSearchParams } from "expo-router";

const normalQuestions = [
    { question: "What is 2 + 3?", answer: "5", options: ["2", "4", "5", "6"] },
    { question: "What is 6 - 2?", answer: "4", options: ["2", "3", "4", "5"] },
    { question: "What is 9 ÷ 3?", answer: "3", options: ["2", "3", "4", "5"] },
    { question: "What is 7 × 2?", answer: "14", options: ["10", "12", "14", "16"] },
    { question: "What is 8 + 5?", answer: "13", options: ["10", "12", "13", "15"] },
    { question: "What is 15 - 7?", answer: "8", options: ["6", "7", "8", "9"] },
    { question: "What is 12 ÷ 4?", answer: "3", options: ["2", "3", "4", "5"] },
    { question: "What is 9 × 3?", answer: "27", options: ["24", "27", "30", "33"] },
    { question: "What is 20 ÷ 5?", answer: "4", options: ["3", "4", "5", "6"] },
    { question: "What is 10 + 15?", answer: "25", options: ["20", "25", "30", "35"] },
    { question: "What is 18 - 9?", answer: "9", options: ["7", "8", "9", "10"] },
    { question: "What is 50 ÷ 10?", answer: "5", options: ["4", "5", "6", "7"] },
    { question: "What is 30 + 25?", answer: "55", options: ["50", "55", "60", "65"] },
    { question: "What is 14 × 3?", answer: "42", options: ["40", "42", "44", "46"] },
    { question: "What is 100 - 50?", answer: "50", options: ["40", "50", "60", "70"] },
];

const visualQuestions = [
    { question: "🐟 + 🐟 = ?", answer: "🐟🐟", options: ["🐟", "🐟🐟", "🐟🐟🐟"] },
    { question: "🦆 + 🦆 = ?", answer: "🦆🦆", options: ["🦆", "🦆🦆", "🦆🦆🦆"] },
    { question: "🐸🐸 - 🐸 = ?", answer: "🐸", options: ["🐸", "🐸🐸", "🐸🐸🐸"] },
    { question: "🐢 + 🐢 = ?", answer: "🐢🐢", options: ["🐢", "🐢🐢", "🐢🐢🐢"] },
    { question: "🐠🐠 + 🐠 = ?", answer: "🐠🐠🐠", options: ["🐠", "🐠🐠", "🐠🐠🐠"] },
    { question: "🦆🦆🦆 × 2 = ?", answer: "🦆🦆🦆🦆🦆🦆", options: ["🦆🦆", "🦆🦆🦆🦆🦆🦆", "🦆🦆🦆🦆"] },
    { question: "🐸🐸🐸🐸 ÷ 2 = ?", answer: "🐸🐸", options: ["🐸", "🐸🐸", "🐸🐸🐸"] },
    { question: "🐢 × 3 = ?", answer: "🐢🐢🐢", options: ["🐢", "🐢🐢", "🐢🐢🐢"] },
    { question: "🐟🐟🐟🐟 ÷ 2 = ?", answer: "🐟🐟", options: ["🐟", "🐟🐟", "🐟🐟🐟"] },
    { question: "🐢🐢🐢 + 🐢 = ?", answer: "🐢🐢🐢🐢", options: ["🐢", "🐢🐢", "🐢🐢🐢🐢"] },
    { question: "🦆🦆🦆 - 🦆 = ?", answer: "🦆🦆", options: ["🦆", "🦆🦆", "🦆🦆🦆"] },
    { question: "🐟🐟🐟🐟🐟 ÷ 5 = ?", answer: "🐟", options: ["🐟", "🐟🐟", "🐟🐟🐟"] },
    { question: "🦆🦆🦆🦆🦆🦆 × 0 = ?", answer: "0", options: ["0", "🦆", "🦆🦆"] },
];

export default function QuestionPage() {
    const router = useRouter();
    const params = useLocalSearchParams();
    const dyslexia = Number(params.dyslexia) || 0;
    const dyscalculia = Number(params.dyscalculia) || 0;

    const questionSet = dyslexia > 0 || dyscalculia > 0 ? visualQuestions : normalQuestions;

    const [remainingQuestions, setRemainingQuestions] = useState([...questionSet]);
    const [currentQuestion, setCurrentQuestion] = useState(remainingQuestions[0]);
    const [options, setOptions] = useState<string[]>([]);

    useEffect(() => {
        setOptions([...currentQuestion.options].sort(() => Math.random() - 0.5));
    }, [currentQuestion]);

    const pickNewQuestion = () => {
        if (remainingQuestions.length === 0) {
            setRemainingQuestions([...questionSet]);
        }

        const newRemaining = remainingQuestions.filter(q => q !== currentQuestion);
        if (newRemaining.length > 0) {
            const newQuestion = newRemaining[Math.floor(Math.random() * newRemaining.length)];
            setRemainingQuestions(newRemaining);
            setCurrentQuestion(newQuestion);
        } else {
            setRemainingQuestions([...questionSet]);
            setCurrentQuestion(questionSet[0]);
        }
    };

    const onButtonClick = (selectedAnswer: string) => {
        if (selectedAnswer === currentQuestion.answer) {
            pickNewQuestion();
            router.navigate("./correctpage", { relativeToDirectory: false });
        } else {
            router.navigate("./incorrectpage", { relativeToDirectory: false });
        }
    };

    return (
        <>
        <ImageBackground source={require("./water.png")} style={styles.background} resizeMode="cover">
        
            <View style={styles.container}>

            <Image
                    source={require("./mascot.png")}
                    style={styles.mascot}
                />

                <Text style={styles.question}>
                    {currentQuestion ? currentQuestion.question : "Loading..."}
                </Text>

                <View style={styles.optionsContainer}>
                    
                    {options.map((option) => (
                        <TouchableOpacity key={option} style={styles.button} onPress={() => onButtonClick(option)}>
                            <Text style={styles.buttonText}>{option}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
            </ImageBackground>
        </>
    );
}

const styles = StyleSheet.create({

    mascot: {
        width: 200,
        height: 200,
        marginBottom: 75,
        marginTop: -100,
    },

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    },

    background: {
        flex: 1,
        width: "100%",
        height: "100%",
    },

    question: {
        fontSize: 50,
        color: "#3057c2",
        textAlign: "center",
        marginBottom: 50,
        marginTop: -50,
        marginHorizontal: 30
    },

    optionsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center"
    },

    button: {
        backgroundColor: "#3057c2",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 10,
        alignItems: "center",
        margin: 10
    },

    buttonText: {
        color: "#ffffff",
        fontSize: 20,
        fontWeight: "bold"
    }
});
