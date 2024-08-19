import {  FaRegClock,FaPhone,FaLocationArrow } from 'react-icons/fa';

const Contact = ({ bkg, num,name,text }) => {

    return (
        <div className={`p-10 ${bkg} md:h-[250px] h-[250px] mx-10 rounded-xl m-4 text-white grid grid-cols-4`}>
            <div className='col-span-1 text-4xl md:text-5xl'>
                {num === 1 && <FaRegClock />}
                {num === 2 && <FaLocationArrow />}
                {num === 3 && <FaPhone />}
            </div>
            <div className='col-span-3'>
                <h1 className='md:text-2xl text-xl  font-bold'>{name}</h1>
                <p className='text-xl my-10'>
                   {text}
                </p></div>

        </div>
    );
};

export default Contact;