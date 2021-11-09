import React, { useEffect } from 'react';
import Navigation from '../Navigation';

function Header (props){
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
      } = props;
    return (
        <Navigation
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        ></Navigation>
    )
}

export default Header;