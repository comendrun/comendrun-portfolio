import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "work", "skills", "about", "contact"].map((item, index) => {
        return (
          <a
            href={`#${item}`}
            key={item + index}
            title={item}
            className="app__navigation-dot"
            style={active === item ? { backgroundColor: "#313BAC" } : {}}
          />
        );
      })}
    </div>
  );
};

export default NavigationDots;
