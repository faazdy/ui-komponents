import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation(); // Obtiene la ruta actual

  useEffect(() => {
    window.scrollTo(0, 0); // Mueve el scroll al tope
  }, [pathname]); // Se ejecuta cuando cambia la ruta

  return null;
}

export default ScrollToTop;
