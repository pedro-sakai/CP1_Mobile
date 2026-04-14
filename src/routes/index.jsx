import { NavigationContainer } from "@react-navigation/native";
import TabRoutes from "./src/routes/tab.routes.jsx";

export default function Routes(){
    return(
        <NavigationContainer>
            <TabRoutes/>
        </NavigationContainer>
    )
}