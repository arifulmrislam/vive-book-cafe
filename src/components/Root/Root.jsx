import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import {Outlet} from "react-router-dom";

const Root = () => {
    return (
        <div className="max-w-6xl mx-auto ">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;

<div className='min-h-screen w-full bg-[#0f172a] relative'>
  {/* Blue Radial Glow Background */}
  <div
    className='absolute inset-0 z-0'
    style={{
      backgroundImage: `radial-gradient(circle 600px at 50% 50%, rgba(59,130,246,0.3), transparent)`,
    }}
  />
  {/* Your Content/Components */}
</div>;