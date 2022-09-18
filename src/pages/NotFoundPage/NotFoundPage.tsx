import { ImageNotFound, StyledNotFoundPage } from "./styles";
import notFound from "../../assets/images/not-found.jpg";

export const NotFoundPage = () => {
  return (
    <StyledNotFoundPage>
      <ImageNotFound src={notFound} alt="Page not found" />
    </StyledNotFoundPage>
  );
};
