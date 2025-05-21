import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSpec, selectSpec} from './../database/specsSlice';
import Quickcore from './Quickcore';
import Detailedcore from './Detailedcore';

function Core(){
    let [simpleCore, setsimpleCore] = useState(true);
    
    return(
    <>
    <div>
        <button onClick={() => setsimpleCore(true)}> Simple Core </button>
        <button onClick={() => setsimpleCore(false)}> Detailed Core </button>
    </div>
    
    {simpleCore == true && <Quickcore />}
    {simpleCore == false && <Detailedcore />}
    </>
    )
}
export default Core;

