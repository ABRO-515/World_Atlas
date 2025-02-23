import { Outlet } from "react-router-dom";
import { Footer } from "../UI/Footer";
import { Header } from "../UI/Header";

export const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
