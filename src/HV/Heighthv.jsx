import React from 'react';
import Foilheight from './HEIGHTS/Foilheight';
import Flatheight from './HEIGHTS/Flatheight';
import Roundheight from './HEIGHTS/Roundheight';
import { useSelector, useDispatch } from 'react-redux';
import { setHV, selectHV } from './../database/hvSlice';

function Heighthv() {
  const dispatch = useDispatch();

  const Wiretypehv = useSelector((state) => selectHV(state, 'Wiretypehv'));
  console.log("Wiretypehv",Wiretypehv);
  return (
    <>
      {Wiretypehv == 'Flat' && <Roundheight/>}
      {Wiretypehv == 'Round' && <Flatheight/>}
      {Wiretypehv == 'Foil' && <Foilheight/>}
    </>
  );
}
export default Heighthv;
