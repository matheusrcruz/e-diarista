import React from "react";

import {
  UserinformationContainer,
  UserName,
  UserDescription,
  RatingStyled,
  AvatarStyled,
} from "ui/components/data-display/UserInformation/UserInformation.style";

interface UserInformationProps {
  picture: string;
  name: string;
  rating: number;
  description?: string;
}

const UserInformation: React.FC<UserInformationProps> = ({
  name,
  picture,
  rating,
  description,
}) => {
  return (
    <UserinformationContainer>
      <AvatarStyled src={picture}>{name[0]}</AvatarStyled>
      <UserName>{name}</UserName>
      <RatingStyled readOnly value={rating} />
      <UserDescription>{description}</UserDescription>
    </UserinformationContainer>
  );
};

export default UserInformation;
