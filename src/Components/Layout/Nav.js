import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import { Home } from '@material-ui/icons';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
const Nav = () => {
    return (
        <> 
        <div className='container-fluid'>
            <div className='row bg-dark py-1'>
                <div className='col-md-3 text-center'>
                    <Link className="navbar-brand fs-3" to="/" style={{color:"red",fontSize:50}}>Gurung Store </Link>
                </div>
                <div className='col-md-7'>
                    <form className="d-flex">
                        <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>

                <div className='col-md-2 d-flex justify-content-evenly'>
                    <Link to='/signin' className='text-white fs-3 '><i class="bi bi-box-arrow-in-right"></i></Link>
                    <Link to='/signup' className='text-white fs-3 '><i class="bi bi-person-plus"></i></Link>
                    <Link to='/cart' className='text-white fs-3 '><i class="bi bi-cart"></i></Link>
                </div>
            </div>
            </div>

            <nav className="navbar navbar-expand-lg navbar-light custom-background ">
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center w-100">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/"><Home/>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/About">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blogs">Blogs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact"><AddIcCallIcon />Contact</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="#">Action</Link></li>
                                    <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav