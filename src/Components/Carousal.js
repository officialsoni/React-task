import React,{useState} from "react";
import left from "../Components/left.png";
import right from "../Components/right.png";
import marina from "../Components/marina.png";
import girl from "../Components/girl.png";
import boy from "../Components/boy.png";


const Carousal = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const handleNext = () => {
        setCurrentSlide((prevSlide) => prevSlide + 1);
      };

      const handlePrev = () => {
        setCurrentSlide((prevSlide) => prevSlide - 1);
      };
    return (
        <div className="carousal">
            <div className="customer">
                <h1>Customer Feedback</h1>
            </div>
            <button className="box" onClick={handlePrev}
            >
                <img width="50px" src={left} alt="" />
            </button>
               
            <div className="slide-container">
               <div className="slide" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                <div className="box1">
                    <img width="50px" src={marina} alt="" />
                    <h2>"Amazing product and company "</h2>
                    <p>Lorem ipsum dolor, sit amet <br />consectetur adipisicing elit.<br /> At laboriosam laborum dolor <br />ipsum alias consequuntur <br />ex consequatur, sint odit quos <br /> assumenda Consectetur ad sit <br />debitis unde....</p>
                </div>
                <div className="box2">
                    <img width="50px" src={girl} alt="" />

                    <h2>"Amazing product and company "</h2>
                    <p>Lorem ipsum dolor, sit amet <br />consectetur adipisicing elit.<br /> At laboriosam laborum dolor <br />ipsum alias consequuntur accusamus ex <br />consequatur, sint odit quos assumenda...</p>

                </div>
                <div className="box3">
                    <img width="45px" src={boy} alt="" />

                    <h2>"Amazing product and company "</h2>
                    <p>Lorem ipsum dolor, sit amet <br />consectetur adipisicing elit.<br /> At laboriosam laborum dolor <br />ipsum alias consequuntur accusamus ex <br />consequatur, sint odit quos assumenda...</p>
                </div>
            </div>
            </div>
            <button className="right" onClick={handleNext}>
                <img width="50px" src={right} alt="" />
            </button>
        </div>
    )
}
export default Carousal