import React from 'react';
import Doctor from '../../../components/Doctor';

const Doctors = () => {
    return (
        <div className='mt-20'>
           

            <div className='text-center'>
            <h1 className='font-bold text-4xl'>Our Expert Doctors</h1>
            <p className=' mb-16 mt-5'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        </div>
        <Doctor></Doctor>
        </div>
    );
};

export default Doctors;