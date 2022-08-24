import { StyledTitle } from './styles'

interface IProps {
    title?: string
}

export const Title = ({ title }: IProps) => {
    return (
        <StyledTitle>{title}</StyledTitle>
    )
}
