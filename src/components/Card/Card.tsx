import { Link } from "react-router-dom";
import { IBookShort } from "../../types/types";
import { getPrice } from "../../utils";
import { StyledCard, Title, Image, Price } from "./styles";

interface IProps {
  book: IBookShort;
}

export const Card = ({ book: { image, price, title, isbn13 } }: IProps) => {
  return (
    <Link to={`/book/${isbn13}`}>
      <StyledCard
        id={isbn13}
        whileHover={{ scale: 1.05 }}
        initial={{ y: -200 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
      >
        <Price>{getPrice(price)}</Price>
        <Image src={image} alt={title} />
        <Title>{title}</Title>
      </StyledCard>
    </Link>
  );
};
