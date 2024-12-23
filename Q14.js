//React Component That Hides Text After 3 Seconds

import { useState, useEffect } from "react";

function HideText() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return <div>{visible ? "This text will disappear" : ""}</div>;
}
