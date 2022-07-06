import styled from "styled-components";
import { Container, Title, sectionPadding } from "../../../styles/globlaStyles";

export const Section = styled.div`
  background-color: ${(props) => props.theme.colors.gray100};
`;

export const ContainerSection = styled(Container)`
  ${sectionPadding};
  display: grid;
  grid-template-columns: minmax(250px, 1fr) repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;

  @media screen and (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

export const Headlines = styled.div`
  grid-row: 1/5;

  p.headline {
    color: ${(props) => props.theme.colors.primary};
    font-size: 1.1rem;
    span {
      color: ${(props) => props.theme.colors.secondary};
    }
  }

  @media screen and (max-width: 650px) {
    margin-bottom: 2rem;
  }
`;
export const Logo = styled.div`
  margin-bottom: 1.4rem;
  p {
    font-size: 1.5rem;
    font-weight: 900;
    line-height: 100%;
    color: ${(props) => props.theme.colors.primary};
    text-transform: uppercase;

    &:nth-child(2) {
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`;

export const FooterSection = styled.div`
  a {
    display: block;
    font-size: 0.9rem;
    margin-bottom: 10px;
    color: ${(props) => props.theme.colors.primary};

    &:hover {
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`;

export const SectionTitle = styled(Title)`
  p {
    font-size: 1.3rem;
  }
`;
