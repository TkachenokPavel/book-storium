import styled from 'styled-components';
import { BODY, H3, Media, S1 } from '../../ui';

export const StyledAccount = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Profile = styled.h3`
  margin-bottom: 24px;
  margin-left: 20px;

  ${H3};
`;

export const ProfileData = styled.div`
  display: flex;

  margin-left: 20px;

  ${Media.MD} {
    flex-direction: column;
    gap: 25px;
  };
`;

export const EmailWrapper = styled.div`
  width: 50%;
`;

export const EmailTitle = styled.p`
  ${S1};
`;

export const Email = styled.p`
  margin-top: 16px;

  ${BODY};

  ${Media.MD} {
    margin-top: 8px;
  };
`;

export const DateWrapper = styled.div`
  width: 50%;
`;

export const DateTitle = styled.p`
  ${S1};
`;

export const DateRegister = styled.p`
  margin-top: 16px;

  ${BODY}

  ${Media.MD} {
    margin-top: 8px;
  };
`;