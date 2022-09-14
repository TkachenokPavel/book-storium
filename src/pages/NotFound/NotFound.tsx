import { ImageNotFound, StyledNotFound } from "./styles";
import notFound from "../../assets/images/not-found.jpg";

export const NotFound = () => {
  return (
    <StyledNotFound>
      <ImageNotFound src={notFound} alt="Page not found" />
    </StyledNotFound>
  );
};
