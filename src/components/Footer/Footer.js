import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href="tel:+92 (331) 503-9019">+92 (331) 503-9019</LinkItem>
      </LinkColumn>
          <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto:obaidulllahofficial@gmail.com">obaidulllahofficial@gmail.com</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one Project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href = "https://github.com/ObaidOIS">
      <AiFillGithub size={30} color="#fff" />
    </SocialIcons>
    <SocialIcons href = "https://www.instagram.com/chaudhary.bai.5/">
      <AiFillInstagram size={30} color="#fff" />
    </SocialIcons>
    <SocialIcons href = "https://www.linkedin.com/in/obaidullah-ishtiaq-459446208/">
      <AiFillLinkedin size={30} color="#fff" />
    </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
      </FooterWrapper>
  );
};

export default Footer;
