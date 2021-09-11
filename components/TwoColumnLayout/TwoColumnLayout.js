import style from './two-column-layout.module.css';
import Icon from '../Icon';

const TwoColumnLayout = ({ title, subtitle, icon, component, sticky, children }) => {
  return (
    <div className={style.twoColumnLayout}>
      <div className={sticky ? style.TwoColumnLayoutSticky : null}>
        <div>
          {title && (
            <h2 className={style.TwoColumnLayoutTitle}>
              {title} {icon && <Icon icon={icon} />}
            </h2>
          )}
          {subtitle && <p className={style.TwoColumnLayoutSubtitle}>{subtitle}</p>}
          {component && component}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default TwoColumnLayout;
