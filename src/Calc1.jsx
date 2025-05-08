import React, { useEffect,useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setSpec, selectSpec} from './database/specsSlice';

import { setLV, selectLV } from './database/lvSlice';

function Calc1() {

  const Ratedpower = useSelector((state) => selectSpec(state, 'Ratedpower'));
  const LV = useSelector((state) => selectSpec(state, 'LV'));
  const B = useSelector((state) => selectSpec(state, 'B'));
  const F = useSelector((state) => selectSpec(state, 'F'));
  const Δironcore = useSelector((state) => selectSpec(state, 'Δironcore'));


  const dispatch = useDispatch();

  let [VT, setVT] = useState(0.0);
  let [Nph, setNph] = useState(0.0);
  let k = 0.486865;
  let [Temporaryvt, setTemporaryvt] = useState(0.0);



  useEffect(() => {
    setTemporaryvt(k * Math.sqrt(Ratedpower)) 
  }, [Ratedpower, k]); // Updates Temporaryvt first
  
  useEffect(() => {
    if (Temporaryvt > 0) {
      const TemporaryNph = ((LV*1000) / Math.sqrt(3)) / Temporaryvt;
  
      const roundedNph = Math.ceil(TemporaryNph);  
      setNph(roundedNph);
  
      const vt = (LV*1000) / Math.sqrt(3) / roundedNph;  
      setVT(vt);
    }
  }, [Temporaryvt, LV]); // Runs when Temporaryvt updates

  useEffect(() => {
    if (Nph > 0) {
      // Dispatch updated values to Redux store only when Nph and VT are ready
      dispatch(setLV({ key: 'Nph', value: Nph }));
      dispatch(setSpec({ key: 'VT', value: VT }));
  
      const actualB = (LV*1000) / Math.sqrt(3) / (4.44 * F * Nph * Δironcore * 0.000001);
      dispatch(setSpec({ key: 'B', value: actualB }));
    }
  }, [Nph, VT, LV, F, Δironcore, dispatch]); // Dependency array

  return (
    <>
      <h1>Temporary v/t:{Temporaryvt.toFixed(4)}</h1>

      <h1>Nph: {Nph.toFixed(4)}</h1>

      <h1>V/t:{VT.toFixed(4)}</h1>

      <h1>Flux density : {B.toFixed(4)}</h1>
    </>
  );
}
export default Calc1;
