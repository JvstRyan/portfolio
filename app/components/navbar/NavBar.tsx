import React from "react";
import NavBarButtons from "./NavBarButtons";

const NavBar = () => {
  return (
    <>
      <section className="navbar bg-primary shadow-md ">
        <article className="flex-1">
          <p className="text-black text-lg font-bold ml-10">Ryanhorrmann.</p>
        </article>
        <NavBarButtons />
      </section>
    </>
  );
};

export default NavBar;
