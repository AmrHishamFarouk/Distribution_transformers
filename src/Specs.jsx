import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  setRatedpower,
  setHV,
  setLV,
  setPo,
  setPcc,
  setZ,
  setB,
  setF,
  setΔironcore,
  setMaj,
} from './database/specsSlice'; // adjust path if needed

function Specs() {
  const dispatch = useDispatch();

  const ratedPowerRef = useRef();
  const hvRef = useRef();
  const lvRef = useRef();
  const poRef = useRef();
  const pccRef = useRef();
  const zRef = useRef();
  const bRef = useRef();
  const fRef = useRef();
  const deltaIroncoreRef = useRef();
  const majRef = useRef();

  const handleSubmit = () => {
    dispatch(setRatedpower(parseFloat(ratedPowerRef.current.value)));
    dispatch(setHV(parseFloat(hvRef.current.value)));
    dispatch(setLV(parseFloat(lvRef.current.value)));
    dispatch(setPo(parseFloat(poRef.current.value)));
    dispatch(setPcc(parseFloat(pccRef.current.value)));
    dispatch(setZ(parseFloat(zRef.current.value)));
    dispatch(setB(parseFloat(bRef.current.value)));
    dispatch(setF(parseFloat(fRef.current.value)));
    dispatch(setΔironcore(parseFloat(deltaIroncoreRef.current.value)));
    dispatch(setMaj(parseFloat(majRef.current.value)));
  };

  return (
    <div>
      <h1>Specifications</h1>
      <h2>Dyn11</h2>
      <div>
        <div>
          <label>Rated Power</label>
          <input ref={ratedPowerRef} placeholder="kVA" />
        </div>
        <div>
          <label>H.V.</label>
          <input ref={hvRef} placeholder="kV" />
        </div>
        <div>
          <label>L.V.</label>
          <input ref={lvRef} placeholder="kV" defaultValue="0.4" />
        </div>
        <div>
          <label>Po</label>
          <input ref={poRef} placeholder="kVA" />
        </div>
        <div>
          <label>Pcc</label>
          <input ref={pccRef} placeholder="kVA" />
        </div>
        <div>
          <label>Z%</label>
          <input ref={zRef} placeholder="%" />
        </div>
        <div>
          <label>Flux Density (B)</label>
          <input ref={bRef} placeholder="B" defaultValue="1.6" />
        </div>
        <div>
          <label>Frequency</label>
          <input ref={fRef} placeholder="Hz" defaultValue="50" />
        </div>
        <div>
          <label>Δironcore</label>
          <input ref={deltaIroncoreRef} placeholder="mm^2" />
        </div>
        <div>
          <label>Maj</label>
          <input ref={majRef} placeholder="Maj" />
        </div>
      </div>

      <button onClick={handleSubmit}>Update Specs</button>
    </div>
  );
}

export default Specs;
