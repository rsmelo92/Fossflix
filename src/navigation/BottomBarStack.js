import { createBottomTabNavigator } from "react-navigation";
import Home from "~/src/screens/HomeScreen";
import Search from "~/src/screens/Search";

const BottomBar = createBottomTabNavigator(
  {
    Home,
    Search
  },
  {
    headerMode: "none"
  }
);

export default BottomBar;
