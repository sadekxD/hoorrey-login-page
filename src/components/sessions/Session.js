import React, { useRef, useState, useEffect } from "react";
import Login from "./Login";
import Signup from "./Signup";

const Session = () => {
  const [active, setActive] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function preventDefault(e) {
      e.preventDefault();
    }

    // modern Chrome requires { passive: false } when adding event
    var supportsPassive = false;
    try {
      window.addEventListener(
        "test",
        null,
        Object.defineProperty({}, "passive", {
          get: function () {
            supportsPassive = true;
          },
        })
      );
    } catch (e) {}

    var wheelOpt = supportsPassive ? { passive: false } : false;
    var wheelEvent =
      "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

    // call this to Disable
    function disableScroll() {
      window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
      window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
      window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
    }

    window.addEventListener("load", disableScroll);

    // call this to Enable scroll
    return () => {
      window.removeEventListener("DOMMouseScroll", preventDefault, false);
      window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
      window.removeEventListener("touchmove", preventDefault, wheelOpt);
    };
  }, []);

  return (
    <div className="form-container">
      <div className="active-form">
        <div ref={ref} className={`form ${active ? "active" : ""}`}>
          <Login setActive={setActive} />
          <Signup setActive={setActive} />
        </div>
      </div>
    </div>
  );
};

export default Session;
