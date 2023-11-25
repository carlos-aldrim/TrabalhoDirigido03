import React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { styles } from "./LoginUserPage.style";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { login } from "../../../redux/actions/authAction";

export default function LoginUserPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleLoginUser = () => {
    if (!email || !password) {
      if (!email) {
        setEmailError(true);
      }
      if (!password) {
        setPasswordError(true);
      }
      return;
    }

    const newUser = {
      email,
      password,
    };

    dispatch(login(newUser));
  };

  return (
    <View style={styles.container}>
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
      <TouchableOpacity style={styles.buttonContent} onPress={handleLoginUser}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <Text style={styles.link} onPress={() => navigation.navigate("Signup")}>
        Não tem conta? Crie aqui.
      </Text>
    </View>
  );
}
