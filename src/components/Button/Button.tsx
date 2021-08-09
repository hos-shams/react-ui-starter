import React from 'react';
import classes from './Button.module.scss';

export const Button: React.FC = ({ children }) => (
  <button type="button" className={classes.btn}>
    {children}
  </button>
);
