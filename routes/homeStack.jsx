import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Details from "../screen/Details";
import Home from "../screen/Home";

const screens = {
    Home: {
        screen: Home,
    },
    Details: {
        screen: Details
    },
}
const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)