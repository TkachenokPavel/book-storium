import { Link } from "react-router-dom";
import { IBookShort } from "../../types/types";
import { getShortBookTitle } from "../../utils";
import { StyledCarouselItem, Image, Title } from "./styles";

interface IProps {
  book: IBookShort;
}

export const CarouselItem = ({ book }: IProps) => {
  const { isbn13, image, title } = book;

  return (
    <StyledCarouselItem>
      <Link to={`/book/${isbn13}`}>
        <Image src={image} alt={title} />
        <Title>{getShortBookTitle(title)}</Title>
      </Link>
    </StyledCarouselItem>
  );
};
