import { Redirect } from "expo-router";

export default function Index() {
  return <Redirect href={"/(auth)/welcome"} />;
  // return <Redirect href={"/(onboarding)/mood"} />;
}
