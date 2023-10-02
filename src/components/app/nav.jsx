import React, { useState, useEffect } from "react";
import { Link, NavLink, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useAuth } from "./auth";

const Nav = () => {

  const auth = useAuth();

  const [open, setOpen] = useState(false);

  const isMobile = useMediaQuery({
    maxWidth: 600,
  });

  const items = sessionStorage.getItem('user');

  const navItems = items
    ? router.filter((router) => !router.publicOnly)
    : router.filter((router) => !router.private);

  const user = JSON.parse(items);

  // Mueve la asignación de la variable `imgUser` fuera del bloque de código `return` y verifica que la variable `user` no sea nula antes de acceder a sus propiedades
  let imgUser;
  if (user && !isMobile) {
    imgUser = (
      <div className="imgUser">
        <img src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}`} alt={user.username} />
      </div>
    );
  } else {
    imgUser = null;
  }

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
          {navItems.map((router) => {
            return (
              <motion.li key={router.to}>
                <NavLink to={router.to} className="nav-link">
                  {router.text}
                </NavLink>
              </motion.li>
            );
          })}
        </ul>
      )}

      {!isMobile && (
        <ul className="nav-list">
          {navItems.map((router) => {
            return (
              <motion.li key={router.to}>
                <NavLink to={router.to} className="nav-link">
                  {router.text}
                </NavLink>
              </motion.li>
            );
          })}
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
      <div>
        {imgUser}
      </div>
    </div>
  );
};
const router = [];

router.push({
  to: "/",
  text: "Inicio",
  private: false,
});
router.push({
  to: "/informacion",
  text: "libros",
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
  to: "/reservar-usuario",
  text: "reservas del usuario",
  private: true,
});

router.push({
  to: "/logoaut",
  text: "Cerrar sesion",
  private: true,
});

export default Nav;
