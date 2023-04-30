import { useEffect, useState, useRef } from "react";
import { Link, Route, Routes } from "react-router-dom";

// Components
import Sidebar from "../layouts/Sidebar";
import Buttons from "../layouts/Buttons";
import Inputs from "../layouts/Inputs";
// import Pins from "./Pins";

// import logo from "../assets/logo.png";

const Home = () => {
  //States
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef) {
      if (scrollRef.current != null) {
        scrollRef.current.scroll(0, 0);
      }
    }
  }, []);

  return (
    <section className="flex bg-white md:flex-row flex-col h-screen transition-height duration-75 ease-out">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex h-screen flex-initial">
        <Sidebar closeToggle={setToggleSidebar} />
      </aside>

      {/* Mobile Sidebar */}
      <div className="flex md:hidden flex-row">
        <header className="p-2 w-full flex flex-row justify-between items-center shadow-md">
          <span
            className="material-icons text-black cursor-pointer"
            onClick={() => setToggleSidebar(true)}
          >
            menu_two_tone
          </span>
          <Link to={"/"}>
            <h3 className="mt-2 px-5 text-base 2xl:text-xl">
              <span className="text-orange-600">Dev</span>challenges.io
            </h3>
          </Link>
        </header>
        {/* Sidebar Slides in */}
        {toggleSidebar && (
          <aside className="fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in">
            <Sidebar closeToggle={setToggleSidebar} />
          </aside>
        )}
      </div>

      <div className="pb-2 flex-1 h-screen overflow-y-scroll" ref={scrollRef}>
        <Routes>
          <Route path={"/buttons"} element={<Buttons />} />
          <Route path={"/inputs"} element={<Inputs />} />
          <Route path={"/*"} element={<Buttons />} />
        </Routes>
      </div>
    </section>
  );
};

export default Home;
