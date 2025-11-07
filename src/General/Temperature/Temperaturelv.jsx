import React, { useState } from 'react';
import { setLV, selectLV } from './../database/lvSlice';
import { useSelector, useDispatch } from 'react-redux';

function Temperaturelv(){
    const dispatch = useDispatch();
    const Layoutlv = useSelector((state) => selectLV(state, 'Layoutlv'));
    const Hmech = useSelector((state) => selectLV(state, 'Hmechlv'));
    const Wiretypelv = useSelector((state) => selectLV(state, 'Wiretypelvlv'));

    //for thw W variables
    const Csalv = useSelector((state) => selectLV(state, 'Csalv'));
    const Wirelengthlv = useSelector((state) => selectLV(state, 'Wirelengthlv'));
    const Eddylv = useSelector((state) => selectLV(state, 'Eddylv'));
    const δlv = useSelector((state) => selectLV(state, 'δlvlv'));
    const w = 22*(Csalv/Wirelengthlv)*(1+(Eddylv/100))*(Math.pow(2, δlv));
    
    const Noinslv = useSelector((state) => selectLV(state, 'Noinslvlv'));

    const [temperature, setTemperature] = useState([]);

        const addTemperatureReading = (newco, neww1, newktemp, newk, newtemp) => {
        const newEntry = {co:newco, w1:neww1, ktemp:newktemp, k:newk, temp:newtemp};
        setTemperature(prevTemp => {
            return [...prevTemp, newEntry]; 
        });
    };

    Layoutlv.forEach((packet, index) => {
        let n = packet.layers;
        //calculation of F1 and F2
        let f1,f2;
        if(Wiretypelv == 'Flat'){
            f1 = 1;
            f2 = 1;
        }else{
            f1 = packet.duct1 === "no" ? 0.33 :packet.duct1 === "partial" ? 0.67 :packet.duct1 === "decreased" ? 0.5 :0;
            f2 = packet.duct2 === "no" ? 0.33 :packet.duct2 === "partial" ? 0.67 :packet.duct2 === "decreased" ? 0.5 :0;
        }
        //Calculation of R1
        if(index == 0){
            r1 = (1+(2*2*0.13)+WireInsulation)/200;
        }else{
            r1 = (WireInsulation)/200;
        }
        r2 = (Noinslv+0.1)/200;
        r = Noinslv/200;

        let co = 39 * (1.05 - (0.1 * Hmech)) * Math.pow((((n * w) / 4) * ((1 / f1) + (1 / f2))), (1 / 8));
        let w1 = w*(( (n/(f2*co)) + ((n*r2)/f2) + ((n*(n-1)*r)/2) ) / ( (1/(f1*co)) +(1/(f2*co)) + (r1/f1) + (r2/f2) + ((n-1)*r) ));
        let ktemp = w1 / w;
        let k = 0;
        let decimalPart = ktemp - parseInt(ktemp);
        if(decimalPart>0.1){
            k = (ktemp | 0) + 1;
        }else{
            ktemp<1? k=1 : k = parseInt(ktemp);
        }
        let sub1 = ((k*(k-1))/2) - (((n-k)*(n-k-1))/2);
        let sub2 = (((n)*(n-k)*(n-k-1))/2) - ( (1/6) *( ((k)*(k-1)*(k+1)) + ( (n-k)*(n-k-1) )) );
        let temp = ((w1/n)*( k*( (1/(co*f1)) + (r1/f1) ) - ((n-k)*( (1/(co*f2)) + (r2/f2) )) + (r*(sub1)))) + ((w/n)*( ((n*(n-k))/(co*f2)) + ((n*(n-k)*r2)/f2) + (r*sub2) ));
        addTemperatureReading(co, w1, ktemp, k, temp);
    });
    
    dispatch(setLV({ key: 'Iphlv', value: Iph}));
    return(
    <>
        <pre>{JSON.stringify(temperature, null, 2)}</pre>
    </>
)}
export default Temperaturelv;