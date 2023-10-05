import {  FaRegClock,FaPhone,FaLocationArrow } from 'react-icons/fa';

const Contact = ({ bkg, num,name,text }) => {

    return (
        <div className={`p-20 ${bkg}  rounded-xl m-4 text-white grid grid-cols-4`}>
            <div className='col-span-1 text-5xl'>
                {num === 1 && <FaRegClock />}
                {num === 2 && <FaLocationArrow />}
                {num === 3 && <FaPhone />}
            </div>
            <div className='col-span-3'>
                <h1 className='text-2xl font-bold'>{name}</h1>
                <p className='text-xl my-10'>
                   {text}
                </p></div>

        </div>
    );
};

export default Contact;