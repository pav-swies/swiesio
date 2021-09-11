import style from './external-links.module.css';

const ExternalLink = ({ link, children, highlighted }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className={highlighted ? style.externalLinkHighlighted : null}>
      {children}
    </a>
  );
};

export default ExternalLink;
