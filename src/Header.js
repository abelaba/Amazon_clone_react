import React from 'react'

import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import { ShoppingBasket } from '@material-ui/icons';

function Header() {
    return (
        <div className="header">
            <img className="header__navIcon" alt='amazon' src='data:image/png;base64,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'></img>
            
            <div className="header__search">  
                <input className="header__searchInput"></input>
                <SearchIcon className="header__searchIcon"></SearchIcon>
            </div>

            <div className="header__nav">
                <div className="header__option"> 
                    <span className="header__optionLineOne">Hello Guest</span>
                    <span className="header__optionLineTwo">Sign In</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>

                <div className="header__optionBasket">
                    <ShoppingBasket/>
                    <span className="header__optionLineTwo header__basketCount">0</span>
                </div> 
            </div>
            
        </div>
        
        
    )
}

export default Header
