import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { selectRatedpower, setRatedpower, selectB, selectΔironcore, selectF, selectLV} from './database/specsSlice';

function Calc1() {

  const Ratedpower = useSelector(selectRatedpower); // Access state
  const B = useSelector(selectB); // Access state
  const Δironcore = useSelector(selectΔironcore); // Access state
  const F = useSelector(selectF); // Access state
  const LV = useSelector(selectLV); // Access state

  const dispatch = useDispatch(); // Dispatch actions
  const updateRatedPower = () => {
    dispatch(setRatedpower(500)); // Update state
  };

  
  let [Temporaryvt, setTemporaryvt] = useState(0.0);
  let [TemporaryNph, setTemporaryNph] = useState(0.0);
  let [VT, setVT] = useState(0.0);
  let k = 0.486865;
  setTemporaryvt(k * Math.sqrt(Ratedpower));
  setTemporaryNph((LV / Math.sqrt(3) / Temporaryvt));
  let Nph = Math.ceil(TemporaryNph);
  //--------------------------------assign Nphlv-----------------------------

  setVT(LV / Math.sqrt(3) / Nph);
  //--------------------------------assign vt-----------------------------

  
  // let actualB = LV / Math.sqrt(3) / (4.44 * F * Nph * Δironcore * 0.000001);
  // compare it to the B and then assign it
  //--------------------------------assign B-----------------------------

  return (
    <>
      <h1>Temporary v/t</h1>

      <h1>Nph</h1>

      <h1>V/t</h1>

      <h1>Flux density</h1>

      <p>Rated Power: {Ratedpower}</p>
      <button type="submit" onClick={updateRatedPower}>next</button>
    </>
  );
}
export default Calc1;
