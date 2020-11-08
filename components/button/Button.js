import React from 'react';
import styles from './Button.module.css';

const Button = ({ isSelected, handleClick, label }) => {
  return (
    <>
      <button
        className={isSelected ? styles.darkButton : styles.buttonStyle}
        onClick={handleClick}
      >
        {label}
      </button>
    </>
  );
};

export default Button;
