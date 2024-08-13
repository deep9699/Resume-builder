import AppHeader from "@/components/appHeader";
import BuilderLayout from "@/components/builderLayout";
import BuilderContextProvider from "@/contexts/builderContextProvider";

export default function Home() {
  return (
    <>
      <div style={{ height: "90vh", overflow: "hidden" }}>
        <BuilderContextProvider>
          <BuilderLayout />
        </BuilderContextProvider>
      </div>
    </>
  );
}
