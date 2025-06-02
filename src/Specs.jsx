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
    F: useRef(),
    Maj: useRef(),
  };

  // Generic function to handle the update
const updateValues = () => {
  Object.keys(inputRefs).forEach((key) => {
    if (inputRefs[key].current) { // Ensure the reference exists
      dispatch(setSpec({ key, value: parseFloat(inputRefs[key].current.value) }));
    } else {
      console.warn(`Input reference for ${key} is undefined.`);
    }
  });
};

  // Configuration for input fields
  const inputConfig = [
    { key: 'Ratedpower', label: 'Rated Power', placeholder: 'kVA', defaultValue: '1000'},
    { key: 'HV', label: 'H.V.', placeholder: 'kV', defaultValue: '10.5' },
    { key: 'LV', label: 'L.V.', placeholder: 'kV', defaultValue: '0.4' },
    { key: 'Po', label: 'Po', placeholder: 'kVA', defaultValue: '1.222' },
    { key: 'Pcc', label: 'Pcc', placeholder: 'kVA', defaultValue: '9.450' },
    { key: 'Z', label: 'Z%', placeholder: '%', defaultValue: '5' },
    { key: 'F', label: 'Frequency', placeholder: 'Hz', defaultValue: '50' },
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
