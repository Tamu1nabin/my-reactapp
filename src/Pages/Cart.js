import React from 'react'
import Nav from '../Components/Layout/Nav'
import Footer from '../Footer'
const Cart = () => {
    return (
        <>
            <Nav />

            <h2 className='text-center mt-3'>Cart Items</h2>

            <table className='table w-75 mx-auto table-hover table-striped text-center'>
                <thead>
                    <tr>
                        <th>S.N</th>
                        <th>Product Image</th>
                        <th>Product Details</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td><img src='./product_img/iphone 12 pro max.jpg' alt="image of a phone" style={{"height":"150px"}}/></td>
                        <td>
                            <h3>Iphone Mobile</h3>
                            <h4>Rs. 150000</h4>
                            <h5>5" display, octa core processor, 8gb ram, 228bg storage</h5>
                        </td>
                        <td>
                            <button className='btn btn-warning me-2'>Update</button>
                            <button className='btn btn-danger'>Remove</button>
                        </td>

                    </tr>
                    <tr>
                        <td>1</td>
                        <td><img src='./product_img/iphone 12 pro max.jpg' alt="image of a phone" style={{"height":"150px"}}/></td>
                        <td>
                            <h3>Iphone Mobile</h3>
                            <h4>Rs. 150000</h4>
                            <h5>5" display, octa core processor, 8gb ram, 228bg storage</h5>
                        </td>
                        <td>
                            <button className='btn btn-warning me-2'>Update</button>
                            <button className='btn btn-danger'>Remove</button>
                        </td>

                    </tr>
                    
                </tbody>
                
                
            </table>
            <Footer />
        </>
    )
}

export default Cart