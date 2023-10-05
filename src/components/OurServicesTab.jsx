import { Tabs } from 'flowbite-react';
import Tab from './Tab';
import img1 from '../assets/Rectangle 10.png'
import img2 from '../assets/Rectangle 10 (1).png'

const OurServicesTab = () => {
    return (
        <div >
 
            <Tabs.Group className="mx-auto md:mx-0"
                aria-label="Pills"
                style="pills"
            >

                <Tabs.Item
                    active
                    title="Orthopedic "
                >
                    <Tab img={img1}></Tab>

                </Tabs.Item>


                <Tabs.Item title="Gastrology">
                    <Tab img={img2}></Tab>
                </Tabs.Item>


                <Tabs.Item title="Orthopedic">
                    <Tab img={img1}></Tab>
                </Tabs.Item>
            </Tabs.Group>
        </div>
    );
};

export default OurServicesTab;