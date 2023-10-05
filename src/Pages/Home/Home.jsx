import Banner from "./Banner/Banner";
import ContactDetails from "./ContactDetails/ContactDetails";
import OurServices from "./OurServices/OurServices";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurServices></OurServices>
            <ContactDetails></ContactDetails>
        </div>
    );
};

export default Home;