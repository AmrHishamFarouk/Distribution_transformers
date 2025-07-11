import React, { useEffect,useState } from 'react';
import roundwire from "../../assets/wires/round_csa.png"
import { setHV, selectHV } from './../../database/hvSlice';
import { useSelector, useDispatch } from 'react-redux';

function Round() {
   const dispatch = useDispatch();
  
      function updatenumber(value){
        dispatch(setHV({ key: 'NumberOfWires', value: value}));
      };
      function updateDinner(value){
        dispatch(setHV({ key: 'Dinner', value: value}));
      };
      function updateDouter(value){
        dispatch(setHV({ key: 'Douter', value: value}));
      };          
      const Dinner = useSelector((state) => selectHV(state, 'Dinner'));
      const NumberOfWires = useSelector((state) => selectHV(state, 'NumberOfWires'));
      
      useEffect(() => {
        let csa = (((22/7)*Math.pow(Dinner, 2))/4)*NumberOfWires;
        dispatch(setHV({ key: 'Csahv', value: csa}));
      }, [NumberOfWires, Dinner]);

        const Douter = useSelector((state) => selectHV(state, 'Douter'));

      useEffect(() => {
        let WireInsulation = (Douter-Dinner)/2;
        dispatch(setHV({ key: 'WireInsulation', value: WireInsulation}));
      }, [Douter, Dinner]);

      const Csahv = useSelector((state) => selectHV(state, 'Csahv'));
      const WireInsulation = useSelector((state) => selectHV(state, 'WireInsulation'));

  return (
<>
      <div>
        <h2>Round</h2>
        <img scr="./assets/round.png" />
      </div>
        <div>
              <div>
                <label>D inner</label>
                <input name="myInput" placeholder="internal diameter" onChange={(e) => updateDinner(parseFloat(e.target.value))}/>
              </div>
              <div>
                <label>D outer</label>
                <input name="myInput" placeholder="external diameter" onChange={(e) => updateDouter(parseFloat(e.target.value))} />
              </div>
              <div>
              <label>Number of wires</label>
              <input name="myInput"  onChange={(e) => updatenumber(parseInt(e.target.value))} />
            </div>
          </div>
        <div>
        <div>
          <div> ∆c.s.a = {typeof Csahv === "number" ? Csahv.toFixed(4) : "N/A"}</div>
          <div> WireInsulation = {typeof WireInsulation === "number" ? WireInsulation.toFixed(4) : "N/A"}</div>
        </div>

        <img src={roundwire} alt="Round CSA imgage missed" />
      </div>
    </>
  );
}

export default Round;
