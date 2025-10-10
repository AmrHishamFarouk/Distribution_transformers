import React, { useState } from 'react';
import Foilheight from './HEIGHTS/Foilheight';
import Flatheight from './HEIGHTS/Flatheight';
import Roundheight from './HEIGHTS/Roundheight';
import { useSelector, useDispatch } from 'react-redux';
import { setLV, selectLV } from './../database/lvSlice';

function Heightlv() {
  const dispatch = useDispatch();

  const Wiretypelv = useSelector((state) => selectLV(state, 'Wiretypelv'));

  return (
    <>
      {Wiretypelv == 'Flat' && <Flatheight/>}
      {Wiretypelv == 'Round' && <Roundheight/>}
      {Wiretypelv == 'Foil' && <Foilheight/>}
    </>
  );
}
export default Heightlv;
