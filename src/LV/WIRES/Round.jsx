import React, { useEffect,useState } from 'react';
import roundwire from "../../assets/wires/round_csa.png"

import { setLV, selectLV } from './../../database/lvSlice';
import { useSelector, useDispatch } from 'react-redux';


function Round() {
    // const dispatch = useDispatch();
  
    //   function updatenumber(value){
    //     dispatch(setLV({ key: 'NumberOfWires', value: value}));
    //   };
    //   function updateDinner(value){
    //     dispatch(setLV({ key: 'Dinner', value: value}));
    //   };
    //   function updateDouter(value){
    //     dispatch(setLV({ key: 'Douter', value: value}));
    //   };          
    //   const Dinner = useSelector((state) => selectLV(state, 'Dinner'));
    //   const NumberOfWires = useSelector((state) => selectLV(state, 'NumberOfWires'));
      
    //   useEffect(() => {
    //     let csa = (((22/7)*Math.pow(Dinner, 2))/4)*NumberOfWires
    //     dispatch(setLV({ key: 'Csalv', value: csa}));
    //   }, [NumberOfWires, Dinner]);

    //     const Douter = useSelector((state) => selectLV(state, 'Douter'));

    //   useEffect(() => {
    //     let WireInsulation = (Douter-Dinner)/2;
    //     dispatch(setLV({ key: 'WireInsulation', value: WireInsulation}));
    //   }, [Douter, Dinner]);

    //   const Csalv = useSelector((state) => selectLV(state, 'Csalv'));
    //   const WireInsulation = useSelector((state) => selectLV(state, 'WireInsulation'));

  return (
    <>
      {/* <div>
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
          <div> ∆c.s.a = {Csalv.toFixed(4)}</div>
          <div> WireInsulation = {WireInsulation.toFixed(4)}</div>
        </div>

        <img src={roundwire} alt="Round CSA imgage missed" />
      </div> */}
    </>
  );
}

export default Round;