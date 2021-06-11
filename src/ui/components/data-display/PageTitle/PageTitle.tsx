import React from "react";
import {
  PageTitleContainer,
  PagetitleStyled,
  PagesubtitleStyled,
} from "./PageTitle.style";

interface PageTitleProps {
  title: string;
  subtitle: string;
}

const PageTitle: React.FC<PageTitleProps> = (props) => {
  return (
    <PageTitleContainer>
      <PagetitleStyled>{props.title} </PagetitleStyled>
      <PagesubtitleStyled>{props.subtitle}</PagesubtitleStyled>
    </PageTitleContainer>
  );
};
export default PageTitle;
