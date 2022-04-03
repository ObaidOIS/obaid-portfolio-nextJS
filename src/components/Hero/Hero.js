import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
 <section row nopadding>
    <LeftSection>
      <Section>
        <SectionTitle main center>
          I am Obaidullah <br />
          Welcome to my Portfolio
        </SectionTitle>
        <SectionText>
          <p>What can a “full-stack web developer” do, you ask?

I can conjur a website from nothing into existence, fully formed. I do not use tricks, nor is this magic. I specialize in manipulating the very fabric of the web, its raw materials of HTML, CSS, JavaScript, and SVG. Linux servers serve me, domains are my domain, and certificates are certain.</p>
        </SectionText>
        <Button onClick={() => window.location = '/#about'}>Learn  More</Button>
      </Section>
    </LeftSection>
 </section>

);

export default Hero;