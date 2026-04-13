import { NavigationContainer } from "@react-navigation/native";
import TabRoutes from "./tab.routes.jsx";

export default function Routes(){
    return(
        <NavigationContainer>
            <TabRoutes/>
        </NavigationContainer>
    )
}