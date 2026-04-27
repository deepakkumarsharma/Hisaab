import { useFloatingTabBarBottomPadding } from "@/constants/tabBar";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const Settings = () => {
  const paddingBottom = useFloatingTabBarBottomPadding();

  return (
    <SafeAreaView className="flex-1 p-2 bg-paper" style={{ paddingBottom }}>
      <Text>Settings</Text>
    </SafeAreaView>
  );
};

export default Settings;
