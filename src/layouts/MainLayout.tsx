// MainLayout.tsx
import React from "react";
import { useOutlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "@/components/Header/Header";
import { MobileProvider } from "@/contexts/MobileContext";

const MainLayout: React.FC = () => {
  const outlet = useOutlet();
  const location = useLocation();

  const pageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <>
      <MobileProvider>
        <Header />
      </MobileProvider>
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.key}
            variants={pageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.4 }}
            style={{ position: "absolute", width: "100%", height: "100%" }}
          >
            {outlet}
          </motion.div>
        </AnimatePresence>
      </main>
    </>
  );
};

export default MainLayout;
