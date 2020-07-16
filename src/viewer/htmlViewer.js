import React from 'react';
import contentTypes from '../formatter/contentTypes';
import config from '../formatter/config';

function ListView(props) {
  switch (props.contentType) {
    case contentTypes.UNORDERED_LIST:
      return <ul>{props.value ? props.value.split('\n\n').map((v, indx) => <li key={indx}>{v.split('\n').map(l => <span>{l}<br/></span>)}</li>) : null}</ul>;
    case contentTypes.ORDERED_LIST:
      return <ol>{props.value ? props.value.split('\n\n').map((v, indx) => <li key={indx}>{v.split('\n').map(l => <span>{l}<br/></span>)}</li>) : null}</ol>;
    default:
      return <span>{props.value ? props.value : null}</span>;
  }
}

function MultiTextView(props) {
  return (
    <div className='text'>
      {props.title ? <div className='title'>{props.title} </div> : null}
      <ListView contentType={props.contentType} value={props.value}></ListView>
    </div>
  );
}

function PanelView(props) {
  return (
    <div className='panel'>
      <div className='header' style={{ background: config.panel.title.background }}>
        {props.title}
      </div>
      {props.value ? props.value.map((c, indx) => (
        <MultiTextView title={c.title} key={indx} contentType={c.contentType} value={c.value}></MultiTextView>
      )): null}
    </div>
  );
}

function getMultiLineTextContent(value) {
    let content = value.title ? `*${value.title}*\n`: '';
    let join = '';
    switch(value.contentType) {
        case contentTypes.ORDERED_LIST:
            join = '# ';
            break;
        case contentTypes.UNORDERED_LIST:
            join = '* ';
            break;
        default:
            join = '';
            break;
    }
    for(const val of value.value.split('\n\n')) {
        content += `${join}${val}\n\n`;
    }
    return content;
}

function getPanelContent(value) {
    let content = ''
    content += `{panel:title=${value.title}|borderStyle=${config.panel.border.style}|titleBGColor=${config.panel.title.background}}\n`;
    for(const v of value.value) {
        content += getMultiLineTextContent(v);
    }
    content += '{panel}\n';
    return content;

}
function getJiraContent(formValues) {
    let content = ''
    for(const fv of formValues) {
        if (fv.value) {
            content += getPanelContent(fv);
        } else if (fv.length) {
            for(const v of fv) {
                content+= getPanelContent(v);
            }
        }
    }
    return content;
}

function copyText() {
     /* Get the text field */
  var copyText = document.getElementById("result");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");
}

function HtmlViewer(props) {
  console.log(props.formValues);
  return (
    <div style={{ 'alignSelf': 'flex-start', 'flex': '1 auto', 'padding': '8px' }}>
      {props.formValues.map((value, indx) => {
        return value.value ? (
          <PanelView key={indx} title={value.title} value={value.value}></PanelView>
        ) : value.length ? (
          value.map((v, i) => <PanelView key={indx + '-' + i} title={v.title} value={v.value}></PanelView>)
        ) : null;
      })}
      <button style={{width:'auto'}} onClick={() => copyText()}>Copy text</button>
      <textarea id='result' value={getJiraContent(props.formValues)} rows="25" style={{'width': '100%'}} readOnly></textarea>
    </div>
  );
}

export default HtmlViewer;
