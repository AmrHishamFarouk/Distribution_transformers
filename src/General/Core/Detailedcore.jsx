import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setGeneral, selectGeneral} from '../../database/generalSlice';

function Detailedcore() {
  const dispatch = useDispatch();

  function updateW1(value){
      dispatch(setGeneral({ key: 'W1', value: value}));
    };
    function updateW2(value){
      dispatch(setGeneral({ key: 'W2', value: value}));
    };
    function updateW3(value){
      dispatch(setGeneral({ key: 'W3', value: value}));
    };
    function updateW4(value){
      dispatch(setGeneral({ key: 'W4', value: value}));
    };
    function updateL1(value){
      dispatch(setGeneral({ key: 'L1', value: value}));
    }
    function updateL2(value){
      dispatch(setGeneral({ key: 'L2', value: value}));
    }
    function updateL3(value){
      dispatch(setGeneral({ key: 'L3', value: value}));
    }
    function updateL4(value){
      dispatch(setGeneral({ key: 'L4', value: value}));
    }
    function updateCsacore(value){
      dispatch(setGeneral({ key: 'Csacore', value: value}));
    };
    function updateTotalstacking(value){
      dispatch(setGeneral({ key: 'Totalstacking', value: value}));
    };



//         useEffect(() => {
//           let CoreAspectRatio = Totalstacking/W1;
//                 dispatch(setLV({ key: 'CoreAspectRatio', value: CoreAspectRatio}));
//         }, [Totalstacking , W1 ]);
 
 //carefull of this function when changing w1 in the quick setup
        // useEffect(() => {
        //   let CoreArea = (L1*W1)+(2*L2*W2)+(2*L3*W3)+(2*L4*W4);
        //   dispatch(setLV({ key: 'Csacore', value: CoreArea}));
        // }, [L1,W1,L2,W2,L3,W3,L4,W4];
       
        // //see if it is net or real area
        // useEffect(() => {
        //   let fluxdensity = (400/root3)/(4.44*Nphlv*Corearea*0.000001)
        //   dispatch(setLV({ key: 'B', value: fluxdensity}));
        // }, [Csacore];
       
 
  return (
    // <>

    //   <div>
    //     <div>
        
    //     <div>
    //     required deltacore = {Requiredcsacore}
    //     </div>
    //     <div>
    //     required B = 1.6
    //     </div>
    //     <div>
    //     current deltacore = {Csacore}
    //     </div>
    //     <div>
    //     current B = {B}
    //     </div>
        
          <div>
          
            <div>
              <label>L1</label>
              <input name="myInput" onChange={(e) => updateL1(parseFloat(e.target.value))}/>
            </div>
            
            <div>
              <label>L2</label>
              <input name="myInput" onChange={(e) => updateL2(parseFloat(e.target.value))}/>
            </div>
            
            <div>
              <label>L3</label>
              <input name="myInput" onChange={(e) => updateL3(parseFloat(e.target.value))}/>
            </div>

            <div>
              <label>L4</label>
              <input name="myInput" onChange={(e) => updateL4(parseFloat(e.target.value))}/>
            </div>

            <div>
              <label>W1</label>
              <input name="myInput" onChange={(e) => updateW1(parseFloat(e.target.value))}/>
            </div>

            <div>
              <label>W2</label>
              <input name="myInput" onChange={(e) => updateW2(parseFloat(e.target.value))}/>
            </div>

            <div>
              <label>W3</label>
              <input name="myInput" onChange={(e) => updateW3(parseFloat(e.target.value))}/>
            </div>

            <div>
              <label>W4</label>
              <input name="myInput" onChange={(e) => updateW4(parseFloat(e.target.value))}/>
            </div>
  
          </div>

    //     </div>

    //     <img src={foilwire} alt="foil CSA imgage missed" />
    //   </div>
    // </>
  );
}

export default Detailedcore;