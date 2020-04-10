import React from 'react';
import './styles.scss';

const Switch = ({ onChange, checked, className }) => {
  return (
    <label className={`Switch ${className}`} htmlFor="checkbox">
      <input
        onChange={onChange}
        checked={checked}
        type="checkbox"
        id="checkbox"
      />
      <div className="Switch__Slider Switch__Slider--round"></div>
    </label>
  );
};

export default Switch;
