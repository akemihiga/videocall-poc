import { useEffect } from "react";
import "./App.css";
import "@whereby.com/browser-sdk/embed";

function App() {
  useEffect(() => {
    const el = document.querySelector("whereby-embed");
    if (!el) return;

    const onLeave = () => {
      window.location.href = "https://whereby.com";
    };

    el.addEventListener("leave", onLeave);

    return () => {
      el.removeEventListener("leave", onLeave);
    };
  }, []);

  return <whereby-embed room={import.meta.env.VITE_ROOM_URL} lang="es" />;
}

export default App;
