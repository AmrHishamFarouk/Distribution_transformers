import React, { useState , useEffect } from 'react';
import quadrapackets from '../../assets/packets/4packets.png'

import { useSelector, useDispatch } from 'react-redux';
import { setHV, selectHV } from './../../database/hvSlice';

function Packets4() {
    const dispatch = useDispatch();
    const Firstpackethv = useSelector((state) => selectHV(state, 'Firstpackethv'));
    const Secondpackethv = useSelector((state) => selectHV(state, 'Secondpackethv'));
    const Thirdpackethv = useSelector((state) => selectHV(state, 'Thirdpackethv'));
    const Fourthpackethv = useSelector((state) => selectHV(state, 'Fourthpackethv'));
    const [First,setFirst] = useState(true);
    const [Second,setSecond] = useState(true);
    const [Third,setThird] = useState(true);

    const layout = useSelector((state) => selectHV(state, 'Layoutlv')); 

    useEffect(() => {
        dispatch(setHV({ key: 'Nocollingducthv', value: 3 }));
    }, [dispatch]); 

    function updatefirstpacket(value){
        dispatch(setHV({ key: 'Firstpackethv', value: value }));
    }
    function updatesecondpacket(value){
        dispatch(setHV({ key: 'Secondpackethv', value: value }));
    }
    function updatethirdpacket(value){
        dispatch(setHV({ key: 'Thirdpackethv', value: value }));
    }    
    function updatefourthpacket(value){
        dispatch(setHV({ key: 'Fourthpackethv', value: value }));
    }     
    
    function Changefirst(){setFirst(prev => !prev);};
    function Changesecond(){setSecond(prev => !prev);};
    function Changethird(){setThird(prev => !prev);};

    useEffect(() => {
        const duct1 = First ? "partial" : "decreased";
        const duct2 = Second ? "partial" : "decreased";
        const duct3 = Third ? "partial" : "decreased";
        const Packets = [
            { duct1: "no", duct2: duct1, layers: Firstpackethv },
            { duct1: duct1, duct2: duct2, layers: Secondpackethv },
            { duct1: duct2, duct2: duct3, layers: Thirdpackethv },
            { duct1: duct3, duct2: "partial", layers: Fourthpackethv },
        ]
        dispatch(setHV({ key: 'Layoutlv', value: Packets })); 
    },[Firstpackethv, Secondpackethv, Thirdpackethv, Fourthpackethv, First, Second, Third, dispatch]); 

    return (
        <>
            <div>No. of layers in each packet</div>

            <div>
                <div>
                    <div>
                        <label>1st packet</label>
                        <input name="myInput" placeholder="layers" onChange={(e) => updatefirstpacket(parseFloat(e.target.value))} />
                    </div>
                    <div>
                        <label>2nd packet</label>
                        <input name="myInput" placeholder="layers" onChange={(e) => updatesecondpacket(parseFloat(e.target.value))} />
                    </div>
                    <div>
                        <label>3rd packet</label>
                        <input name="myInput" placeholder="layers" onChange={(e) => updatethirdpacket(parseFloat(e.target.value))} />
                    </div>
                    <div>
                        <label>4th packet</label>
                        <input name="myInput" placeholder="layers" onChange={(e) => updatefourthpacket(parseFloat(e.target.value))}/>
                    </div>
                </div>
                <img src={quadrapackets} alt='four packets'/>
                <button onClick={() => Changefirst()}>first duct {First ? 'Partial' : 'Decreased'}</button>
                <button onClick={() => Changesecond()}>second duct {Second ? 'Partial' : 'Decreased'}</button>
                <button onClick={() => Changethird()}>third duct {Third ? 'Partial' : 'Decreased'}</button>
            </div>
           <pre>{JSON.stringify(layout, null, 2)}</pre>
        </>
    );
}
export default Packets4;