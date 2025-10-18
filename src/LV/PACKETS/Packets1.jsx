import React, { useState , useEffect } from 'react';
import onepacket from '../../assets/packets/1packets.jpeg'
import { useSelector, useDispatch } from 'react-redux';
import { setLV, selectLV } from './../../database/lvSlice';

function Packets1() {
    const dispatch = useDispatch();
    const Firstpacketlv = useSelector((state) => selectLV(state, 'Firstpacketlv'));
    const Layerslv = useSelector((state) => selectLV(state, 'Layerslv'));
    
    const layout = useSelector((state) => selectLV(state, 'Layoutlv'));

    dispatch(setLV({ key: 'Nocollingductlv', value: 0 }));
    dispatch(setLV({ key: 'Firstpacketlv', value: Layerslv }));
    const Packets = [{ duct1: "no", duct2: "partial", layers: Layerslv }]
    dispatch(setLV({ key: 'Layoutlv', value: Packets }));

    useEffect(() => {
    //code here for checking if the no of layers is correct
        }, [Firstpacketlv]); 

  return (
    <>
      <div>No. of layers</div>
      <h3>{Layerslv}</h3>
      <div><img src={onepacket} alt='one packet'/></div>
      <pre>{JSON.stringify(layout, null, 2)}</pre>

    </>
  );
}
export default Packets1;
