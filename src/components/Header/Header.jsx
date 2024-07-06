import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { assets } from '../../assets/assets';
const Header = () => {
    return (
        <div className='header'>
            <div className="row slider">
                
                <div className="col-sm-12">
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 3"></button>
                        </div>
                        
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className='slide'>
                                    <img src={assets.slider2} className="d-block w-100" style={{ maxHeight: '400px'}} alt="..." />
                                    <div className="d-block w-100"style={{maxWidth: '300px'}}>
                                        <h5>Western Wear</h5>
                                        <p>Buy One Get One Free!!</p>
                                        <br></br>
                            
                                    <hr style={{ width: '50%', textAlign: 'left' ,marginLeft: 0 }} />
                                    <button >+Explore</button>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                            <div className='slide'>
                                <img src={assets.slider3} className="d-block w-100" style={{ maxHeight: '400px' }} alt="..." />
                                <div className="d-block w-100"style={{maxWidth: '300px'}}>
                                    <h5>Foot Wear</h5>
                                    <p>Min. 50% To 70% off</p>
                                    <br></br>
                            
                                    <hr style={{ width: '50%', textAlign: 'left' ,marginLeft: 0 }} />
                                    <button >+Explore</button>
                                </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                            <div className='slide'>
                                <img src={assets.slider4} className="d-block w-100" style={{ maxHeight: '400px' }} alt="..." />
                                <div className="d-block w-100"style={{maxWidth: '300px'}}>
                                    <h5>Us Pollo. Assn.</h5>
                                    <p>Up To 50% Off.</p>
                                    <br></br>
                            
                                    <hr style={{ width: '50%', textAlign: 'left' ,marginLeft: 0 }} />
                                    <button >+Explore</button>
                                </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                            <div className='slide'>
                                <img src={assets.slider1} className="d-block w-100" style={{ maxHeight: '400px' }} alt="..." />
                                <div className="d-block w-100"style={{maxWidth: '300px'}}>
                                    <h5>Fashion Sale</h5>
                                    <p>Up To 50% Off</p>
                                    <br></br>
                            
                                    <hr style={{ width: '50%', textAlign: 'left' ,marginLeft: 0 }} />
                                    <button>+Explore</button>
                                </div>
                                
                                
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;