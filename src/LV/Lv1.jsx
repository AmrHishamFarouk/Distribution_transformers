import Flat from './WIRES/Flat';
import Foil from './WIRES/Foil';
import Round from './WIRES/Round';
import React, { useEffect } from 'react';
import './../CSS/LV/Lv1.css'
import { useSelector, useDispatch } from 'react-redux';
import { selectSpec} from './../database/specsSlice';
import { setLV, selectLV } from './../database/lvSlice';

function Lv1() {
  const dispatch = useDispatch();
  const Ratedpower = useSelector((state) => selectSpec(state, 'Ratedpower'));
  const LV = useSelector((state) => selectSpec(state, 'LV'));
  const Wiretypelv = useSelector((state) => selectLV(state, 'Wiretypelv'));

  let Iph = (Ratedpower)/((Math.sqrt(3))*LV);
  dispatch(setLV({ key: 'Iphlv', value: Iph}));
  const Iphlv = useSelector((state) => selectLV(state, 'Iphlv'));

  const ChangeWire = (wire) => {
    dispatch(setLV({ key: 'Wiretypelv', value: wire})); 
  };
  const Csalv = useSelector((state) => selectLV(state, 'Csalv'));

        useEffect(() => {
          let δlv =  Iphlv/Csalv;
          dispatch(setLV({ key: 'δlv', value: δlv}));
          barsSelection();
        }, [Csalv, Iphlv]); 

  const δlv = useSelector((state) => selectLV(state, 'δlv'));

function barsSelection() {
  let reqBarArea = Iphlv / 4.5;
  let barsArea = [160, 250, 360, 490, 640];
  let barThickness = [4, 5, 6, 7, 8];

  for (let index = 0; index < barsArea.length; index++) {
    let area = barsArea[index];
    if (area > reqBarArea) {
      dispatch(setLV({ key: "Barslv", value: barThickness[index] }));
      console.log(barThickness[index]);
      break;
    }
  }
}

  return (
      <>
  <h1>L.V. winding</h1>
  <div>Iline = Iph = {Iphlv.toFixed(4)}</div>

  <h1>Please choose the type of wire</h1>
  <div>
    <button onClick={() => ChangeWire('Foil')}>Foil</button>
    <button onClick={() => ChangeWire('Flat')}>Flat</button>
    {/* <button onClick={() => ChangeWire('Round')}>Round</button> */}
  </div>

  <div>
    {Wiretypelv === 'Foil' && <Foil />}
    {Wiretypelv === 'Flat' && <Flat />}
    {Wiretypelv === 'Round' && <Round />}
    <div>δ = {δlv.toFixed(4)}</div>
  </div>
</>
  );
}
export default Lv1;
