import { Outlet } from "react-router-dom";
import Header from "@/components/Header/Header";
import '@/styles/app.css';

const MainLayout = () => {
  return (
    <>
      <Header className="header" />
      <main className="main">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
