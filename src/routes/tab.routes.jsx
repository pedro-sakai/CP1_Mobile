import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cadastro from "./src/screens/Cadastro.jsx";
import Perfil from "./src/screens/Perfil.jsx";
import {Feather} from "@expo/vector-icons"

const Tab = createBottomTabNavigator()

export default function TabRoutes(){
    return(
        <Tab.Navigator screenOptions={{headerShown:false}}>
          <Tab.Screen name="Cadastro" component={Cadastro}/>
          <Tab.Screen name="Perfil" component={Perfil}/>   
        </Tab.Navigator>
    )
}