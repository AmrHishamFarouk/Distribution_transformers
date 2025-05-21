import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setGeneral, selectGeneral} from './../database/generalSlice';

function Quickcore(){           
    const dispatch = useDispatch();

    function updateTotalstacking(value){
      dispatch(setGeneral({ key: 'Totalstacking', value: value}));
    };

    function updateW1(value){
      dispatch(setGeneral({ key: 'W1', value: value}));
    };
 
  function updateCsacore(value){
      dispatch(setGeneral({ key: 'Csacore', value: value}));
    };

    return(
        <>
        <div>
            {/* <div>
            required deltacore = {Requiredcsacore}
        </div>
        <div>
            required B = 1.6
        </div>
        <div>
            current deltacore = {Csacore}
        </div>
        <div>
            current B = {B}
        </div> */}
            <div>
              <label>total stacking</label>
              <input name="myInput" onChange={(e) => updateTotalstacking(parseFloat(e.target.value))}/>
            </div>
         
             <div>
              <label>largest width</label>
              <input name="myInput" onChange={(e) => updateW1(parseFloat(e.target.value))}/>
            </div>
        
              <div>
              <label>core area net</label>
              <input name="myInput" onChange={(e) => updateCsacore(parseFloat(e.target.value))}/>
            </div>
        </div>
        {/* <img src=''/> */}
        </>
    )
}
export default Quickcore;