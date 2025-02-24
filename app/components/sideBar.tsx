import NavLinks from "./navLinks";

const SideBar = () => {
  return (
    <nav className="p-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Menu</h2>
      <NavLinks />
    </nav>
  );
};

export default SideBar;
