import React from 'react';
import '../App.css'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-white px-5 shadow">
            <div class="container-fluid">
                <a class="navbar-brand text-primary fs-1 fw-bold" href="#">Yamak.ai</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav  ms-auto mb-2 mb-lg-0">
                        <li class="nav-item" >
                            <a class="nav-link active
                            " aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="#">Marketing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Social Media</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Sales Copy</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Blogs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Others</a>
                        </li>
                        <li class="nav-item position-relative">
                            <a class="nav-link" href="#"><i class="fa-solid fa-arrows-rotate">

                            </i></a>
                            <span className='position-absolute top-0 end-0 bg-primary rounded-circle' style={{ width: '20px', height: '20px', fontSize: '12px', paddingLeft: '3px' }}>50</span>
                        </li>
                        <li id="user" class="nav-item">
                            <a class="nav-link text-primary" href="#" ><i class="fa-solid fa-circle-user fs-2 "></i></a>
                            <ul id='user-menu' className='d-none'>
                                <li className='nav-link'>Profile</li>
                                <li className='nav-link'>Projects</li>
                                <li className='nav-link'>Settings</li>
                                <li className='nav-link'>Sign Out</li>
                            </ul>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;