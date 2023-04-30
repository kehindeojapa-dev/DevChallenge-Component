import { NavLink } from "react-router-dom";
// import { IoIosArrowForward } from "react-icons/io";

// Active & NotActive Stykes
const isNotActiveStyle =
  "flex items-center px-5 gap-3 text-gray-500 hover:text-black-400 transition-all duration-200 ease-in-out capitalize";
const isActiveStyle =
  "flex items-center px-5 gap-3 font-extrabold text-black-500 transition-all duration-200 ease-in-out capitalize";

type Props = {
  closeToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar: React.FC<Props> = ({ closeToggle }: Props) => {
  //   console.log(closeToggle);
  const handleCloseSidebar = () => {
    if (closeToggle) closeToggle(false);
  };
  return (
    <section className="flex flex-col justify-between bg-gray-50 h-full overflow-y-scroll hide-scrollbar">
      <section className="flex flex-col">
        <main className="flex flex-col gap-5">
          <div className="mb-28 mt-5">
            <h3 className="mt-2 px-5 text-base 2xl:text-xl">
              <span className="text-orange-600">Dev</span>challenges.io
            </h3>
          </div>

          <NavLink
            to={`/buttons`}
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            onClick={handleCloseSidebar}
          >
            Buttons
          </NavLink>
          <NavLink
            to={`/inputs`}
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            onClick={handleCloseSidebar}
          >
            Inputs
          </NavLink>
        </main>
      </section>
    </section>
  );
};

export default Sidebar;
