import React, { useState , useEffect } from 'react';
import Packets1 from './PACKETS/Packets1';
import Packets2 from './PACKETS/Packets2';
import Packets3 from './PACKETS/Packets3';
import Packets4 from './PACKETS/Packets4';

import { useSelector, useDispatch } from 'react-redux';
import { setHV, selectHV } from './../database/hvSlice';

function Hv3() {
  const dispatch = useDispatch();
  const δhv =  useSelector((state) => selectHV(state, 'δhv'));
  const [Nopack, setNopack] = useState(1);
  const Wirethicknesshv = useSelector((state) => selectHV(state, 'Wirethicknesshv'));


  useEffect(() => {
      let MinLayersPerPacket = 100 / (Math.pow(δhv, 2) * Wirethicknesshv);
      let n = parseInt(MinLayersPerPacket);
      dispatch(setHV({ key: 'MinLayersPerPackethv', value: n }));
  }, [δhv, Wirethicknesshv]);
        
      const n = useSelector((state) => selectHV(state, 'MinLayersPerPackethv'));
      const layers = useSelector((state) => selectHV(state, 'Layershv'));
  
  let Changepack = (sign) => {
    setNopack(prevNopack => {
      if (sign === '+' && prevNopack < 4) return prevNopack + 1;
      if (sign === '-' && prevNopack > 1) return prevNopack - 1;
      return prevNopack; // Keep the same value if conditions are not met
    });
  };

  return (
    <>
      <h1>Maximum layers = {layers} </h1>
      <div> n= {n.toFixed(2)}</div>
      {Nopack == 1 && <Packets1 />}
      {Nopack == 2 && <Packets2 />}
      {Nopack == 3 && <Packets3 />}
      {Nopack == 4 && <Packets4 />}
      <div>
        <button onClick={() => Changepack('+')}> increase Packets </button>
        <button onClick={() => Changepack('-')}> decrease Packets </button>
      </div>
    </>
  );
}
export default Hv3;