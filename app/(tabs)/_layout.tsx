import { colors } from "@/constants/theme";
import { PlatformPressable } from "@react-navigation/elements";
import { Tabs } from "expo-router";
import { Cog, House, Lightbulb, Receipt } from "lucide-react-native";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const tabs = [
  { name: "index", title: "Home", TabIcon: House },
  { name: "subscriptions", title: "Subscriptions", TabIcon: Receipt },
  { name: "insights", title: "Insights", TabIcon: Lightbulb },
  { name: "settings", title: "Settings", TabIcon: Cog },
];

const TabLayout = () => {
  const insets = useSafeAreaInsets();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.black,
        tabBarButton: (props) => (
          <PlatformPressable
            {...props}
            style={[props.style, { justifyContent: "center" }]}
          />
        ),
        tabBarStyle: {
          height: 64,
          elevation: 4,
          shadowRadius: 8,
          borderRadius: 999,
          shadowOpacity: 0.1,
          position: "absolute",
          marginHorizontal: 30,
          bottom: insets.bottom + 16,
          shadowOffset: { width: 0, height: 4 },
        },
        tabBarItemStyle: {
          height: 64,
        },
      }}
    >
      {tabs.map(({ name, title, TabIcon }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            title,
            tabBarIcon: ({ focused, color, size }) => (
              <View
                className="rounded-full p-2"
                style={focused ? { backgroundColor: colors.black } : ""}
              >
                <TabIcon
                  size={size / 1.2}
                  color={color}
                  strokeWidth={focused ? 2.5 : 2}
                />
              </View>
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabLayout;
