import TwoColumnLayout from '../TwoColumnLayout';
import ContentContainer from '../ContentContainer';
import ExternalLink from '../ExternalLink';
import style from './footer.module.css';

const Footer = () => {
  const links = [
    {
      text: 'GitHub',
      url: 'https://github.com/pav-swies',
    },
    {
      text: 'CodeSandbox',
      url: 'https://codesandbox.io/u/pav-swies',
    },
    {
      text: 'LinkedIn',
      url: 'https://www.linkedin.com/in/pawel-swies-63608016b/',
    },
    {
      text: 'Twitter',
      url: 'https://twitter.com/p_swies',
    },
    {
      text: 'Mail',
      url: 'mailto:pav.swies@gmail.com',
    },
  ];
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
