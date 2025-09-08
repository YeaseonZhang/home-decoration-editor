import { useState } from 'react';

const Menu = () => {
  const [left, setLeft] = useState<number>(0);
  return (
    <div className="menu" style={{ left }}>
      Menu
      <div
        className="drawer-bar"
        onClick={() => {
          setLeft(left === 0 ? -300 : 0);
        }}
      ></div>
    </div>
  );
};

export default Menu;
