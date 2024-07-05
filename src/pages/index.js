import AppHeader from "@/components/appHeader";
import BuilderLayout from "@/components/builderLayout";
import BuilderContextProvider from "@/contexts/builderContextProvider";

export default function Home() {
  return (
    <>
      <BuilderContextProvider>
        <BuilderLayout />
      </BuilderContextProvider>
    </>
  );
}
