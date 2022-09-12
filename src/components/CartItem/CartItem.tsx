import { Link } from "react-router-dom"
import { ICartItem } from "../../types/types"
import { StyledCartItem, Image } from "./styles"

interface IProps {
    cartItem: ICartItem
}
export const CartItem = ({ cartItem }: IProps) => {
    const { image, title, authors, rating, price, year, isbn13 } = cartItem;

    return (
        <StyledCartItem>
            <Link to={`/book/${isbn13}`}>
                <Image src={image} alt={title} />
            </Link>
        </StyledCartItem>
    )
}
