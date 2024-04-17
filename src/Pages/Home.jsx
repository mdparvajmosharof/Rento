import { useEffect } from "react";
import Banner from "../Component/Banner";
import Estate from "../Component/Estate";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import { useLoaderData } from "react-router-dom";



const Home = () => {

  useEffect(() => {
    document.title = 'Rento'; 
}, []);

  const estates = useLoaderData();
  
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {estates.map((estate) => (
          <Estate key={estate.id} estate={estate}></Estate>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
