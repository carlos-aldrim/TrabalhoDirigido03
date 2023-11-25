import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getTasks } from "../../../redux/actions/taskAction";
import { styles } from "./TaskListPage.style";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { updateTask, removeTask } from "../../../redux/actions/taskAction";
import { logout } from "../../../redux/actions/authAction";

export default function TaskListPage() {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.task);
  const { user } = useSelector((state) => state.auth);
  const navigation = useNavigation();
  const [lastPress, setLastPress] = React.useState(0);
  const [currentId, setCurrentId] = React.useState(null);
  const doublePressDelay = 300;
  const [userTasks, setUserTasks] = React.useState([]);

  React.useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  React.useEffect(() => {
    const newTasks = tasks.filter((task) => task.userId === user.id);
    setUserTasks(newTasks);
  }, [tasks, user]);

  const handleToggleTaskSelection = (taskId) => {
    const selectedTask = tasks.find((task) => task.id === taskId);
    if (selectedTask) {
      const newTask = {
        id: selectedTask.id,
        title: selectedTask.title,
        description: selectedTask.description,
        selected: !selectedTask.selected,
        completed: selectedTask.completed,
      };
      dispatch(updateTask(newTask));
    } else {
      console.log("Tarefa não encontrada");
    }
  };

  const handleMarkTasksAsCompleted = () => {
    tasks
      .filter((task) => task.selected)
      .map((task) => {
        const newTask = {
          id: task.id,
          title: task.title,
          description: task.description,
          selected: false,
          completed: true,
        };
        dispatch(updateTask(newTask));
      });
  };

  const handleDeleteSelectedTasks = () => {
    tasks
      .filter((task) => task.selected)
      .map((task) => {
        console.log(task);
        dispatch(removeTask(task.id));
      });
  };

  const navigateToDetails = (taskId) => {
    navigation.navigate("Detalhe da tarefa", { taskId });
  };

  const onItemPress = (taskId) => {
    const time = new Date().getTime();
    const delta = time - lastPress;

    if (delta < doublePressDelay && taskId === currentId) {
      navigateToDetails(taskId);
    } else {
      setLastPress(time);
      setCurrentId(taskId);
      setTimeout(() => {
        setCurrentId(null);
      }, doublePressDelay);
    }
  };

  const renderItem = (task) => (
    <TouchableOpacity
      onPress={() => handleToggleTaskSelection(task.item.id)}
      onPressIn={() => onItemPress(task.item.id)}
    >
      <Text
        style={{
          ...styles.taskIten,
          textDecorationLine: task.item.completed ? "line-through" : "none",
          color: task.item.completed ? "gray" : "black",
          backgroundColor: task.item.selected ? "lightgrey" : "transparent",
        }}
      >
        {task.item.title}
      </Text>
    </TouchableOpacity>
  );

  const onPressAddTaskScreen = () => {
    navigation.navigate("Adicionar tarefa");
  };

  const onPressLogoutUser = () => {
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      <View style={styles.taskToolsHeader}>
        <Text style={styles.description}>
          Selecione as tarefas para executar ações.
        </Text>
      </View>
      <TouchableOpacity
        style={{ ...styles.buttonFloatingContent, backgroundColor: "#097c7c" }}
        onPress={onPressAddTaskScreen}
      >
        <Ionicons name="add" size={30} color="white" />
      </TouchableOpacity>
      <View style={styles.taskToolsHeader}>
        <TouchableOpacity
          style={{
            ...styles.buttonContent,
            ...styles.buttonHeader,
            backgroundColor: "#014e4e",
          }}
          onPress={handleMarkTasksAsCompleted}
        >
          <Ionicons name="ios-checkmark-circle" size={20} color="#fff" />
          <Text style={styles.buttonText}>Concluir</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.buttonContent,
            ...styles.buttonHeader,
            backgroundColor: "#4e0101",
          }}
          onPress={handleDeleteSelectedTasks}
        >
          <MaterialIcons name="delete" size={20} color="#fff" />
          <Text style={styles.buttonText}>Deletar</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Tarefa(s):</Text>
      <Text style={styles.description}>
        Duplo clique para acessar a tarefa.
      </Text>
      <FlatList
        data={userTasks.filter((task) => !task.completed)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.title}>Concluída(s):</Text>
      <FlatList
        data={userTasks.filter((task) => task.completed)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity
        style={{ ...styles.buttonContent, backgroundColor: "#4e0101" }}
        onPress={onPressLogoutUser}
      >
        <MaterialIcons name="logout" size={20} color="#fff" />
        <Text style={styles.buttonText}>Sair da conta</Text>
      </TouchableOpacity>
    </View>
  );
}
