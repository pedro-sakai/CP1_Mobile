import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Feather} from "@expo/vector-icons"

import Cadastro from "./src/screens/Cadastro.jsx";
import Perfil from "./src/screens/Perfil.jsx";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Cadastro" component={Cadastro} 
        options={{tabBarIcon:()=><Feather name="clipboard" color="black" size={25}/>}}
        />
        <Tab.Screen name="Perfil" component={Perfil}
        options={{tabBarIcon:()=><Feather name="smile" color="black" size={25}/>}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}