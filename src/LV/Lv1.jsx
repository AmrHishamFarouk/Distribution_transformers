import Flat from './WIRES/Flat';
import Foil from './WIRES/Foil';
import Round from './WIRES/Round';
import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { selectRatedpower, setRatedpower } from '../database/specsSlice';


function Lv1() {
  const [Wire, setWire] = useState(null);

  const ChangeWire = (wire) => {
    setWire(wire);
  };

  const ratedPower = useSelector(selectRatedpower); // Access state
  const dispatch = useDispatch(); // Dispatch actions
  const updateRatedPower = () => {
    dispatch(setRatedpower(500)); // Update state
  };

  return (
    <>
    <center><h1>Lv1</h1></center>
    <p>Rated Power: {ratedPower}</p>
    <button type="submit" onClick={updateRatedPower}>next</button>
    </>

    // <>
    //   <h1>L.V. winding</h1>
    //   {/* <div>Iline = Iph = ({Rateedpower}*10^3)/(sqrroot(3)*400) </div> */}
    //   <h1>please choose the type of wire</h1>
    //   <div>
    //     <button onClick={() => ChangeWire('Foil')}>Foil</button>
    //     <button onClick={() => ChangeWire('Flat')}>Flat</button>
    //     <button onClick={() => ChangeWire('Round')}>Round</button>
    //   </div>
    //   <div>
    //     {Wire == 'Foil' && <Foil />}
    //     {Wire == 'Flat' && <Flat />}
    //     {Wire == 'Round' && <Round />}

    //     <div>δ = Iph/c.s.a =</div>
    //   </div>
    //   <button type="submit">next</button>
    // </>
  );
}
export default Lv1;
