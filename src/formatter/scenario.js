import React, { useState } from 'react';
import MultiLineText from './multiLineText';
import contentTypes from './contentTypes';

function Scenarios(props) {
  const [useCases, setUseCases] = useState([{ contentType: contentTypes.MULTI_LINE_TEXT, title: '', value: '' }]);

  function triggerChanged(newValues) {
    console.log(newValues);
    props.changed(
      newValues.map((v, indx) => ({
        contentType: contentTypes.PANEL,
        title: 'Scenario ' + (indx + 1) + ': ' + v.title,
        value: [{ contentType: contentTypes.MULTI_LINE_TEXT, title: null, value: v.value }],
      }))
    );
  }

  function addUseCase() {
    const newValues = [...useCases, { contentType: contentTypes.MULTI_LINE_TEXT, title: '', value: '' }];
    setUseCases(newValues);
    triggerChanged(newValues);
  }

  function removeUseCase(index) {
    const newValues = [...useCases];
    newValues.splice(index, 1);
    setUseCases(newValues);
    triggerChanged(newValues);
  }

  function updateValue(indx, value) {
    const newValues = [...useCases];
    newValues[indx].value = value;
    setUseCases(newValues);
    triggerChanged(newValues);
  }

  function updateTitle(indx, value) {
    const newValues = [...useCases];
    newValues[indx].title = value;
    setUseCases(newValues);
    triggerChanged(newValues);
  }

  return (
    <div>
      <h3>Scenarios</h3>
      {useCases.map((uc, indx) => {
        return (
          <div className='d-flex-row' key={indx}>
            {useCases.length > 1 ? <button onClick={() => removeUseCase(indx)}> X </button> : null}
            <div className='d-flex-col'>
              <h5>Scenario {indx + 1}:</h5>
              <input type='text' id={'txt-' + indx} indx={indx} onChange={(e) => updateTitle(indx, e.target.value)} />
              <MultiLineText key={indx} id={'uc-' + indx} indx={indx} changed={(value) => updateValue(indx, value)}></MultiLineText>
            </div>
          </div>
        );
      })}
      <button onClick={() => addUseCase()}>+ Add new scenario</button>
    </div>
  );
}

export default Scenarios;
