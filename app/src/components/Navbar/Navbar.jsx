import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from './../Contexts/AuthContext';

export const Navbar = () => {
    
    let cartList = [1]
    let{logged,setLogged}=useContext(AuthContext);
    
    return (
        <>

            <nav className="navbar navbar-expand-lg bg-light shadow p-3 sticky-md-top bg-white">
                <div className="container">
                    <Link className="navbar-brand fs-4 fw-bold" to="/"><h1><span className="fs-1 fw-bold ">P</span>remium</h1></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {logged ? <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="contact">Contact</Link>
                            </li>

                        </ul> : ''}

                        <div className="buttons ms-auto">
                            {!logged ? <><Link to='/login' className='btn fs-5 glow ms-2'> <i className="fa fa-sign-in " aria-hidden="true"></i> </Link>
                                <Link to='/register' className='btn fs-5 glow ms-2'> <i className="fa fa-user-plus" aria-hidden="true"></i> </Link></> : <div className='m-auto'><Link to='/cart' className='btn fs-5 glow ms-2'> <i className="fa fa-shopping-cart" aria-hidden="true"></i> ({cartList.length})</Link>
                                <Link to='/login' onClick={() => { setLogged(false); localStorage.clear() }} className='btn fs-5 glow ms-2  '> <i className="fa fa-sign-out" aria-hidden="true"></i> </Link>
                            </div>
                            }

                        </div>

                    </div>
                </div>
            </nav>

        </>
    )
}
