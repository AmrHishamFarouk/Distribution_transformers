import Flat from '../LV/WIRES/Flat';
import Foil from '../LV/WIRES/Foil';
import Round from '../LV/WIRES/Round';
import React, { useState } from 'react';
function Lv1() {
  const [Wire, setWire] = useState(null);

  const ChangeWire = (wire) => {
    setWire(wire);
  };

  return (
    <>
      <h1>L.V. winding</h1>
      {/* <div>Iline = Iph = ({Rateedpower}*10^3)/(sqrroot(3)*400) </div> */}
      <h1>please choose the type of wire</h1>
      <div>
        <button onClick={() => ChangeWire('Foil')}>Foil</button>
        <button onClick={() => ChangeWire('Flat')}>Flat</button>
        <button onClick={() => ChangeWire('Round')}>Round</button>
      </div>
      <div>
        {Wire == 'Foil' && <Foil />}
        {Wire == 'Flat' && <Flat />}
        {Wire == 'Round' && <Round />}

        <div>δ = Iph/c.s.a =</div>
      </div>
      <button type="submit">next</button>
    </>
  );
}
export default Lv1;
