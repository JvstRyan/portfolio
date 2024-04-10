import React from "react";
import NavBarButtons from "./NavBarButtons";

const NavBar = () => {
  return (
    <>
      <section className="navbar bg-primary shadow-md sticky top-0 z-10">
        <article className="flex-1">
          <p className="text-black font-bold ml-10">Ryanhorrmann.</p>
        </article>
        <NavBarButtons />
      </section>
    </>
  );
};

export default NavBar;
