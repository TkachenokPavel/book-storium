import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Container, Main } from "./styles";

export const Layout = () => {
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
