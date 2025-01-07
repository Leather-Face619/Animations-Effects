import React, { useEffect } from 'react';
import Shery from "sheryjs";

const App = () => {
  useEffect(() => {
    Shery.mouseFollower({
      skew: true,
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });
  }, []);

  return (
    <div>Appsdasdasdd</div>
  )
}

export default App;
