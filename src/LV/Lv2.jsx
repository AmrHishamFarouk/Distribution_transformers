import React, { useState } from 'react';
import Packets2 from './PACKETS/Packets2';
import Packets3 from './PACKETS/Packets3';
import Packets4 from './PACKETS/Packets4';

function Lv2() {
  const [Nopack, setNopack] = useState(null);

  let Changepack = (sign) => {
    if (sign === '+' && Nopack < 6) {
      setNopack(Nopack + 1);
    } else if (sign === '-' && Nopack > 2) {
      setNopack(Nopack - 1);
    }
  };

  return (
    <>
      <div> n= 100/ (δ^2)*thicknessofwire = = parseInt(n)</div>
      {Nopack == 2 && <Packets2 />}
      {Nopack == 3 && <Packets3 />}
      {Nopack == 4 && <Packets4 />}
      <div>
        <button onClick={() => Changepack('+')}> increase insulation </button>
        <button onClick={() => Changepack('-')}> decrease insulation </button>
      </div>
    </>
  );
}
export default Lv2;
