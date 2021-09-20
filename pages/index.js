import Seo from '../components/Seo';
import Header from '../components/Header';
import ContrastContainer from '../components/ContrastContainer';
import TwoColumnLayout from '../components/TwoColumnLayout';
import ExternalLink from '../components/ExternalLink';
import ContentNoWrap from '../components/ContentNoWrap';
import Icon from '../components/Icon';
import Footer from '../components/Footer';
import { SITE_META_DESCRIPTION, TWITTER_LINK, GITHUB_LINK, CODESANDBOX_LINK, LINKEDIN_LINK } from '../lib/constants';

const Home = () => {
  return (
    <>
      <Seo />
      <Header>
        <h1 className="visually-hidden">Pawel Swies — Web Developer</h1>
        <p>{SITE_META_DESCRIPTION}</p>
        <p>
          I love to work with React, but I’m always dabbling with other tech like Svelte, Vue and anything on the jamstack. You can view some of my work on{' '}
          <ExternalLink link={CODESANDBOX_LINK.url} highlighted>
            <Icon icon="codesandbox" hiddenText={CODESANDBOX_LINK.text} />
          </ExternalLink>{' '}
          and{' '}
          <ContentNoWrap>
            <ExternalLink link={GITHUB_LINK.url} highlighted>
              <Icon icon="github" hiddenText={GITHUB_LINK.text} />
            </ExternalLink>
            .
          </ContentNoWrap>
        </p>
        <p>
          You can reach out to me on{' '}
          <ExternalLink link={TWITTER_LINK.url} highlighted>
            <Icon icon="twitter" hiddenText={TWITTER_LINK.text} />
          </ExternalLink>{' '}
          or{' '}
          <ContentNoWrap>
            <ExternalLink link={LINKEDIN_LINK.url} highlighted>
              <Icon icon="linkedin" hiddenText={LINKEDIN_LINK.text} />
            </ExternalLink>
            .
          </ContentNoWrap>
        </p>
      </Header>
      <main>
        <ContrastContainer>
          <TwoColumnLayout title="Experience" sectionTitle sticky>
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
                  is built with Next.js and Styled Components.
                </p>
              </li>
              <li>
                <p>Built UI in Vue.js for an onboarding section of Santander’s HR software, which is used by hundreds of their employee’s every day.</p>
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
