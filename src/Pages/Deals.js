import React from 'react'
import Nav from '../Components/Layout/Nav'
import Product from './Product'

const Deals = () => {
    return (
        <>
            <Nav />
            <h3>
                Deals pages
            </h3>
            
                <div className='row m-0'>
                    <div className='col-md-3 p-3'>
                        <h4>Categories</h4>
        
                        <div class="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlfor="flexCheckDefault">
                                Laptop and Computer
                            </label>
                        </div>
                        <div class="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlfor="flexCheckDefault">
                                Mobiles and Smartphone
                            </label>
                        </div>
                        <div class="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlfor="flexCheckDefault">
                                Home Appliances
                            </label>
                        </div>
                        <div class="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlfor="flexCheckDefault">
                                Beauty and Fitness
                            </label>
                        </div>
                        <div class="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlfor="flexCheckDefault">
                                Accessories
                            </label>
                        </div>
                    </div>
                
                <div className='col-md-9'>
                    <Product />
                </div>
            </div>
            
        </>
    )
}

export default Deals