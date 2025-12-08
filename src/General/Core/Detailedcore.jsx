import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setGeneral, selectGeneral} from './../../database/generalSlice';
import { setLV, selectLV } from './../../database/lvSlice';
import { setSpec, selectSpec } from './../../database/specsSlice';

function Detailedcore() {
  const dispatch = useDispatch();
  const Totalstacking = useSelector((state) => selectGeneral(state, 'Totalstacking'));  
  const W1 = useSelector((state) => selectGeneral(state, 'W1'));  
  const W2 = useSelector((state) => selectGeneral(state, 'W2'));  
  const W3 = useSelector((state) => selectGeneral(state, 'W3'));  
  const W4 = useSelector((state) => selectGeneral(state, 'W4'));  
  const L1 = useSelector((state) => selectGeneral(state, 'L1'));  
  const L2 = useSelector((state) => selectGeneral(state, 'L2'));  
  const L3 = useSelector((state) => selectGeneral(state, 'L3'));  
  const L4 = useSelector((state) => selectGeneral(state, 'L4'));  
  const CoreAreanet = useSelector((state) => selectGeneral(state, 'CoreAreanet'));  
  const Nphlv = useSelector((state) => selectLV(state, 'Nph'));  
  const B =  useSelector((state) => selectSpec(state, 'B'));
  const LV = useSelector((state) => selectSpec(state, 'LV'));  
  const F = useSelector((state) => selectSpec(state, 'F'));
  const Requiredcsacore = ((LV*1000) / Math.pow(3, 1/2)) / (4.44 * Nphlv * F *1.6 * 0.000001);
  

  function updateW1(value){
      dispatch(setGeneral({ key: 'W1', value: value}));
    };
    function updateW2(value){
      dispatch(setGeneral({ key: 'W2', value: value}));
    };
    function updateW3(value){
      dispatch(setGeneral({ key: 'W3', value: value}));
    };
    function updateW4(value){
      dispatch(setGeneral({ key: 'W4', value: value}));
    };
    function updateL1(value){
      dispatch(setGeneral({ key: 'L1', value: value}));
    }
    function updateL2(value){
      dispatch(setGeneral({ key: 'L2', value: value}));
    }
    function updateL3(value){
      dispatch(setGeneral({ key: 'L3', value: value}));
    }
    function updateL4(value){
      dispatch(setGeneral({ key: 'L4', value: value}));
    }
    function updateCsacore(value){
      dispatch(setGeneral({ key: 'Csacore', value: value}));
    };
    function updateTotalstacking(value){
      dispatch(setGeneral({ key: 'Totalstacking', value: value}));
    };

        useEffect(() => {
          let newTotalstacking = L1+(2*L2)+(2*L3)+(2*L4);
          dispatch(setGeneral({ key: 'Totalstacking', value: newTotalstacking}));

          let CoreArea = (L1*W1)+(2*L2*W2)+(2*L3*W3)+(2*L4*W4);
          dispatch(setGeneral({ key: 'Csacore', value: CoreArea}));
          let CoreAreanet = CoreArea*Math.pow(0.98957, 2);
          dispatch(setGeneral({ key: 'CoreAreanet', value: CoreAreanet}));
          
          let CoreAspectRatio = Totalstacking/W1;
          dispatch(setGeneral({ key: 'CoreAspectRatio', value: CoreAspectRatio}));
        }, [L1,W1,L2,W2,L3,W3,L4,W4]);
       
        useEffect(() => {
          let fluxdensity = (400/Math.sqrt(3))/(4.44*F*Nphlv*CoreAreanet*0.000001);
          dispatch(setSpec({ key: 'B', value: fluxdensity}));
        }, [CoreAreanet]);
       
 
  return (
    <>

      <div>
        <div>
        <div>required deltacore = {Requiredcsacore.toFixed(0)}</div>
        <div>current deltacore net = {CoreAreanet}</div>
        <div>current B = {B}</div>
        
          <div>
            <div>
              <label>L1</label>
              <input name="myInput" onChange={(e) => updateL1(parseFloat(e.target.value))}/>
            </div>
            
            <div>
              <label>L2</label>
              <input name="myInput" onChange={(e) => updateL2(parseFloat(e.target.value))}/>
            </div>
            
            <div>
              <label>L3</label>
              <input name="myInput" onChange={(e) => updateL3(parseFloat(e.target.value))}/>
            </div>

            <div>
              <label>L4</label>
              <input name="myInput" onChange={(e) => updateL4(parseFloat(e.target.value))}/>
            </div>

            <div>
              <label>W1</label>
              <input name="myInput" onChange={(e) => updateW1(parseFloat(e.target.value))}/>
            </div>

            <div>
              <label>W2</label>
              <input name="myInput" onChange={(e) => updateW2(parseFloat(e.target.value))}/>
            </div>

            <div>
              <label>W3</label>
              <input name="myInput" onChange={(e) => updateW3(parseFloat(e.target.value))}/>
            </div>

            <div>
              <label>W4</label>
              <input name="myInput" onChange={(e) => updateW4(parseFloat(e.target.value))}/>
            </div>
          </div>
        </div>  
      </div>
    </>
  );
}

export default Detailedcore;