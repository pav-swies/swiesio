import TwoColumnLayout from '../TwoColumnLayout';
import ContentContainer from '../ContentContainer';
import ExternalLink from '../ExternalLink';
import style from './footer.module.css';

const Footer = () => {
  return (
    <footer>
      <ContentContainer>
        <TwoColumnLayout>
          <div className={style.footerInner}>
            <ul className={style.footerList}>
              <li>
                <ExternalLink link="https://github.com/pav-swies" highlighted>
                  GitHub
                </ExternalLink>
              </li>
              <li>
                <ExternalLink link="https://codesandbox.io/u/pav-swies" highlighted>
                  CodeSandbox
                </ExternalLink>
              </li>
              <li>
                <ExternalLink link="https://www.linkedin.com/in/pawel-swies-63608016b/" highlighted>
                  LinkedIn
                </ExternalLink>
              </li>
              <li>
                <ExternalLink link="https://twitter.com/p_swies" highlighted>
                  Twitter
                </ExternalLink>
              </li>
              <li>
                <ExternalLink link="mailto:pav.swies@gmail.com" highlighted>
                  Mail
                </ExternalLink>
              </li>
            </ul>
            <div className={style.footerDate}>©{new Date().getFullYear()}</div>
          </div>
        </TwoColumnLayout>
      </ContentContainer>
    </footer>
  );
};

export default Footer;
