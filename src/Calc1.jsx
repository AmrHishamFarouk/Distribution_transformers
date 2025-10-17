import React, { useEffect,useState } from 'react';
import './CSS/Calc1.css'
import { useSelector, useDispatch } from 'react-redux';
import { setSpec, selectSpec} from './database/specsSlice';
import { setLV, selectLV } from './database/lvSlice';

function Calc1() {
  const dispatch = useDispatch();

  const Ratedpower = useSelector((state) => selectSpec(state, 'Ratedpower'));
  const LV = useSelector((state) => selectSpec(state, 'LV'));
  const B = useSelector((state) => selectSpec(state, 'B'));
  const F = useSelector((state) => selectSpec(state, 'F'));
  const Δironcore = useSelector((state) => selectSpec(state, 'Δironcore'));
  const VT = useSelector((state) => selectSpec(state, 'VT'));
  const Nph = useSelector((state) => selectLV(state, 'Nph'));


  let k = 0.486865;
  let [Temporaryvt, setTemporaryvt] = useState(0.0);



  useEffect(() => {
    setTemporaryvt(k * Math.sqrt(Ratedpower)) 
  }, [Ratedpower, k]); // Updates Temporaryvt first
  
  useEffect(() => {
    if (Temporaryvt > 0) {
      const TemporaryNph = ((LV*1000) / Math.sqrt(3)) / Temporaryvt;
  
      const roundedNph = Math.ceil(TemporaryNph);
      dispatch(setLV({ key: 'Nph', value: roundedNph }));
  
      const vt = (LV*1000) / Math.sqrt(3) / roundedNph;  
      dispatch(setSpec({ key: 'VT', value: vt }));
    }
  }, [Temporaryvt, LV]); // Runs when Temporaryvt updates

  function updateNph(newNph){
      dispatch(setLV({ key: 'Nph', value: newNph }));
      const vt = (LV*1000) / Math.sqrt(3) / newNph;
      dispatch(setSpec({ key: 'VT', value: vt }));
  }

  return (
    <>
      <h1 className="neon-title">Temporary v/t: {Temporaryvt.toFixed(4)}</h1>
      <h1 className="neon-title">Nph: {Nph}</h1>
      <h1 className="neon-title">V/t: {VT.toFixed(4)}</h1>
      <div>
        <label>change Nph</label>
        <input name="myInput" placeholder="layers" onChange={(e) => updateNph(parseFloat(e.target.value))} value={Nph}/>
      </div>
    </>
  );
}
export default Calc1;
