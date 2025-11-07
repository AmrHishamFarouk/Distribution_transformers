import React, { useState, useEffect } from 'react';
import { setLV, selectLV } from './../../database/lvSlice';
import { useSelector, useDispatch } from 'react-redux';

function Temperaturelv() {
    const dispatch = useDispatch();
    const Layoutlv = useSelector((state) => selectLV(state, 'Layoutlv'));
    const Hmech = useSelector((state) => selectLV(state, 'Hmechlv'));
    const Wiretypelv = useSelector((state) => selectLV(state, 'Wiretypelv'));

    // for the W variables
    const Csalv = useSelector((state) => selectLV(state, 'Csalv'));
    const Wirelengthlv = useSelector((state) => selectLV(state, 'Wirelengthlv'));
    const Eddylv = useSelector((state) => selectLV(state, 'Eddylv'));
    const δlv = useSelector((state) => selectLV(state, 'δlv'));
    
    const w = 22 * (Csalv / Wirelengthlv) * (1 + (Eddylv / 100)) * (Math.pow(2, δlv));

    const WireInsulation = useSelector((state) => selectLV(state, 'WireInsulation'));
    const Noinslv = useSelector((state) => selectLV(state, 'Noinslv'));

    const [temperature, setTemperature] = useState([]);

    useEffect(() => {
        const newTemperatureReadings = [];

        Layoutlv.forEach((packet, index) => {
            let n = packet.layers;
            
            // calculation of F1 and F2
            let f1, f2, r1, r2, r;
            if (Wiretypelv === 'Flat') {
                f1 = 1;
                f2 = 1;
            } else {
                f1 = packet.duct1 === "no" ? 0.33 : packet.duct1 === "partial" ? 0.67 : packet.duct1 === "decreased" ? 0.5 : 0;
                f2 = packet.duct2 === "no" ? 0.33 : packet.duct2 === "partial" ? 0.67 : packet.duct2 === "decreased" ? 0.5 : 0;
            }
            
            // Calculation of R1
            if (index === 0) {
                r1 = (1 + (2 * 2 * 0.13) + WireInsulation) / 200;
            } else {
                r1 = (WireInsulation) / 200;
            }
            r2 = (Noinslv + 0.1) / 200;
            r = Noinslv / 200;

            let co = 39 * (1.05 - (0.1 * Hmech)) * Math.pow((((n * w) / 4) * ((1 / f1) + (1 / f2))), (1 / 8));
            let w1 = w * (((n / (f2 * co)) + ((n * r2) / f2) + ((n * (n - 1) * r) / 2)) / ((1 / (f1 * co)) + (1 / (f2 * co)) + (r1 / f1) + (r2 / f2) + ((n - 1) * r)));
            let ktemp = w1 / w;
            let k = 0;
            let decimalPart = ktemp - parseInt(ktemp);
            if (decimalPart > 0.1) {
                k = (ktemp | 0) + 1;
            } else {
                ktemp < 1 ? k = 1 : k = parseInt(ktemp);
            }
            let sub1 = ((k * (k - 1)) / 2) - (((n - k) * (n - k - 1)) / 2);
            let sub2 = (((n) * (n - k) * (n - k - 1)) / 2) - ((1 / 6) * (((k) * (k - 1) * (k + 1)) + ((n - k) * (n - k - 1))));
            let temp = ((w1 / n) * (k * ((1 / (co * f1)) + (r1 / f1)) - ((n - k) * ((1 / (co * f2)) + (r2 / f2))) + (r * (sub1)))) + ((w / n) * (((n * (n - k)) / (co * f2)) + ((n * (n - k) * r2) / f2) + (r * sub2)));
            
            newTemperatureReadings.push({ co: co, w1: w1, ktemp: ktemp, k: k, temp: temp });
        });

        setTemperature(newTemperatureReadings);
    }, [Layoutlv, Hmech, Wiretypelv, Csalv, Wirelengthlv, Eddylv, δlv, WireInsulation, Noinslv, w]);

    return (
        <>
    Hmech = {Hmech}
    Wiretypelv = {Wiretypelv} 

    Csalv = {Csalv}
    Wirelengthlv = {Wirelengthlv}
    Eddylv = {Eddylv}
    δlv = {δlv}
        w={w}
            <h1>Temperaturelv</h1>
            <pre>{JSON.stringify(temperature, null, 2)}</pre>
        </>
    );
}

export default Temperaturelv;