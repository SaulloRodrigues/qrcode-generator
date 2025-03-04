import { Outlet } from "react-router-dom";
import Header from "@/components/Header/Header";
import '@/styles/app.css';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
