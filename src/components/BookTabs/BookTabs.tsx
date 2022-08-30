import { IBookDetails } from "../../types/types"
import { StyledTabs, StyledTabList, StyledTab, StyledTabPanel } from "./styles"

interface IProps {
    book: IBookDetails
}

export const BookTabs = ({ book }: IProps) => {
    const { desc, authors } = book

    return (
        <StyledTabs
            selectedTabClassName='is-selected'
            selectedTabPanelClassName='is-selected'
        >
            <StyledTabList>
                <StyledTab>Description</StyledTab>
                <StyledTab>Authors</StyledTab>
            </StyledTabList>
            <StyledTabPanel>{desc}</StyledTabPanel>
            <StyledTabPanel>{authors}</StyledTabPanel>
        </StyledTabs>
    )
}
