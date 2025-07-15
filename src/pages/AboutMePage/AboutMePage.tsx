import {
  Container,
  IntroSection,
  ProfileImage,
  Title,
  SubTitle,
  WorkNow,
  ProjectsSection,
  UnderConstructionImg,
  StackSection,
  StackTags,
  Tag,
  ContactSection,
  ContactButton,
  ContactInfo,
  ButtonsWrapper,
} from "./AboutMePage.style";

function AboutContact() {
  const whatsapp = "https://wa.me/722195284";

  const curiosityTech = ["Vercel", "GitHub Pages", "Firebase", "Phyton"];
  const someKnowledgeTech = ["Java", "C", "Bootstrap", "Jest"];
  const ikigaiTech = [
    "React",
    "React Router",
    "Styled-Components",
    "Redux",
    "React Hook Form",
    "TypeScript",
    "HTML5",
    "CSS3",
  ];

  return (
    <Container>
      <IntroSection>
        <ProfileImage src="/foto cv.jpg" alt="Profile" />
        <div>
          <Title>Front End Developer</Title>
          <SubTitle>Interested in DevOps · AI · Assembly</SubTitle>
          <WorkNow>Mastering React - Learning Every Day</WorkNow>
        </div>
        <ContactInfo>
          <p>Marcos Solé</p>
          <p>722 195 284</p>
          <p>puebloseko@gmail.com</p>
        </ContactInfo>
      </IntroSection>

      <ProjectsSection>
        <h2>Some of My Works</h2>
        <UnderConstructionImg
          src="/underConstruction.svg"
          alt="Under Construction"
        />
        <p>Section under construction sorry</p>
      </ProjectsSection>

      <StackSection>
        <h2>Tech Stack</h2>
        <StackTags>
          <div>
            <SubTitle>Curiosity</SubTitle>
            {curiosityTech.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
          <div>
            <SubTitle>Some Knowledge</SubTitle>
            {someKnowledgeTech.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
          <div>
            <SubTitle>Production</SubTitle>
            {ikigaiTech.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
        </StackTags>
      </StackSection>

      <ContactSection>
        <h2>Let's Connect</h2>

        <ButtonsWrapper>
          <ContactButton
            href="mailto:puebloseko@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/iconEmail.svg" alt="Email Icon" />
            Email
          </ContactButton>
          <ContactButton
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/iconWatsapp.svg"alt="WhatsApp Icon" />
            WhatsApp
          </ContactButton>
        </ButtonsWrapper>
      </ContactSection>
    </Container>
  );
}

export default AboutContact;
