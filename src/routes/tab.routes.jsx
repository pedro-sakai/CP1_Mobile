import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cadastro from "../screens/Cadastro.jsx";
import Perfil from "../screens/Perfil.jsx";
import {Feather} from "@expo/vector-icons"

const Tab = createBottomTabNavigator()

export default function TabRoutes(){
    return(
        <Tab.Navigator screenOptions={{headerShown:false}}>
          <Tab.Screen 
                name="home"
                component={Home}
                options={{tabBarIcon:()=><Feather name="home" color="red" size={26}/>}}            
          /> 
          <Tab.Screen name="Cadastro" component={Cadastro}/>   
          <Tab.Screen name="Perfil" component={Perfil}/>     
        </Tab.Navigator>
    )
}