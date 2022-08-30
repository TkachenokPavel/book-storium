import { StyledRating } from "./styles";
import { AiOutlineStar, AiTwotoneStar } from 'react-icons/ai'

interface IProps {
    rating: string
}

export const Rating = ({ rating }: IProps) => {
    const currentStars = +rating;
    const totalStars = 5;

    return (
        <StyledRating>
            {[...new Array(totalStars)].map((_, index) => {
                if (index < currentStars) {
                    return <AiTwotoneStar key={index} style={{ fontSize: '32px' }} />
                } else return <AiOutlineStar key={index} style={{ fontSize: '32px' }} />
            })}
        </StyledRating>
    )
}
