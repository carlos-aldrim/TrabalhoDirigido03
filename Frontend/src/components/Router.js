import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TaskListPage from "../views/pages/TaskListPage/TaskListPage";
import AddTaskPage from "../views/pages/AddTaskPage/AddTaskPage";
import DetailsTaskPage from "../views/pages/DetailsTaskPage/DetailsTaskPage";
import EditTaskPage from "../views/pages/EditTaskPage/EditTaskPage";
import LoginUserPage from "../views/pages/LoginUserPage/LoginUserPage";
import SignupUserPage from "../views/pages/SignupUserPage/SignupUserPage";
import { useSelector } from "react-redux";

const AuthStack = createStackNavigator();
const TaskStack = createStackNavigator();
const Stack = createStackNavigator();

function TaskStackNavigator() {
  return (
    <TaskStack.Navigator initialRouteName="Lista de tarefas">
      <TaskStack.Screen name="Lista de tarefas" component={TaskListPage} />
      <TaskStack.Screen name="Adicionar tarefa" component={AddTaskPage} />
      <TaskStack.Screen name="Detalhe da tarefa" component={DetailsTaskPage} />
      <TaskStack.Screen name="Editar tarefa" component={EditTaskPage} />
    </TaskStack.Navigator>
  );
}

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen name="Login" component={LoginUserPage} />
      <AuthStack.Screen name="Signup" component={SignupUserPage} />
    </AuthStack.Navigator>
  );
}

export default function Router() {
  const { isLogin } = useSelector((state) => state.auth);

  function renderScreens() {
    return isLogin ? (
      <Stack.Screen name={"TaskStack"} component={TaskStackNavigator} />
    ) : (
      <Stack.Screen name={"AuthStack"} component={AuthStackNavigator} />
    );
  }

  console.log(isLogin);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
        }}
      >
        {renderScreens()}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
