import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Principal from "./Principal";
import Consultas from "./Consultas";
import Explorar from "./Explorar";
import Perfil from "./Perfil";

const Tab = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
  tabBarStyle: {
    backgroundColor: "#002851",
  },
  tabBarActiveTintColor: "#339cff",
  tabBarInactiveTintColor: "#ffffff"
};

const tabs = [
  {
    id: 1,
    name: "Principal",
    component: Principal,
    icon: "home",
  },
  {
    id: 2,
    name: "Consultas",
    component: Consultas,
    icon: "calendar",
  },
  {
    id: 3,
    name: "Explorar",
    component: Explorar,
    icon: "search",
  },
  {
    id: 4,
    name: "Perfil",
    component: Perfil,
    icon: "person",
  },
];

export default function Tabs() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      {tabs.map((tab) => {
        return (
          <Tab.Screen
            key={tab.id}
            name={tab.name}
            component={tab.component}
            options={{ tabBarIcon: ({ color, size }) => (
              <Ionicons name={tab.icon} color={color} size={size}/>
            ) }}
          />
        );
      })}
    </Tab.Navigator>
  );
}