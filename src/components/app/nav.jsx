import React, { useState, useEffect } from "react";
import { Link, NavLink, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const isMobile = useMediaQuery({
    maxWidth: 600,
  });

  const navItems = router.map((router) => (
    <motion.li key={router.to}>
      <NavLink to={router.to} className="nav-link">
        {router.text}
      </NavLink>
    </motion.li>
  ));

  const navListVariants = {
    closed: {
      y: -100,
    },
    open: {
      y: 0,
    },
  };

  return (
    <div className="nav-container">
      {isMobile && (
        <ul
          className={"nav-list" + (open ? " open" : "")}
          style={{
            display: open ? "block" : "none",
            width: "100%",
            flexDirection: "column",
            overflow: "hidden",
          }}
          variants={navListVariants}
          initial="closed"
          animate={open ? "open" : "closed"}
        >
          {navItems}
        </ul>
      )}

      {!isMobile && (
        <ul className="nav-list">
          {navItems}
        </ul>
      )}

      <div className="nav-button-hide">
        <button
          type="button"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <img src="../../../public/flecha-hacia-abajo-para-navegar.png" alt="" />
        </button>
      </div>
    </div>
  );
};
const router = [];

router.push({
  to: "/",
  text: "Home",
  private: false,
});
router.push({
  to: "/informacion",
  text: "Informacion",
  private: false,
});

router.push({
  to: "/perfil",
  text: "Perfil",
  private: true,
});

router.push({
  to: "/login",
  text: "Login",
  private: false,
  publicOnly: true,
});

router.push({
  to: "/logoaut",
  text: "Logoaut",
  private: true,
});

export default Nav;