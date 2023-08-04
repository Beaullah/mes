import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { AntDesign } from "@expo/vector-icons"; // Import the back arrow icon

const PhoneVerificationScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleVerify = () => {
    // Add logic here to handle phone verification
    // For example, you can use Firebase Phone Authentication
    console.log("Verifying phone number:", phoneNumber);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.innerContainer}>
          <View style={styles.iinerC}>
            <TouchableOpacity>
              <AntDesign name="arrowleft" size={24} color="white" />
            </TouchableOpacity>
            <Text style={styles.title}>Continue with Phone</Text>
          </View>
          <Text style={styles.subtitle}>
            Enter your phone number to receive a pin code to sign up
          </Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.countryCode}
              placeholder="+1"
              keyboardType="phone-pad"
              value="+1"
              // You can add logic to change the country code dynamically
            />
            <TextInput
              style={styles.phoneNumber}
              placeholder="Enter your phone number"
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
          </View>
          <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
            <Text style={styles.verifyButtonText}>Send code</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: "#105D38",
    justifyContent: "center",
    height: "100%",
  },
  innerContainer: {
    marginTop: -300,
  },

  iinerC: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#ffff",
  },
  subtitle: {
    fontSize: 16,
    color: "#ffff",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  countryCode: {
    width: 60,
    paddingVertical: 10,
    paddingHorizontal: 5,
    fontSize: 16,
  },
  phoneNumber: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    fontSize: 16,
  },
  verifyButton: {
    backgroundColor: "#4CD080",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 20,
  },
  verifyButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default PhoneVerificationScreen;
