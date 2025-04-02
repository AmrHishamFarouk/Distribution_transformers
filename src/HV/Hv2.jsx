import Flat from './WIRES/Flat';
import Foil from './WIRES/Foil';
import Round from './WIRES/Round';
import React, { useState } from 'react';
function Hv2() {
  const [Wire, setWire] = useState(null);

  const ChangeWire = (wire) => {
    setWire(wire);
  };

  return (
    <>
      <h1>H.V. winding</h1>
      <div>Iphasehv           Iphasehv10</div>
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
        <div>δ-10= Iph-10/c.s.a =</div>
      </div>
      <button type="submit">next</button>
    </>
  );
}
export default Hv2;
