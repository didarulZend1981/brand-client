import { useLoaderData } from "react-router-dom";
import CardDetails from "../../components/CardDetails/CardDetails";



const Home = () => {
  const coffees = useLoaderData();
  return (
    <div className='m-20'>
      <h1 className='text-6xl text-center my-20 text-purple-600'>Hot Hot Cold Coffee: {coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-4'>
      {
          coffees.map(coffee => <CardDetails
            key={coffee._id}
            coffee={coffee}
          ></CardDetails>)
        }
        
      </div>
    </div>
  );
};

export default Home;