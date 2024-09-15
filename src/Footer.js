import React from 'react'
import {Link} from'react-router-dom'

function Footer() {
  return (
    
    <div className="">
        <div className="containerfooter">
            <div className="top">
                <div className="row  ">
                    <div className="col-md-4">
                        <h5>About</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua. Ut enim ad minim veniam</p>

                        <div>
                            <b>Email</b>
                            <Link to="mailto:ogunsoludamilola093@gmail.com">ogunsoludamilola093@gmail.com</Link>
                        </div>

                        <div>
                            <b>Phone</b>
                            <Link to="tel:07065822935">07065822935</Link>
                        </div>
                    </div>    
                

                    <div className="col-md-2">
                        <h5>Quick Link</h5>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Blog</li>
                            <li>Archived</li>
                            <li>Author</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    

                    <div className="col-md-2">
                        <h5>Category</h5>
                        <ul>
                            <li>Lifestyle</li>
                            <li>Technology</li>
                            <li>Travel</li>
                            <li>Business</li>
                            <li>Economy</li>
                            <li>Sports</li>
                        </ul>
                    </div>
                    

                    <div className="col-md-4">
                        <form control action="">
                            <h5>Weekly Newsletter</h5>
                            <p>Get blog articles and offers via email</p>
                            <span>
                                <input type="alphanumeric"placeholder="Your Email" /><br />
                                <button type="submit">Subscribe</button>
                            </span>
                        </form>
                    </div>
                    

                </div>
            </div>

            <hr />
           
            <div className="bottom d-flex justify-content-between align-content-center">
                <div>
                    <img src={require("./Images/Logo.png")} alt="" />
                    <p className='ml-5'>© JS Template 2023. All Rights Reserved.</p>
                </div>
                
                <div>
                    <Link>Term of Use</Link>
                    <Link className='mx-2'>Privacy Policy</Link>
                    <Link>Cookie</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer