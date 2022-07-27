import React from 'react';

const WorkDashboard = () => {
    return (
        <section className='p-5 bg-light work-dashboard-section' style={{ height: '100%' }}>
            <div className='row justify-content-between position-relative'>
                <div className='col-lg-8'>
                    <h1 className=' fs-3 text-capitalize'>home/writing assistant</h1>
                    <div className='mt-5'>
                        <h6 >Enter input to get <span className='text-primary'>Writing Assistant</span></h6>
                        <div className='my-4 '>
                            <label htmlFor="" className='ps-5 pe-2'>Words Count:</label>
                            <select name="" id="" className='p-2 border-primary' >
                                <option value="">0</option>
                            </select>
                            <label htmlFor="" className='ps-5 pe-2'>Promt:</label>
                            <select name="" id="" className='p-2 border-primary'>
                                <option value="">Select</option>
                            </select>
                            <label htmlFor="" className='ps-5 pe-2'>Creativity:</label>
                            <select name="" id="" className='p-2 border-primary'>
                                <option value="">Select</option>
                            </select>
                        </div>
                        <p className='text-end'><span className='pe-4'>word: 00</span> <span>|character: 0/250</span></p>
                        <div className='shadow bg-white py-2 px-5 rounded'>

                            <div className='d-flex justify-content-between'>
                                <div>
                                    <button className='border-0 bg-white shadow fw-bold'>B</button>
                                    <button className='border-0 bg-white shadow fw-bold px-2 ms-3'>I</button>
                                </div>
                                <span>hyperlink</span>
                                <span>text cut</span>
                                <span>underline</span>
                                <span>underline</span>
                            </div>
                            <hr />
                            <textarea style={{ resize: 'none' }} name="" id="" className='w-100 py-2 px-4 border-0' cols="30" rows="20"></textarea>
                        </div>

                    </div>
                </div>
                <div className='col-lg-4 mt-4' id='work-dashboard-right'>
                    <button className='btn btn-primary px-5 rounded-0'>save</button>
                    <button className=' btn btn-primary px-5 ms-3 rounded-0 filter-btn'>filter</button>
                    <div className='mt-5'>
                        <button className='btn btn-primary px-5 rounded-0 w-100'>Write for me</button>
                        <span className='text-end d-block text-danger my-4'>Clear</span>
                        <div style={{ width: '400px' }}>
                            <div className='d-flex shadow p-2 align-items-center'>
                                <span className='text-primary'>
                                    copy
                                </span>

                                <p className='ms-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, quia! Laborum minima quas qui sequi earum, unde veritatis a aperiam.</p>

                            </div>
                            <div className='d-flex shadow p-2 align-items-center'>
                                <span className='text-primary'>
                                    copy
                                </span>
                                <p className='ms-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, quia! Laborum minima quas qui sequi earum, unde veritatis a aperiam.</p>

                            </div>
                            <div className='d-flex shadow p-2 align-items-center'>
                                <span className='text-primary'>
                                    copy
                                </span>
                                <p className='ms-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, quia! Laborum minima quas qui sequi earum, unde veritatis a aperiam.</p>

                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default WorkDashboard;