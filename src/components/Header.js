import React from 'react';
import pp from '../assets/logo.jpg';

export const Header = () => {
  return (
    <header>
        <img className="img" src={pp} alt="" />
        <a href="/">Home</a>
    </header>
  )
}
