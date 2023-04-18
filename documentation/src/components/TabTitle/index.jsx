import React from "react";

const TabTitle = ({ title }) => {
  useEffect(() => {
    // Set the new title when the component mounts
    document.title = title;

    // Clean up the title when the component unmounts
    return () => {
      document.title = "chartamio - a react flexible library!";
    };
  }, []); // Empty dependency array ensures the effect runs only on mount and unmount
  return;
};

export default TabTitle;
