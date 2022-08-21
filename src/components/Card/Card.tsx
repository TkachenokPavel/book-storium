import { INewBook } from "../../types/types"
import { StyledCard, Title, Image, Price } from "./styles"

interface IProps {
    book: INewBook,
}

export const Card = ({ book: { image, price, title, isbn13 } }: IProps) => {
    return (
        <StyledCard id={isbn13}>
            <Price>{price}</Price>
            <Image src={image} alt={title} />
            <Title>{title}</Title>
        </StyledCard>
    )
}
