import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { useLocalSearchParams, router } from "expo-router";

const onButtonClick = () => {
    router.navigate("./levelscreen", { relativeToDirectory: false });
  };

export default function ResultsScreen() {
  const params = useLocalSearchParams();
  const adhd = Number(params.adhd) || 0;
const dyslexia = Number(params.dyslexia) || 0;
const dyscalculia = Number(params.dyscalculia) || 0;


  const getDiagnosis = () => {
    let diagnosis = [];

    if (adhd >= 8) diagnosis.push("Possible ADHD");
    if (dyslexia >= 8) diagnosis.push("Possible Dyslexia");
    if (dyscalculia >= 8) diagnosis.push("Possible Dyscalculia");

    return diagnosis.length > 0 ? diagnosis.join(", ") : "No clear signs detected.";
  };

  return (
    <ImageBackground source={require("./quizpic.png")} style={styles.background} resizeMode="cover">
      <View style={styles.container}>
        <Text style={styles.title}>Your Results</Text>
        <Text style={styles.resultText}>{getDiagnosis()}</Text>
                <TouchableOpacity style={styles.button} onPress={onButtonClick}>
                  <Text style={styles.buttonText}>Let's start learning!</Text>
                </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    justifyContent: "center",
     alignItems: "center",
      paddingHorizontal: 20 },


  title: { 
    fontSize: 30,
     fontWeight: "bold",
      color: "#2c786c",
       marginBottom: 20,
        textAlign: "center" 
    },

  resultText: { 
    fontSize: 25, 
    color: "#333", 
    textAlign: "center", 
    marginBottom: 30, 
    backgroundColor: "rgba(255, 255, 255, 0.7)", 
    paddingVertical: 10, 
    paddingHorizontal: 20, 
    borderRadius: 10 
},

  button: {
     backgroundColor: "rgba(44, 120, 108, 0.85)",
      paddingVertical: 12,
       paddingHorizontal: 30,
        borderRadius: 8,
         alignItems: "center"
         },
  buttonText: { 
    color: "white", 
    fontSize: 20, 
    fontWeight: "bold", 
    textAlign: "center" 
},

  background: { 
    flex: 1, 
    width: "100%", 
    height: "100%" },
});
