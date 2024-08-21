import './Banner.css'
const Banner = () => {
  return (

    <div className='bg-green-900 max-h-[80hv]'>

<div className='flex justify-center items-center pt-20'><div className='pt-20 md:flex md:justify-center md:gap-60'>

        <div className='text-white text-center md:text-start'>
          <h1 className='text-3xl md:text-7xl font-semibold'>Your Best Medical 
          <br />Help Center
          </h1>
          <p className='text-sm md:text-lg mt-4 mb-6'>
            Lorem Ipsum is simply dummy text they are printing
            <br /> typesetting has been the industry's stardard.
          </p>
          <button className='btn bg-red-300'>All Service</button>
        </div>



        <div className='mt-20 flex justify-center pr-28'>
          <div className=' img-box z-1 mt-8 hover:-translate-y-8 
            hover:z-10
            hover:duration-700'>
            <img className="img-size" src="https://i.ibb.co/cCX5K9g/image.png" alt="" />
          </div>

          <div className='img-box z-2 ml-20 mt-20 hover:-translate-y-8 
            hover:z-10
            hover:duration-700'>
            <img className="img-size" src="https://i.ibb.co/3mnFmmC/image.png" alt="" />
          </div>

          <div className='img-box z-3 ml-72 hover:translate-y-8 
            hover:z-10
            hover:duration-700'>
            <img className="img-size" src="https://i.ibb.co/2q7Vqx2/image.png" alt="" />
          </div></div>

      </div></div>
      





    </div>



  );
};

export default Banner;
