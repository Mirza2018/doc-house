import { FaQuoteLeft } from "react-icons/fa";


const Review = ({ review }) => {
    const { name, details, rating, img } = review
    return (
        <section className="border rounded p-4 h-[300px] ">
            <div className="flex items-start justify-between">
                <div className="flex items-center justify-center">
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-orange-300  ">
                            <img src={img} />
                        </div>
                    </div>
                    <div className="ml-3">
                        <h1>{name}</h1>
                        <p>Rating: {rating}</p>
                    </div>
                </div>
                <div className="text-6xl text-orange-300">
                <FaQuoteLeft/>
                </div>

            </div>

            <div>
                <p>
                    {details}
                </p>
            </div>
        </section>
    );
};

export default Review;