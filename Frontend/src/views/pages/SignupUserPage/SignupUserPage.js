import React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { styles } from "./SignupUserPage.style";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { registerUser } from "../../../redux/actions/authAction";

export default function SignupUserPage() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailError, setEmailError] = React.useState(false);
  const [nameError, setNameError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const isEmailValid = (text) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(text);
  };

  const handleSignupUser = () => {
    if (!name || !email || !password) {
      if (!name) {
        setNameError(true);
      }
      if (!email) {
        setEmailError(true);
      }
      if (!password) {
        setPasswordError(true);
      }
      return;
    }

    if (!isEmailValid(email)) {
      setEmailError(true);
      return;
    }

    const newUser = {
      name,
      email,
      password,
    };
    dispatch(registerUser(newUser));
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nome:</Text>
      <TextInput
        style={nameError ? styles.inputError : styles.input}
        placeholder="Digite seu nome..."
        value={name}
        onChangeText={(text) => {
          setName(text);
          setNameError(false);
        }}
      />
      <Text style={styles.title}>Email:</Text>
      <TextInput
        style={emailError ? styles.inputError : styles.input}
        placeholder="Digite o email..."
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          setEmailError(false);
        }}
      />
      <Text style={styles.title}>Senha:</Text>
      <TextInput
        style={passwordError ? styles.inputError : styles.input}
        placeholder="Digite sua senha..."
        value={password}
        onChangeText={(text) => {
          setPassword(text);
          setPasswordError(false);
        }}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.buttonContent} onPress={handleSignupUser}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      <Text style={styles.link} onPress={() => navigation.navigate("Login")}>
        Já tem conta? Entre aqui.
      </Text>
    </View>
  );
}
