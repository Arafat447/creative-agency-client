import React from 'react';

const Footer = () => {
    return (
        <footer style={{backgroundColor:'#FBD062'}} className="footer" >
            <div className="p-5">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="footer-content container p-5" >
                            <h2 >
                                Let us handle your project
                                , professionally.
                            </h2>
                            <p style={{maxWidth:'400px'}}>
                                With well written codes, we build amazing apps for all platforms, mobile and web apps in general.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="footer-form pt-5">
                            <form>
                                <div className="form-group ">
                                    <textarea type="email" className="form-control p-4" placeholder="write your Email address" />

                                </div>
                                <div className="form-group">
                                    <textarea type="text" className="form-control p-4" placeholder="write  Your Company / your name " />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control p-4" placeholder="Your message" ></textarea>
                                </div>

                                <button type="submit" className="btn-brand">Send</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            <h6 className="m-auto text-center m-5 p-5"  >
                copy  &copy; right orange labs 2020
                </h6>
        </footer>
    );
};

export default Footer;