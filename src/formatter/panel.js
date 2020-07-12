import React, { useState } from 'react';
import MultiLineText from './multiLineText';

function Panel(props) {
  const [values, setValues] = useState(props.components.map((c) => ({ contentType: c.contentType, title: c.title, value: '' })));

  function changed(indx, contentType, value) {
    const newValues = [...values];
    newValues[indx].value =value;
    setValues(newValues);
    props.changed({title: props.title, value: newValues});
  }

  function getComponent(comp, id, indx) {
    return (
      <MultiLineText
        key={indx}
        id={id}
        indx={indx}
        title={comp.title}
        changed={(value) => changed(indx, comp.contentType, value)}
      ></MultiLineText>
    );
  }
  return (
    <div key={props.indx}>
      <h3>{props.title}</h3>
      <div className='d-flex-col'>{props.components.map((c, indx) => getComponent(c, 'p-' + props.indx + '-c', indx))}</div>
    </div>
  );
}

export default Panel;
