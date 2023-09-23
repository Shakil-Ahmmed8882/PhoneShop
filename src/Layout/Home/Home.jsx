import { useLoaderData } from "react-router-dom";
import Phones from "./phones/Phones";

const Home = () => {
      const phones = useLoaderData()
      return (
            <div className="max-w-6xl mx-auto">
                  <Phones
                  Phones={phones}
                  ></Phones>
            </div>
      );
};

export default Home;