import style from './contrast-container.module.css';

const ContrastContainer = ({ children }) => {
  return (
    <div className={style.contrastContainer}>
      <div className={style.contrastContainerInner}>{children}</div>
    </div>
  );
};

export default ContrastContainer;
