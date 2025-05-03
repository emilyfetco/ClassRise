import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground  } from "react-native";
import { router } from "expo-router";

 const onButtonClick = () => {
    router.navigate("./questionpage", { relativeToDirectory: false });
  };

const questions = [

  { text: "Is reading really hard, even when you try?", options: ["Yes", "Sometimes", "No"],category: "dyslexia" },
  { text: "Do you mix up letters like “b” and “d” ?", options: ["Yes", "Sometimes", "No"],category: "dyslexia" },
  { text: "Do you forget what you just read, even if you understood it?", options: ["Yes", "Sometimes", "No"],category: "dyslexia" },
  { text: "Do numbers look like they move around when you look at them?", options: ["Yes", "Sometimes", "No"],category: "dyscalculia" },
{ text: "Is it hard to tell which number is bigger, like 50 or 5?", options: ["Yes", "Sometimes", "No"], category: "dyscalculia" },
{ text: "Do you mix up numbers like 6 and 9 or 3 and 8?", options: ["Yes", "Sometimes", "No"], category: "dyscalculia" },

];

export default function QuizScreen() {
    const [index, setIndex] = useState(0);

    const [responses, setResponses] = useState<{ [key: string]: number }>({
        dyslexia: 0,
        dyscalculia: 0,
      });
    
    const handleNext = (option: string, category: string) => {
        if (category !== "general") {
            setResponses((prev) => ({
              ...prev,
              [category]: prev[category] + (option === "Yes" ? 2 : option === "Sometimes" ? 1 : 0),
            }));
          }

          if (index < questions.length - 1) {
            setIndex(index + 1);
          } else { router.push({ pathname: "./resultsquiz", params: responses });
        }
      };

return (

      <ImageBackground
        source={require("./quizpic.png")}
        style={styles.background}
        resizeMode="cover"
        
        >
        <View style={styles.container}>
        <Text style={styles.question}>{questions[index].text}</Text>
        {questions[index].options.map((option) => (
            <TouchableOpacity key={option} style={styles.button} onPress={() => handleNext(option, questions[index].category)}>
              <Text style={styles.buttonText}>{option}</Text>
              </TouchableOpacity>
      ))}

      </View>

      </ImageBackground>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },

  question:{
        fontSize: 25,
        color: "#2c786c",
        textAlign: "center",
        marginBottom: 30,
        marginHorizontal: 30,
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 10,
        fontWeight: "bold",

  },

  finishButton:{
    backgroundColor: "rgba(103, 202, 187, 0.85)",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 25,
    width: 150,
    marginVertical: 20,
  },

  button: {
    backgroundColor: "rgba(44, 120, 108, 0.85)",
    padding: 15,
    borderRadius: 8,
    width: 200,
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 30,
    marginVertical: 10,
  },

  buttonText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },

  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  
});