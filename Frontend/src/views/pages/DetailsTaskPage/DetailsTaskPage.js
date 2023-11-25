import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { styles } from "./DetailsTaskPage.style";
import { useNavigation } from "@react-navigation/native";

export default function DetailsTaskPage({ route }) {
  const taskId = route.params.taskId;
  const { tasks } = useSelector((state) => state.task);
  const task = tasks.find((task) => task.id === taskId);
  const navigation = useNavigation();

  const handleEditTask = () => {
    navigation.navigate("Editar tarefa", { taskId });
  };

  if (!task) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tarefa não encontrada.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>ID {taskId}:</Text>
      <Text style={styles.title}>Título:</Text>
      <Text
        style={{
          ...styles.subtitle,
          textDecorationLine: task.completed ? "line-through" : "none",
        }}
      >
        {task.title}
      </Text>
      <Text style={styles.title}>Descrição:</Text>
      <Text
        style={{
          ...styles.subtitle,
          textDecorationLine: task.completed ? "line-through" : "none",
        }}
      >
        {task.description}
      </Text>
      <TouchableOpacity
        disabled={task.completed ? true : false}
        style={
          !task.completed
            ? styles.buttonContent
            : { ...styles.buttonContent, ...styles.buttonDisabled }
        }
        onPress={handleEditTask}
      >
        <Text style={styles.buttonText}>Editar</Text>
      </TouchableOpacity>
    </View>
  );
}
