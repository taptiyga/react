import cls from './Button.module.css';

const isPrimary= true;

export const Button = () => {

  return (
    // <button className={isPrimary ? cls.primary : cls.btn}>Button</button>
    <button className={`${cls.btn} ${isPrimary ? cls.primary : ""}`}>Button</button>
  );
};
