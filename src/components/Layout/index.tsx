import React from "react";
import { useRouter } from "next/router";
import { Footer } from "../Footer";
import { Header } from "../Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  // Define páginas onde o cabeçalho e o rodapé não devem ser exibidos
  // Define paths where the header and footer should not be displayed
  const hideHeaderOn = ["/login"];
  const hideFooterOn = ["/login"];

  const showHeader = !hideHeaderOn.includes(router.pathname);
  const showFooter = !hideFooterOn.includes(router.pathname);

  return (
    <>
      {showHeader && <Header />}
      <main>{children}</main>
      {showFooter && <Footer />}
    </>
  );
};

export default Layout;
