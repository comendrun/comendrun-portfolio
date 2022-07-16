export default function Project({ name, icons, live, about }) {
  const image = () => {
    try {
      return require(`../Assets/Project Images/${name}-mobile.png`);
    } catch (err) {
      console.log(err);
      return "no image found";
    }
  };
  return (
    <div className="portfolio__item">
      <a rel="noreferrer" target="_blank" href={live} className="">
        <img src={image()} alt="" className="portfolio__img" />
        <h3>{name}</h3>
      </a>
      <div className="about-project">
        <p>{about}</p>
      </div>
      <div className="used-tech">
        <p>Used Technologies:</p>
        <div className="icons-container">{icons}</div>
      </div>
    </div>
  );
}

// .sort((a, b) => { return (a.date > b.date) ? 1 : -1 })

// icons:
// js: <i className='fa-brands fa-js'></i>
// css: <i className='fa-brands fa-css3-alt'></i>
// html: <i className='fa-brands fa-html5'></i>
// reactjs: <i className='fa-brands fa-react'></i>
// sass: <i className='fa-brands fa-sass'></i>
// laptop-mobile icon: <i className='fa-solid fa-laptop-mobile'></i>
// laptop-mobile icon:
// github code branch: <i className='fa-solid fa-code-branch'></i>

// - [Font Awesome](https://fontawesome.com)
// - [IcoMoon](https://icomoon.io)
// - [Ionicons](https://ionicons.com)
