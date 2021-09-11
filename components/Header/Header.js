import ContentContainer from '../ContentContainer';
import TwoColumnLayout from '../TwoColumnLayout';
import Logo from '../Logo';
import style from './header.module.css';

const Header = ({ children }) => {
  return (
    <header className={style.header}>
      <ContentContainer>
        <TwoColumnLayout component={<Logo />}>{children}</TwoColumnLayout>
      </ContentContainer>
    </header>
  );
};

export default Header;
