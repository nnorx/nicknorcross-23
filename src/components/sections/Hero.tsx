import me from "../../assets/me.webp";
import blackArrow from "../../assets/arrow-black.svg";
import styled from "styled-components";
import {
  Theme,
  getInverseThemeColor,
  getInverseThemeTextColor,
  themeBgColors,
} from "../../utils/Theme";

const Wrapper = styled.div`
  max-width: 120rem;
  width: 100%;
  box-sizing: border-box;

  position: relative;
  top: 0em;
  padding: 0 1rem;
  padding-top: 20em;

  @media (min-width: 480px) {
    padding-top: 38em;
  }

  @media (min-width: 768px) {
    padding-top: 36em;
  }

  @media (min-width: 992px) {
    padding: 0 2rem;
    padding-top: 32em;
  }
`;

const HeroCards = styled.div`
  display: grid;
  position: relative;
  width: 100%;

  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  grid-column-gap: 1.25rem;
  row-gap: 1.25rem;
  grid-auto-columns: 1fr;

  @media (max-width: 767px) {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-ttems: flex-start;
  column-gap: 35em;

  position: relative;
  overflow: hidden;
  font-family: NeueMontreal;
  user-select: none;
  grid-row-gap: 26em;
  padding: 1.5em 2rem 1.5em 1.25em;

  @media (max-width: 767px) {
    height: 25rem;
    grid-column-gap: 0em;
    grid-row-gap: 0em;
    justify-content: space-between;

    #me {
      height: 45em;
      order: -1;
      padding: 0 !important;
      object-fit: none;
    }
  }

  max-height: 96vh;
`;

const PortraitCard = styled(Card)`
  @media (max-width: 767px) {
    order: -1;
    height: 45em;
  }

  @media (max-width: 480px) {
    order: -1;
    height: 24em;
  }
`;

const Description = styled.p`
  font-size: 2.37em;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-top: 0px;
  margin-bottom: 10px;
  color: #253237;
  max-width: 13em;
  text-wrap: balance;

  @media (max-width: 479px) {
    font-size: 1.5em;
    max-width: 100%;
  }
`;

const Portrait = styled.img`
  object-fit: cover;
  object-position: 50% 15%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

type Props = {
  theme: Theme;
};

export default function Hero({ theme }: Props) {
  const handleClickScroll = () => {
    const element = document.getElementById("about-me");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Wrapper>
        <HeroCards>
          <Card style={{ backgroundColor: getInverseThemeColor(theme) }}>
            <Description style={{ color: getInverseThemeTextColor(theme) }}>
              Hi! I'm Nick. I work with modern web technologies to create
              tailor-made experiences.
            </Description>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "0.35rem",
                border: `1px solid ${getInverseThemeTextColor(theme)}`,
                padding: ".5rem .5rem .5rem 1.25rem",
                borderRadius: "100rem",
                textTransform: "uppercase",
                fontSize: ".875rem",
                width: "fit-content",
                transition: "all 0.3s ease-in-out",
                color: themeBgColors[theme],
                backgroundColor: getInverseThemeColor(theme),
              }}
              onClick={handleClickScroll}
            >
              <div>A bit about me</div>
              <img
                alt="down arrow"
                src={blackArrow}
                style={{
                  width: "0.65rem",
                  margin: "0 0.25rem",
                  transform: "rotate(-90deg) scaleX(-1)",
                  filter: theme === Theme.light ? "invert(1)" : undefined,
                  transition: "all 0.3s ease-in-out",
                }}
              />
            </div>
          </Card>

          <PortraitCard>
            <Portrait alt="portrait" src={me} />
          </PortraitCard>
        </HeroCards>
      </Wrapper>
    </>
  );
}
