import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { getUser, useAppSelector } from "../../store";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Container, Main } from "./styles";

export const Layout = () => {
  const { theme } = useAppSelector(getUser);

  useEffect(() => {
    const htmlteg = document.documentElement;
    if (theme === "light") {
      htmlteg.setAttribute("theme", "light");
    } else if (theme === "dark") {
      htmlteg.setAttribute("theme", "dark");
    }
  }, [theme]);

  return (
    <Container>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Container>
  );
};
