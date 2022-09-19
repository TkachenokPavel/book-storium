import { getAuth, signOut } from "firebase/auth";
import { Title } from "../../components";
import { getUser, removeUser, useAppDispatch, useAppSelector } from "../../store";
import {
  DateTitle,
  DateWrapper,
  Email,
  EmailTitle,
  EmailWrapper,
  Profile,
  ProfileData,
  StyledAccountPage,
  DateRegister,
} from "./styles";
import { IoMdExit } from "react-icons/io";
import { CSSProperties } from "react";

const exitStyle: CSSProperties = {
  marginTop: "35px",
  marginLeft: "20px",
  width: "40px",
  height: "40px",
  cursor: "pointer",
};

export const AccountPage = () => {
  const { currentUser } = useAppSelector(getUser);

  const dispatch = useAppDispatch();

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      dispatch(removeUser());
    });
  };

  return (
    <StyledAccountPage>
      <Title title="account" />
      <Profile>Profile</Profile>
      <ProfileData>
        <EmailWrapper>
          <EmailTitle>Email</EmailTitle>
          <Email>{currentUser.email}</Email>
        </EmailWrapper>
        <DateWrapper>
          <DateTitle>Date of registration</DateTitle>
          <DateRegister>{currentUser.created}</DateRegister>
        </DateWrapper>
      </ProfileData>
      <IoMdExit style={exitStyle} onClick={handleSignOut} />
    </StyledAccountPage>
  );
};
