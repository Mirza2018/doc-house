
import { Navbar } from 'flowbite-react';
const Navber = () => {
    // const liTag = <>
    //     <li><a>Item 1</a></li>
    //     <li><a>Item 2</a></li>
    //     <li><a>Item 3</a></li>
    // </>
    return (
<Navbar className=' z-10 bg-green-900  '
      fluid
      rounded
    >
      <Navbar.Brand href="#">
        <img
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9"
          src="https://toppng.com/uploads/preview/stethoscope-icon-2316460-480-doctor-icon-115533927019hztskdd7s.png"
        />
        <span className="self-center whitespace-nowrap text-xl   text-white">
          Doc House
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          active
          href="#"
        >
          <p className='font-bold text-white'>
            Home
          </p>
        </Navbar.Link>
        <Navbar.Link href="#">
            <p className='font-bold text-white'> About</p>
         
        </Navbar.Link>
        <Navbar.Link href="#">
         <p className='font-bold text-white'>Appoinyment</p>
        </Navbar.Link>
        <Navbar.Link href="#">
          <p className='font-bold text-white'>login</p>
        </Navbar.Link>

      </Navbar.Collapse>
    </Navbar>
    );
};

export default Navber;