import OurServicesTab from "../../../components/OurServicesTab";


const OurServices = () => {
    return (
        <div className="md:grid md:grid-cols-2 md:gap-3 md:mt-8">
            <div className="">
                <img className=" h-[700px] md:h-auto mt-8 mx-auto" src="https://s3-alpha-sig.figma.com/img/4015/4987/26a19c6d90648297557df098d98effd2?Expires=1697414400&Signature=jD6woaTN1GWfEf5jmOU4AmYqEUT6Ihgy~LLePVSOclAorsm2qgWFwrAzOFpcSIL6yR7C9UXklQJCIEcrwtBd3LsfTuH6quSTRwsdKOhIFk9XbcHCyiLtWPyLvEJwPNHAQ1XJRMEyX8DTIW7swzeDVoPJQCZ-eNGWELpQsQEY~FtDTQjV9KNEf4rUoMhAGN1apPruXiOK5j5df9Z3RGwUdLZRoRncDs2o2JntHECkz2IUs6tD8fA06bGBvLXP5j6n2V-tflICjwVvUUJcsPgx3YU5LUOzRj3mh8lG~WAdDtaA6IKYFz0rj3xbmhtZ5o0gPWZh~Ay~412XNvRBDrxyfA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
            </div>

            <div className="text-center md:text-start md:py-6 md:ml-2">
                <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
                <p className="my-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <div>
                    <OurServicesTab></OurServicesTab>
                </div>
            </div>

        </div>
    );
};

export default OurServices;