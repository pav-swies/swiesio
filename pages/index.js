import Seo from '../components/Seo';
import Header from '../components/Header';
import ContrastContainer from '../components/ContrastContainer';
import TwoColumnLayout from '../components/TwoColumnLayout';
import ExternalLink from '../components/ExternalLink';
import Icon from '../components/Icon';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Seo
        description="Hey, I'm Pawel Swies. I'm a web developer interested in UI design and development, UX and design systems."
        keywords="Developer, Web Developer, Pawel Swies, Pav Swies, React"
        featuredImage="./default.png"
      />
      <Header>
        <h1 className="visually-hidden">Pawel Swies — Web Developer</h1>
        <p>Hey, I’m Pawel Swies. I’m a web developer interested in UI design and development, UX and design systems.</p>
        <p>
          I love to work with React, but I’m always dabbling with other tech like Svelte. You can view some of my work on{' '}
          <ExternalLink link="https://codesandbox.io/u/pav-swies" highlighted>
            <Icon icon="codesandbox" hiddenText="CodeSandbox" />
          </ExternalLink>{' '}
          and{' '}
          <ExternalLink link="https://github.com/pav-swies" highlighted>
            <Icon icon="github" hiddenText="GitHub" />
          </ExternalLink>
          .
        </p>
        <p>
          You can reach out to me on{' '}
          <ExternalLink link="https://twitter.com/p_swies" highlighted>
            <Icon icon="twitter" hiddenText="Twitter" />
          </ExternalLink>{' '}
          or{' '}
          <ExternalLink link="https://www.linkedin.com/in/pawel-swies-63608016b/" highlighted>
            <Icon icon="linkedin" hiddenText="LinkedIn" />
          </ExternalLink>
          .
        </p>
      </Header>
      <main>
        <ContrastContainer>
          <TwoColumnLayout title="Experience" sticky>
            <p>
              I specialise in building robust and accessible user interfaces. I’ve been involved in building UI’s for many projects across many industries, including Uber for Business and Santander.
            </p>
          </TwoColumnLayout>
          <TwoColumnLayout title="Huler" subtitle="2021 — Present" sticky>
            <p>I’m currently on Huler’s frontend team, working on bespoke HR systems for clients as well as the company’s own SaaS offering.</p>
            <ul>
              <li>
                <p>
                  Responsible for creating React components used across the <ExternalLink link="https://huler.io/">organisation’s website</ExternalLink> aimed to advertise their SaaS product. The site
                  is built with React/Next.js and TypeScript.
                </p>
              </li>
              <li>
                <p>Built UI in Vue.js for an onboarding section of Santander’s HR software, which is used by thousands of their employee’s every day.</p>
              </li>
            </ul>
          </TwoColumnLayout>
          <TwoColumnLayout title="Don't be Shy" subtitle="2020 — 2021" sticky>
            <p>I joined Don’t be Shy as a Junior Developer just before graduating. I was responsible for working with the Creative & Development teams to bring static designs to life.</p>
            <ul>
              <li>
                <p>
                  Built pages for a <ExternalLink link="https://businesses.uber.com/gift-cards-UK">Uber for Business Gift Cards</ExternalLink> marketing campaign lead by DbS.
                </p>
              </li>
              <li>
                <p>
                  Involved in building{' '}
                  <ExternalLink link="https://resourced.prometheanworld.com/about-technology-education-industry-report-2019/#landing-about">The State of Technology in Education </ExternalLink>{' '}
                  2019/2020 Report, which used data from more than 2,000 educators across the UK.
                </p>
              </li>
              <li>
                <p>
                  Involved in building{' '}
                  <ExternalLink link="https://learning-maturity.crossknowledge.com/checker/index.html?utm_source=blog&utm_medium=refferal&utm_campaign=learning-maturity-review">
                    CrossKnowledge’s
                  </ExternalLink>{' '}
                  digital learning maturity review. I was responsible for building the UI for the questionnaire using JavaScript.
                </p>
              </li>
            </ul>
          </TwoColumnLayout>
          <TwoColumnLayout title="MMU" icon="graduation" subtitle="2017 — 2020" sticky>
            <p>I graduated from Manchester Metropolitan University with a First-Class degree in Digital Media and Communications.</p>
          </TwoColumnLayout>
        </ContrastContainer>
      </main>
      <Footer />
    </>
  );
};

export default Home;
