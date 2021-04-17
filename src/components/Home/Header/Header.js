import React from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <NavigationBar></NavigationBar>
            <HeaderMain></HeaderMain>
            <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Header;