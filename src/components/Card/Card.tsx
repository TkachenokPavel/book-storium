import { Link } from "react-router-dom"
import { INewBook } from "../../types/types"
import { getPrice } from "../../utils"
import { StyledCard, Title, Image, Price } from "./styles"

interface IProps {
    book: INewBook,
}

export const Card = ({ book: { image, price, title, isbn13 } }: IProps) => {
    return (
        <StyledCard id={isbn13}>
            <Price>{getPrice(price)}</Price>
            <Image src={image} alt={title} />
            <Link to={`book/${isbn13}`}>
                <Title>{title}</Title>
            </Link>
        </StyledCard>
    )
}
