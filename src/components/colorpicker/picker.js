import React, { useState, useEffect } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState("#00796b"); // starting with your teal button color

  // Whenever color changes, update CSS variable --bgcolor on document root
  useEffect(() => {
    document.documentElement.style.setProperty("--bgcolor", color);
  }, [color]);



  return (
    <div >
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      
      />
      <p >Selected Color Code: {color.toUpperCase()}</p>
    </div>
  );
}
