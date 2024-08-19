import Hero from "../components/Hero";
import wave from '../assets/wave.svg';


const Home = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[calc(100vh-116px)]">
      <Hero/>

      <img src={wave} alt="wave svg image" className="absolute bottom-0 w-full"/>
    </section>
  )
}

export default Home