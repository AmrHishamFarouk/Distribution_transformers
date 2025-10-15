import React, { useEffect,useState } from 'react';
import Packets2 from './PACKETS/Packets2';
import Packets3 from './PACKETS/Packets3';
import Packets4 from './PACKETS/Packets4';
import { useSelector, useDispatch } from 'react-redux';
import { setLV, selectLV } from './../database/lvSlice';


function Lv2() {
const dispatch = useDispatch();
const [Nopack, setNopack] = useState(1);

// Log initial state
console.log("Initial Nopack:", Nopack);

// Selectors
const δlv = useSelector((state) => selectLV(state, 'δlv'));
const Wirethicknesslv = useSelector((state) => selectLV(state, 'Wirethicknesslv'));
const n = useSelector((state) => selectLV(state, 'MinLayersPerPacketlv'));
const Nph = useSelector((state) => selectLV(state, 'Nph'));
const Minpacketslv = useSelector((state) => selectLV(state, 'Minpacketslv'));

// Log selector values
console.log("δlv:", δlv);
console.log("Wirethicknesslv:", Wirethicknesslv);
console.log("MinLayersPerPacketlv (n):", n);
console.log("Nph:", Nph);
console.log("Minpacketslv:", Minpacketslv);

useEffect(() => {
  let MinLayersPerPacket = 100 / (Math.pow(δlv, 2) * Wirethicknesslv);
  let parsedN = parseInt(MinLayersPerPacket);
  console.log("Calculated MinLayersPerPacket:", MinLayersPerPacket);
  console.log("Parsed MinLayersPerPacket (n):", parsedN);
  dispatch(setLV({ key: 'MinLayersPerPacketlv', value: parsedN }));
}, [δlv, Wirethicknesslv]);

useEffect(() => {
  let packets = Math.ceil(Nph / n);
  console.log("Calculated packets:", packets);
  dispatch(setLV({ key: 'Minpacketslv', value: packets }));
}, [Nph, n]);

useEffect(() => {
  console.log("Updating Nopack to Minpacketslv:", Minpacketslv);
  setNopack(Minpacketslv);
}, [Minpacketslv]);

let Changepack = (sign) => {
  setNopack(prevNopack => {
    let newNopack = prevNopack;
    if (sign === '+' && prevNopack < 4) newNopack = prevNopack + 1;
    if (sign === '-' && prevNopack > Minpacketslv) newNopack = prevNopack - 1;
    console.log(`Changepack triggered with sign '${sign}':`, {
      prevNopack,
      newNopack,
      Minpacketslv
    });
    return newNopack;
  });

  // Note: This will log the stale value of Nopack due to async state update
  console.log("Current Nopack (before update):", Nopack);
};
  
  return (
    <>
      <div> n= {n.toFixed(2)}</div>
      {Nopack == 2 && <Packets2 />}
      {Nopack == 3 && <Packets3 />}
      {Nopack == 4 && <Packets4 />}
      <div>
        <button onClick={() => Changepack('+')}> increase insulation </button>
        <button onClick={() => Changepack('-')}> decrease insulation </button>
      </div>
    </>
  );
}
export default Lv2;
