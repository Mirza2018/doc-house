import Contact from "../../../components/Contact";


const ContactDetails = () => {
    return (
        <div className="grid grid-rows-3 md:grid-cols-3 gap-2">
            <Contact
                bkg='bg-green-900'
                num={1}
                name='Opening Hours'
                text='Open 9.00 am to 5.00pm Everyday'
            ></Contact>
            <Contact
                bkg='bg-red-300'
                num={2}
                name='Our Locations'
                text='Dhanmondi 17, Dhaka -1200, Bangladesh'
            ></Contact>
            <Contact
                bkg='bg-green-900'
                num={3}
                name='Opening Hours'
                text='+88 01750 00 00 00 ,
                      +88 01750 00 00 00'
            ></Contact>



        </div>
    );
};

export default ContactDetails;