import style from './content-no-wrap.module.css';

const ContentNoWrap = ({ children }) => {
  return <span className={style.contentNoWrap}>{children}</span>;
};

export default ContentNoWrap;
