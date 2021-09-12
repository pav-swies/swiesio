import style from './two-column-layout.module.css';
import Icon from '../Icon';

const TwoColumnLayout = ({ sectionTitle, title, subtitle, icon, component, sticky, children }) => {
  return (
    <div className={style.twoColumnLayout}>
      <div className={sticky ? style.TwoColumnLayoutSticky : null}>
        <div>
          {sectionTitle && title ? (
            <h2 className={style.TwoColumnLayoutTitle}>
              {title} {icon && <Icon icon={icon} />}
            </h2>
          ) : (
            title && (
              <h3 className={style.TwoColumnLayoutTitle}>
                {title} {icon && <Icon icon={icon} />}
              </h3>
            )
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
