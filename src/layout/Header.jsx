import React from "react";

const Header = ({children}) => {
    return (
        <section className='header'>
            <div className="banner"/>
            {children}
        </section>
    )
}

export default Header
