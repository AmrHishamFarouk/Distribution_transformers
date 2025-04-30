import React, { useRef } from 'react';
import { setSpec } from './database/specsSlice';
import { useDispatch } from 'react-redux';

function Specs() {
  const dispatch = useDispatch();

  // References for all input fields
  const inputRefs = {
    Ratedpower: useRef(),
    HV: useRef(),
    LV: useRef(),
    Po: useRef(),
    Pcc: useRef(),
    Z: useRef(),
    B: useRef(),
    F: useRef(),
    Δironcore: useRef(),
    Maj: useRef(),
  };

  // Generic function to handle the update
  const updateValues = () => {
    Object.keys(inputRefs).forEach((key) => {
      dispatch(setSpec({ key, value: parseFloat(inputRefs[key].current.value) }));
    });
  };

  // Configuration for input fields
  const inputConfig = [
    { key: 'Ratedpower', label: 'Rated Power', placeholder: 'kVA', defaultValue: '1000'},
    { key: 'HV', label: 'H.V.', placeholder: 'kV', defaultValue: '10.5' },
    { key: 'LV', label: 'L.V.', placeholder: 'kV', defaultValue: '0.4' },
    { key: 'Po', label: 'Po', placeholder: 'kVA', defaultValue: '1.25' },
    { key: 'Pcc', label: 'Pcc', placeholder: 'kVA', defaultValue: '24' },
    { key: 'Z', label: 'Z%', placeholder: '%', defaultValue: '4' },
    { key: 'B', label: 'Flux Density (B)', placeholder: 'B', defaultValue: '1.6' },
    { key: 'F', label: 'Frequency', placeholder: 'Hz', defaultValue: '50' },
    { key: 'Δironcore', label: 'Δironcore', placeholder: 'mm^2',defaultValue: '44508' },
    { key: 'Maj', label: 'Maj', placeholder: 'Maj', defaultValue: '5' },
  ];

  return (
    <div>
      <h1>Specifications</h1>
      <h2>Dyn11</h2>
      <div>
        {inputConfig.map(({ key, label, placeholder, defaultValue }) => (
          <div key={key}>
            <label>{label}</label>
            <input
              ref={inputRefs[key]}
              placeholder={placeholder}
              defaultValue={defaultValue}
            />
          </div>
        ))}
      </div>
      <button onClick={updateValues}>Update Specs</button>
    </div>
  );
}

export default Specs;
