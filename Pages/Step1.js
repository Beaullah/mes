import { StatusBar, Keyboard } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TextInput,
  Button,
  View,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
export default function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    // Handle form submission here (e.g., send data to server)
    console.log("Name:", name);
    console.log("Password:", password);
    setName("");
    setPassword("");
    // Keyboard.dismiss();

    // Add your logic to submit the form data to the server or perform other actions here
  };

  return (
    <View style={styles.container}>
      <Image
        style={{ alignSelf: "center" }}
        source={require("../assets/logowepay1.png")}
      />

      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Your Email                                            "
      />

      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password                             "
        secureTextEntry // This will hide the entered text (password) as dots
      />

      <TouchableOpacity
        style={styles.button}
        title="Login"
        onPress={handleSubmit}
      >
        <Text style={{ textAlign: "center", color: "white" }}>Login</Text>
      </TouchableOpacity>

      <View style={styles.signup}>
        <View>
          <Text style={{ color: "#8F92A1" }}>Now to Wpay?</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.signupButton}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <View>
          <Text
            style={{
              textAlign: "center",

              marginBottom: 10,
              color: "#8F92A1",
            }}
          >
            or continue with
          </Text>
        </View>
        <TouchableOpacity style={styles.social}>
          <Entypo name="facebook-with-circle" size={30} color="blue" />
          <Text style={styles.socialtext}>Login with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.social}>
          <FontAwesome name="google" size={30} color="blue" />
          <Text>Login with googe</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 8, // Add padding to the top and bottom

    padding: 10,
    marginBottom: 15,
    width: "100%",
  },
  button: {
    backgroundColor: "#4CD080",
    padding: 20,
    height: 60,
    width: 250,
    overflow: "hidden",
    borderRadius: 20,
  },
  signup: {
    flexDirection: "row",
    gap: 2,
    marginTop: 15,

    alignSelf: "center",
  },
  signupButton: {
    textDecorationLine: 1,
    color: "#4CD080",
  },
  social: {
    flexDirection: "row",
    height: 60,
    width: "100%",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "ash",
    padding: 10,
    marginBottom: 10,
    gap: 20,
  },
  socialtext: {
    textAlign: "center",
  },
  footer: {
    marginTop: 70,
  },
});
