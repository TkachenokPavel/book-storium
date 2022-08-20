interface IProps {
    img: string
}

export const NavbarItem = ({ img }: IProps) => {
    return (
        <li>
            <img src={img} alt="" />
        </li>
    )
}
