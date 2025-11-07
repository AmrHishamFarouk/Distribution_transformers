import React, { useState , useEffect } from 'react';
import doublepackets from '../../assets/packets/2packets.png'
import { useSelector, useDispatch } from 'react-redux';
import { setHV, selectHV } from './../../database/hvSlice';

function Packets2() {
    const dispatch = useDispatch();

    const [Partial,setPartial] = useState(true);
    const Firstpackethv = useSelector((state) => selectHV(state, 'Firstpackethv'));
    const Secondpackethv = useSelector((state) => selectHV(state, 'Secondpackethv'));

    const layout = useSelector((state) => selectHV(state, 'Layouthv'));

    useEffect(() => {
        dispatch(setHV({ key: 'Nocollingducthv', value: 1 }));
    }, [dispatch]);

    function ChangePartial(){
        setPartial(prev => !prev);
    };
    
    function updatefirstpacket(value){
        dispatch(setHV({ key: 'Firstpackethv', value: value }));
    };
    function updatesecondpacket(value){
        dispatch(setHV({ key: 'Secondpackethv', value: value }));
    };   

    useEffect(() => {
        const duct = Partial ? "partial" : "decreased";
        const Packets = [
            { duct1: "no", duct2: duct, layers: Firstpackethv },
            { duct1: duct, duct2: "partial", layers: Secondpackethv }
        ]
        dispatch(setHV({ key: 'Layouthv', value: Packets }));
    }, [Firstpackethv, Secondpackethv, Partial, dispatch]); 

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
                        <input name="myInput" placeholder="layers" onChange={(e) => updatesecondpacket(parseFloat(e.target.value))}/>
                    </div>
                </div>
                <div><img src={doublepackets} alt='two packets'/></div>
                <button onClick={() => ChangePartial()}>{Partial ? 'Partial' : 'Decreased'}</button>
            </div>
            <pre>{JSON.stringify(layout, null, 2)}</pre>
        </>
    );
}
export default Packets2;