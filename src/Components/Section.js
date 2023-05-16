import React from "react";
import { NavLink } from "react-router-dom";
import realestate from "../Components/realestate.png";
import infra from "../Components/Infra.png";
import Transporters from "../Components/Transporters.png";
import Suppliers from "../Components/Suppliers.png";
import Consultants from "../Components/Consultants.png";
import Industry from "../Components/Industry.png";
import Customer from "../Components/SecondPage/Customer.png";
import Calling from "../Components/SecondPage/Calling.png";
import handshack from "../Components/SecondPage/handshack.png";
import Profile from "../Components/SecondPage/Profile.png";
import technology from "../Components/SecondPage/technology.png";
import Search from "../Components/SecondPage/Search.png";
// Customer
import left from "../Components/left.png";
import right from "../Components/right.png";
import marina from "../Components/marina.png";
import girl from "../Components/girl.png";
import boy from "../Components/boy.png";


function Section() {
   return (
        <div>
            <div className="Header">
                <div>
                    <NavLink className="login" to="/Login">LOGIN</NavLink>
                </div>
                <div className="search">
                    <h3>Search Engine Of Construction Industry</h3>
                </div>
                <div className="searchbar">
                    <input type="text" placeholder="Search Anything Anywhere" class="control-from" /></div>
                <div className="group">
                    <p>Search By:</p>
                    <select className="menu">Search By:
                        <option value="Company">Company Name</option>
                        <option value="Prodect">Product/Service Name</option>
                        <option value="All">All Profile</option>
                    </select>
                </div>
                <div className="images">
                    <img src={realestate} alt="" />
                    <img src={infra} alt="" />
                    <img src={Transporters} alt="" />
                    <img src={Suppliers} alt="" />
                    <img src={Consultants} alt="" />
                    <img src={Industry} alt="" />
                </div>


                <div className="second-page">
                    <div className="page1">
                        <h1>Our Key Value</h1>
                    </div>
                    <div className="page2">
                        <div className="one">
                            <img width="45%" src={Customer} alt="" />
                            <h5>Get noticed by right costumers</h5>
                            <p>Lorem ipsum dolor sit amet<br />consectetur, adipisicing elit.<br /> Minima inventore excepturi nulla<br /> at fugiat accusamus magni.</p>
                        </div>

                        <div className="one">
                            <img width="45%" src={Calling} alt="" />
                            <h5>Get noticed by right costumers</h5>
                            <p>Lorem ipsum dolor sit amet<br />consectetur, adipisicing elit.<br /> Minima inventore excepturi nulla<br /> at fugiat accusamus magni.</p>
                        </div>
                        <div className="one">
                            <img width="45%" src={handshack} alt="" />
                            <h5>Increase chance of deal closure</h5>
                            <p>Lorem ipsum dolor sit amet<br />consectetur, adipisicing elit.<br /> Minima inventore excepturi nulla<br /> at fugiat accusamus magni.</p>
                        </div>
                    </div>

                    <div className="third-page">
                        <div className="two">
                            <img width="45%" src={Profile} alt="" />
                            <h5>Profile visitor analytics</h5>
                            <p>Lorem ipsum dolor sit amet<br />consectetur, adipisicing elit.<br /> Minima inventore excepturi nulla<br /> at fugiat accusamus magni.</p>
                        </div>

                        <div className="two">
                            <img width="45%" src={technology} alt="" />
                            <h5>Technology trand of industry</h5>
                            <p>Lorem ipsum dolor sit amet<br />consectetur, adipisicing elit.<br /> Minima inventore excepturi nulla<br /> at fugiat accusamus magni.</p>
                        </div>

                        <div className="two">
                            <img width="45%" src={Search} alt="" />
                            <h5>Search analytics</h5>
                            <p>Lorem ipsum dolor sit amet<br />consectetur, adipisicing elit.<br /> Minima inventore excepturi nulla<br /> at fugiat accusamus magni.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Customer page */}

            <div className="carousel">
                <div className="customer">
                    <h1>Customer Feedback</h1>
                </div>

                <div className="left">
                    <img width="50px" src={left} alt="" />

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
                    <div className="right">
                        <img width="50px" src={right} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Section