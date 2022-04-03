import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in web development world.
      From-end to Design
    </SectionText>
    <List>
      <ListItem>
        <DiReact size={50} color="#fff" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with HTML, CSS, JavaScript, React, Next.js.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size={50} color="#fff" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>Experience with Django and Node.JS</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size={50} color="#fff" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>Experience with Figma</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
