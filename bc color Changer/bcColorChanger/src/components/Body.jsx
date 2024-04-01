import React, { useState } from 'react'



const Body = () => {
    const [backgroundColor, setBackgroundColor] = useState('gray'); // State to hold background color

    const handleBoxClick = (color) => {
        switch (color) {
            case '#FF8E8F':
                setBackgroundColor('#FF8E8F');
                break;
            case '#49243E':
                setBackgroundColor('#49243E');
                break;
            case '#FFAF45':
                setBackgroundColor('#FFAF45');
                break;
            case '#824D74':
                setBackgroundColor('#824D74');
                break;
            default:
                setBackgroundColor('#007F73');
                break;
        }
    };

    return (
        <div className='body w-full h-full relative' style={{ backgroundColor }}>
            <div className='absolute top-10 left-1/2 -translate-x-1/2 text-5xl font-extrabold'>
                <h1 className='text-[#3f3221]'> BackGround Color Changer</h1>
                <div className='box container flex gap-10 my-10 bg-[#222831] rounded-md p-2'>
                    <div
                        className='box w-[10vw] h-[10vw] bg-[#FF8E8F] rounded-full'
                        id='box-1'
                        onClick={() => handleBoxClick('#FF8E8F')} // Handle box click
                    ></div>
                    <div
                        className='box w-[10vw] h-[10vw] bg-[#49243E] rounded-full'
                        id='box-2'
                        onClick={() => handleBoxClick('#49243E')} // Handle box click
                    ></div>
                    <div
                        className='box w-[10vw] h-[10vw] bg-[#FFAF45] rounded-full'
                        id='box-3'
                        onClick={() => handleBoxClick('#FFAF45')} // Handle box click
                    ></div>
                    <div
                        className='box w-[10vw] h-[10vw] bg-[#824D74] rounded-full'
                        id='box-4'
                        onClick={() => handleBoxClick('#824D74')} // Handle box click
                    ></div>
                    <div
                        className='box w-[10vw] h-[10vw] bg-[#007F73] rounded-full'
                        id='box-5'
                        onClick={() => handleBoxClick('#007F73')} // Handle box click
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Body;
