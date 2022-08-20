import styled from 'styled-components';
import { Color } from '../../ui';

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    width: 100%;
    padding: 25px 0;

    border-bottom: 2px solid ${Color.GREY};
`;