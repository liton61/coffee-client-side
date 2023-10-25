import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../CoffeeCard/CoffeeCard";
import { useState } from "react";


const Home = () => {
    const coffees = useLoaderData();
    const [coff, setCoff] = useState(coffees);
    return (
        <div className="bg-[#F4F3F0]">
            <h1 className="text-center text-3xl font-bold mb-8">Total Coffee</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mx-7">
                {
                    coffees.map(coffee => <CoffeeCard key={coffee._id}
                        coffee={coffee}
                        coff={coff}
                        setCoff={setCoff}>
                    </CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;