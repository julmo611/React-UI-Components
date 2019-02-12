import React from 'react';
import './Header.css';


const HeaderTitle = () => {
    return (
       <div className="header-content">
           <p><strong>Lambda School</strong> <a href="https://twitter.com/lambdaschool" target="_blank">@LambdaSchool 26 jan</a></p>
           <p>Let's learn React by bulding simple interdaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!</p>
       </div>
    );
};

export default HeaderTitle;