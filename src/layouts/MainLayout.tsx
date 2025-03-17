// MainLayout.tsx
import Header from "@/components/Header/Header";
import AnimatedOutlet from "@/layouts/AnimatedOutlet";
import "@/styles/app.css";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <AnimatedOutlet />
      </main>
    </>
  );
};

export default MainLayout;
