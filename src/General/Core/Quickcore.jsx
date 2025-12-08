import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setGeneral, selectGeneral} from './../../database/generalSlice';
import { selectLV } from './../../database/lvSlice';
import { setSpec, selectSpec } from './../../database/specsSlice';
import './../../CSS/General/Quickcore.css';

function Quickcore(){           
    const dispatch = useDispatch();
    const Csacore =  useSelector((state) => selectGeneral(state, 'Csacore'));
    const B =  useSelector((state) => selectSpec(state, 'B'));
    const LV = useSelector((state) => selectSpec(state, 'LV'));  
    const Nph = useSelector((state) => selectLV(state, 'Nph'));
    const F = useSelector((state) => selectSpec(state, 'F'));
    const Requiredcsacore = ((LV*1000) / Math.pow(3, 1/2)) / (4.44 * Nph * F *1.6 * 0.000001);
    const Totalstacking =  useSelector((state) => selectGeneral(state, 'Totalstacking'));
    const W1 =  useSelector((state) => selectGeneral(state, 'W1'));

    function updateTotalstacking(value){
      dispatch(setGeneral({ key: 'Totalstacking', value: value}));
    };

    function updateW1(value){
      dispatch(setGeneral({ key: 'W1', value: value}));
            console.log(W1);

    };
 
  function updateCsacore(value){
    dispatch(setGeneral({ key: 'Csacore', value: value }));
    };
    
  useEffect(() => {
      const actualB = (LV*1000) / Math.sqrt(3) / (4.44 * F * Nph * Csacore * 0.000001);
      dispatch(setSpec({ key: 'B', value: actualB}));
  }, [Csacore]);

    return(
          <div class="parent">
            <div class="div1">
              <label>total stacking</label>
              <input onChange={(e) => updateTotalstacking(parseFloat(e.target.value))} />
            </div>

            <div class="div2">
              <label>largest width</label>
              <input onChange={(e) => updateW1(parseFloat(e.target.value))} />
            </div>

            <div class="div3">
              <label>core area net</label>
              <input onChange={(e) => updateCsacore(parseFloat(e.target.value))} />
            </div>

            <div class="div4">
              <div>required deltacore = {Requiredcsacore.toFixed(0)}</div>
              <div>current deltacore = {Csacore}</div>
              <div>current B = {B}</div>
            </div>
          </div>
    )
}
export default Quickcore;