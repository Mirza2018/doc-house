import { Tabs } from 'flowbite-react';
import React from 'react';

const Tab = ({ img }) => {
    return (

        <div  className=" text-gray-500 dark:text-gray-400 flex flex-col items-center p-8 md:items-start md:p-0 md:pt-5">
            <img src={img} alt="" />
            <h1 className='text-4xl text font-bold'>Electro  Gastrology Therapy</h1>
            <p className='my-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto corrupti eaque fugit accusantium. Officia, iste corporis cum laboriosam veniam facilis placeat atque nobis mollitia rerum laudantium alias, nulla illo assumenda ex, delectus incidunt esse neque harum nisi? Corrupti itaque aspernatur, deleniti perferendis illo cum ut, laboriosam reiciendis architecto quaerat dolores.</p>
            <button className='btn btn-outline border-2 text-red-300 border-red-300'> More Details</button>
        </div>

    );
};

export default Tab;