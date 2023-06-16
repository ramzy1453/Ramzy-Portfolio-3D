import { FaArrowCircleDown } from "react-icons/fa";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Loading from "./components/Loading";
import useLoading from "./hooks/useLoading";
import DownArrow from "./components/DownArrow";

export default function App() {
  const loading = useLoading(5);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
      <DownArrow />
    </div>
  );
}
