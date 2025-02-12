import NavLinks from "./navLinks";
const SideBar = () => {
  return (
    <div>
      <div className="flex grow flex-row justify-between space-x-2 md:flex md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
      </div>{" "}
    </div>
  );
};
export default SideBar;
