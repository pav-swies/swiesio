import style from './content-container.module.css';

const ContentContainer = ({ children }) => <div className={style.contentContainer}>{children}</div>;

export default ContentContainer;
