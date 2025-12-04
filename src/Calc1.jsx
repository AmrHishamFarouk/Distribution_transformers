import React, { useEffect,useState } from 'react';
import './CSS/Calc1.css'
import { useSelector, useDispatch } from 'react-redux';
import { setSpec, selectSpec} from './database/specsSlice';
import { setLV, selectLV } from './database/lvSlice';

function Calc1() {
  const dispatch = useDispatch();

  const Ratedpower = useSelector((state) => selectSpec(state, 'Ratedpower'));
  const LV = useSelector((state) => selectSpec(state, 'LV'));
  const VT = useSelector((state) => selectSpec(state, 'VT'));
  const Nph = useSelector((state) => selectLV(state, 'Nph'));

  let tempk = 0.486865;
  const[K,setK] = useState(0.486865);
  const [Temporaryvt, setTemporaryvt] = useState(0.0);



  useEffect(() => {
    setTemporaryvt(tempk * Math.sqrt(Ratedpower)) 
  }, [Ratedpower, tempk]); // Updates Temporaryvt first
  
  useEffect(() => {
    if (Temporaryvt > 0) {
      const TemporaryNph = ((LV*1000) / Math.sqrt(3)) / Temporaryvt;
  
      const roundedNph = Math.ceil(TemporaryNph);
      dispatch(setLV({ key: 'Nph', value: roundedNph }));
  
      const vt = (LV*1000) / Math.sqrt(3) / roundedNph;  
      dispatch(setSpec({ key: 'VT', value: vt.toFixed(3) }));
    }
  }, [Temporaryvt, LV]); // Runs when Temporaryvt updates

  function updateNph(newNph){
      dispatch(setLV({ key: 'Nph', value: newNph }));
      const vt = (LV*1000) / Math.sqrt(3) / newNph;
      dispatch(setSpec({ key: 'VT', value: vt.toFixed(3) }));
      setK( (vt.toFixed(3) / Math.sqrt(Ratedpower).toFixed(3)).toFixed(3) )
  }

  return (
    <>
      <h1>K: {K}</h1>
      <h1>Nph: {Nph}</h1>
      <h1>V/t: {VT}</h1>
      <div>
        <label>change Nph</label>
        <input name="myInput" placeholder="layers" onChange={(e) => updateNph(parseFloat(e.target.value))} value={Nph}/>
      </div>
    </>
  );
}
export default Calc1;
