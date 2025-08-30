import React from 'react';
import Foilheight from './HEIGHTS/Foilheight';
import Flatheight from './HEIGHTS/Flatheight';
import Roundheight from './HEIGHTS/Roundheight';
import { useSelector, useDispatch } from 'react-redux';
import { setHV, selectHV } from './../database/hvSlice';

function Heighthv() {
  const dispatch = useDispatch();

  const Wiretypehv = useSelector((state) => selectHV(state, 'Wiretypehv'));
  return (
    <>
      {Wiretypehv == 'Flat' && <Flatheight/>}
      {Wiretypehv == 'Round' && <Roundheight/>}
      {Wiretypehv == 'Foil' && <Foilheight/>}
    </>
  );
}
export default Heighthv;
