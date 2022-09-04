import React from "react";
import NavigationDots from "../Components/NavigationDots";
import SocialMedia from "../Components/SocialMedia";

const date = new Date().getFullYear();

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <p className="p-text">@{date} comendrun</p>
            <SocialMedia />
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
