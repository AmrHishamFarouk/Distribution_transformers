import React, { useEffect,useState } from 'react';
import Packets1 from './PACKETS/Packets1';
import Packets2 from './PACKETS/Packets2';
import Packets3 from './PACKETS/Packets3';
import Packets4 from './PACKETS/Packets4';
import { useSelector, useDispatch } from 'react-redux';
import { setLV, selectLV } from './../database/lvSlice';

function Lv2() {
const dispatch = useDispatch();
const [Nopack, setNopack] = useState(1);

const δlv = useSelector((state) => selectLV(state, 'δlv'));
const Wirethicknesslv = useSelector((state) => selectLV(state, 'Wirethicknesslv'));
const n = useSelector((state) => selectLV(state, 'MinLayersPerPacketlv'));
const Nph = useSelector((state) => selectLV(state, 'Nph'));
const Minpacketslv = useSelector((state) => selectLV(state, 'Minpacketslv'));


useEffect(() => {
  let MinLayersPerPacket = 100 / (Math.pow(δlv, 2) * Wirethicknesslv);
  let parsedN = parseInt(MinLayersPerPacket);
  dispatch(setLV({ key: 'MinLayersPerPacketlv', value: parsedN }));
}, [δlv, Wirethicknesslv]);


useEffect(() => {
  let packets = Math.ceil(Nph / n);
  dispatch(setLV({ key: 'Minpacketslv', value: packets }));
  setNopack(Minpacketslv);
}, [Nph, n,Minpacketslv]);

let Changepack = (sign) => {
  setNopack(prevNopack => {
    let newNopack = prevNopack;
    if (sign === '+' && prevNopack < 4) newNopack = prevNopack + 1;
    if (sign === '-' && prevNopack > 1) newNopack = prevNopack - 1;
    return newNopack;
  });
};
  
  return (
    <>
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
export default Lv2;
