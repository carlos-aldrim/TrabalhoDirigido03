import React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { styles } from "./EditTaskPage.style";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { updateTask } from "../../../redux/actions/taskAction";

export default function EditTaskPage({ route }) {
  const taskId = route.params.taskId;
  const { tasks } = useSelector((state) => state.task);
  const task = tasks.find((task) => task.id === taskId);
  const [taskTitle, setTaskTitle] = React.useState(task.title);
  const [taskDescription, setTaskDescription] = React.useState(
    task.description
  );
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [titleError, setTitleError] = React.useState(false);

  const handleEditTask = () => {
    if (!taskTitle) {
      setTitleError(true);
      return;
    }

    const newTask = {
      id: taskId,
      title: taskTitle,
      description: taskDescription,
      selected: task.selected,
      completed: task.completed,
    };
    console.log(newTask);
    dispatch(
      updateTask(newTask)
    );
    setTaskDescription("");
    setTaskTitle("");
    navigation.navigate("Lista de tarefas");
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
            setTaskTitle(text);
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
        <TouchableOpacity style={styles.buttonContent} onPress={handleEditTask}>
          <Text style={styles.buttonText}>Alterar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
