import Flat from './WIRES/Flat';
import Foil from './WIRES/Foil';
import Round from './WIRES/Round';
import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setSpec, selectSpec } from '../database/specsSlice';

function Lv1() {
  const [Wire, setWire] = useState(null);

  const ChangeWire = (wire) => {
    setWire(wire);
  };

  const Ratedpower = useSelector((state) => selectSpec(state, 'Ratedpower'));
  const HV = useSelector((state) => selectSpec(state, 'HV'));
  const LV = useSelector((state) => selectSpec(state, 'LV'));
  const Po = useSelector((state) => selectSpec(state, 'Po'));
  const Pcc = useSelector((state) => selectSpec(state, 'Pcc'));
  const Z = useSelector((state) => selectSpec(state, 'Z'));
  const B = useSelector((state) => selectSpec(state, 'B'));
  const F = useSelector((state) => selectSpec(state, 'F'));
  const Δironcore = useSelector((state) => selectSpec(state, 'Δironcore'));
  const Maj = useSelector((state) => selectSpec(state, 'Maj'));


  const dispatch = useDispatch(); // Dispatch actions
  const updateRatedPower = () => {
    dispatch(setSpec({ key: 'Ratedpower', value: 123444444 }));
  };

  return (
    <>
    <center><h1>Lv1</h1></center>
    <p>Rated Power: {Ratedpower}</p>
    <p>Ratedpower: {Ratedpower}</p>
      <p>HV: {HV}</p>
      <p>LV: {LV}</p>
      <p>Po: {Po}</p>
      <p>Pcc: {Pcc}</p>
      <p>Z: {Z}</p>
      <p>B: {B}</p>
      <p>F: {F}</p>
      <p>Δironcore: {Δironcore}</p>
      <p>Maj: {Maj}</p>
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
