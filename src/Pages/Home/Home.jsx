import Banner from "./Banner/Banner";
import ContactDetails from "./ContactDetails/ContactDetails";
import Doctors from "./Doctors/Doctors";
import OurServices from "./OurServices/OurServices";
import Reviews from "./Reviews/Reviews";

const Home = () => {
    return (
        <div className="max-w-[80wv]">
            <Banner></Banner>
            <OurServices></OurServices>
            <ContactDetails></ContactDetails>
            <Reviews></Reviews>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;