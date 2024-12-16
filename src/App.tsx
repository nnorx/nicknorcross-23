import Body from "./components/Body";
import Column from "./components/Column";
import Header from "./components/Header";
import Link from "./components/Link";
import Main from "./components/Main";
import Section from "./components/Section";
import Text from "./components/Text";
import Title from "./components/Title";

const content = {
  header: {
    name: "Nick Norcross",
    title: "Software Engineer",
  },
  main: {
    title: "Today",
    description:
      "I work as a software engineer at Clearview AI. I like to build user interfaces that solve problems intuitively through design and code.",
  },
  projects: {
    title: "Projects",
    items: [
      {
        href: "https://nnorx.github.io/MovingAverages",
        title: "Fear & Greed Index Moving Averages",
        description: "Data Visualization",
      },
      {
        href: "https://nnorx.github.io/WordleClone",
        title: "Wordle Clone",
        description: "JavaScript",
      },
    ],
  },
};

const App = () => {
  return (
    <Body>
      <Header>
        <Link href="/">
          <Text>{content.header.name}</Text>
        </Link>
        <Text type="secondary">{content.header.title}</Text>
      </Header>

      <Main>
        <Title>{content.main.title}</Title>
        <Text pretty tag="p" type="secondary">
          {content.main.description}
        </Text>

        <Section>
          <Title>{content.projects.title}</Title>
          <Column>
            {content.projects.items.map((project, index) => (
              <Link key={index} button href={project.href}>
                <Text>{project.title}</Text>
                <Text type="secondary">{project.description}</Text>
              </Link>
            ))}
          </Column>
        </Section>
      </Main>
    </Body>
  );
};

export default App;
