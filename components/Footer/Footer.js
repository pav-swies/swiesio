import TwoColumnLayout from '../TwoColumnLayout';
import ContentContainer from '../ContentContainer';
import ExternalLink from '../ExternalLink';
import { TWITTER_LINK, GITHUB_LINK, CODESANDBOX_LINK, LINKEDIN_LINK, EMAIL_LINK } from '../../lib/constants';
import style from './footer.module.css';

const Footer = () => {
  const links = [GITHUB_LINK, CODESANDBOX_LINK, LINKEDIN_LINK, TWITTER_LINK, EMAIL_LINK];
  return (
    <footer>
      <ContentContainer>
        <TwoColumnLayout>
          <div className={style.footerInner}>
            <ul className={style.footerList}>
              {links.map((link, idx) => (
                <li key={idx}>
                  <ExternalLink link={link.url} highlighted>
                    {link.text}
                  </ExternalLink>
                </li>
              ))}
            </ul>
            <div className={style.footerDate}>©{new Date().getFullYear()}</div>
          </div>
        </TwoColumnLayout>
      </ContentContainer>
    </footer>
  );
};

export default Footer;
