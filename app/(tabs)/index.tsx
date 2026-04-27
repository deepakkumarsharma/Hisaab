import { useFloatingTabBarBottomPadding } from "@/constants/tabBar";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function Index() {
  const paddingBottom = useFloatingTabBarBottomPadding();

  return (
    <SafeAreaView className="flex-1 p-2 bg-paper" style={{ paddingBottom }}>
      <Text>Testing</Text>
    </SafeAreaView>
  );
}
