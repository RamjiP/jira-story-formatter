import React, { useState } from 'react';
import './App.css';
import config from './formatter/config';
import Panel from './formatter/panel';
import contentTypes from './formatter/contentTypes';
import Scenarios from './formatter/scenario';
import HtmlViewer from './viewer/htmlViewer';

function App() {
  const initialValues = config.content.map(c => []);
  const [ formValues, setFormValues ] = useState(initialValues);

  function valueChanged(indx, changedValue) {
    const newValues = [...formValues];
    newValues[indx] = changedValue;
    setFormValues(newValues);
  }

  function getComponent(c, indx) {
    if (c.contentType === contentTypes.PANEL) {
      return <Panel title={c.title} key={indx} indx={indx} components={c.components} changed={(values) => valueChanged(indx, values)}></Panel>;
    }

    return <Scenarios id={'s-' + indx} key={indx} indx={indx} changed={(values) => valueChanged(indx, values)}></Scenarios>
  }
  return (
    <div className="d-flex-row">
      <div className="d-flex-col">
      {
        config.content.map((c, indx) => getComponent(c, indx))
      }
      </div>
      <HtmlViewer formValues={formValues}></HtmlViewer>
    </div>
  );
}

export default App;
