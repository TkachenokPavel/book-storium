import { ImageNotFound, StyledNotFound } from "./styles"
import notFound from '../../assets/004.jpg'

export const NotFound = () => {
    return (
        <StyledNotFound>
            <ImageNotFound src={notFound} />
        </StyledNotFound>
    )
}
