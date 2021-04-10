import React, { useState } from 'react';
import { Field, ErrorMessage } from 'formik';
import clsx from 'clsx';

export interface DropdownProps {
  // the data to be displayed
  data: any[];

  // which columns to use
}

const Dropdown: React.FC<DropdownProps> = ({ data }: DropdownProps) => {
  const [] = useState(0);

  return (
    <div className="dropdown">
      <div className="dropdown-trigger">
        <button
          className="button"
          onClick={() => console.log('yeet')}
          aria-haspopup="true"
          aria-controls="dropdown-menu3"
        >
          <span>Select a Partner</span>
          <span className="icon is-small">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu3" role="menu">
        <div className="dropdown-content">
          <a href="#" className="dropdown-item-is-active">
            Current
          </a>
          <a href="#" className="dropdown-item">
            Modifiers
          </a>
          <a href="#" className="dropdown-item">
            Grid
          </a>
          <a href="#" className="dropdown-item">
            Form
          </a>
          <a href="#" className="dropdown-item">
            Elements
          </a>
          <a href="#" className="dropdown-item">
            Components
          </a>
          <a href="#" className="dropdown-item">
            Layout
          </a>
          <a href="#" className="dropdown-item">
            More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
