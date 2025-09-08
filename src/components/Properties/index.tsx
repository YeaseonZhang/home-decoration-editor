import { useState } from 'react';

const Properties = () => {
  const [right, setRight] = useState<number>(0);
  return (
    <div className="properties" style={{ right }}>
      Properties
      <div
        className="drawer-bar"
        onClick={() => {
          setRight(right === 0 ? -300 : 0);
        }}
      ></div>
    </div>
  );
};

export default Properties;
