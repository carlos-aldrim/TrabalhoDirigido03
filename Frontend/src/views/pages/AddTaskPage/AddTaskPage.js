import React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { styles } from "./AddTaskPage.style";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { addTask } from "../../../redux/actions/taskAction";

export default function AddTaskPage() {
  const [taskTitle, setTaskTitle] = React.useState("");
  const [taskDescription, setTaskDescription] = React.useState("");
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [titleError, setTitleError] = React.useState(false);

  const handleAddTask = () => {
    if (taskTitle.trim() !== "") {
      dispatch(
        addTask({
          userId: user.id,
          title: taskTitle,
          description: taskDescription,
        })
      );
      setTaskDescription("");
      setTaskTitle("");
      navigation.navigate("Lista de tarefas");
    } else {
      setTitleError(true);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Título:</Text>
        <TextInput
          style={titleError ? styles.inputError : styles.input}
          placeholder="Digite o título..."
          value={taskTitle}
          onChangeText={(text) => {
            setTaskTitle(text)
            setTitleError(false);
          }}
        />
        <Text style={styles.title}>Descrição:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a descrição..."
          value={taskDescription}
          onChangeText={(text) => setTaskDescription(text)}
        />
        <TouchableOpacity style={styles.buttonContent} onPress={handleAddTask}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
