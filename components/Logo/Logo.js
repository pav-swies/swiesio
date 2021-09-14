import style from './logo.module.css';

const Logo = () => {
  const randomColor = () => {
    const colors = ['gold', 'tomato', 'skyblue', 'darkorange', 'lightgreen', 'greenyellow'];
    const root = document.documentElement;
    const currentColor = getComputedStyle(root).getPropertyValue('--color-accent');
    const newColor = colors[Math.floor(Math.random() * colors.length)];

    if (newColor === currentColor) {
      return randomColor();
    }

    root.style.setProperty('--color-accent', newColor);
  };
  return (
    <div className={style.logo} aria-hidden="true" onClick={() => randomColor()}>
      PS
    </div>
  );
};

export default Logo;
