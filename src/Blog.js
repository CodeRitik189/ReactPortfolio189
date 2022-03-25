import React from "react";
import "./Blog.css";
import Blog1 from './img/backgr01.jpeg';
import Blog2 from './img/backgr01.jpeg';
import Blog3 from './img/backgr01.jpeg';

function Blog() {
  return (
    <div className="blog component__space" id="Blog">
      <div className="heading">
        <h1 className="heading">SKILLS</h1>
        <p className="heading p__color">
          There are many variations of passages of Lorem Ipsum available,
        </p>
        <p className="heading p__color">
          but the majority have suffered alteration.
        </p>
      </div>
      <div className="container">
          <div className="row">
              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Blog1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h5 className="project__text">Languages</h5>
                         <h4 className="project__text">C++,C,Javascript,SQL,HTML5,CSS3</h4>
                         <a href="#" className="blog project__btn btn">Read More</a>
                       </div>
                 </div>
              </div>

              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Blog2} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h5 className="project__text">Development Skills</h5>
                         <h4 className="project__text">MERN(MongoDB Express React Node)</h4>
                         <a href="#" className="blog project__btn btn">Read More</a>
                       </div>
                 </div>
              </div>

              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Blog3} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h5 className="project__text">Developer Tools</h5>
                         <h4 className="project__text">VS Code,Sublime,Code Blocks</h4>
                         <a href="#" className="blog project__btn btn">Read More</a>
                       </div>
                 </div>
              </div>

          </div>
      </div>
      
    </div>
  );
}

export default Blog;
