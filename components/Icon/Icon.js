import style from './icon.module.css';
import LinkedIn from './icons/LinkedIn';
import GitHub from './icons/GitHub';
import CodeSandbox from './icons/CodeSandbox';
import Twitter from './icons/Twitter';
import GraduationCap from './icons/GraduationCap';

const Icon = ({ icon, hiddenText }) => {
  const getIcon = (i) => {
    switch (i) {
      case 'linkedin':
        return <LinkedIn />;
      case 'github':
        return <GitHub />;
      case 'codesandbox':
        return <CodeSandbox />;
      case 'twitter':
        return <Twitter />;
      case 'graduation':
        return <GraduationCap />;
      default:
        return null;
    }
  };

  return (
    <>
      {hiddenText && <span className="visually-hidden">{hiddenText}</span>}
      <i className={style.icon} aria-hidden="true">
        {getIcon(icon)}
      </i>
    </>
  );
};

export default Icon;
