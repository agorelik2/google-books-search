import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Search a Book on Google
      </a>
      <a className="navbar-brand" href="/savedbooks">
        Favorite Books List
      </a>
    </nav>
  );
}

export default Nav;
