import { IBookDetails } from "../../types/types";
import {
  StyledTabs,
  StyledTabList,
  StyledTab,
  StyledTabPanel,
  Subtitle,
  Description,
} from "./styles";

interface IProps {
  book: IBookDetails;
}

export const BookTabs = ({ book }: IProps) => {
  const { desc, authors, subtitle } = book;

  return (
    <StyledTabs selectedTabClassName="is-selected" selectedTabPanelClassName="is-selected">
      <StyledTabList>
        <StyledTab>Description</StyledTab>
        <StyledTab>Authors</StyledTab>
      </StyledTabList>
      <StyledTabPanel>
        <Subtitle>{subtitle}</Subtitle>
        <Description>{desc}</Description>
      </StyledTabPanel>
      <StyledTabPanel>{authors}</StyledTabPanel>
    </StyledTabs>
  );
};
