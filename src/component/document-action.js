import React, { Menu } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import '../css/document-action.css'

const DocumentAction = function DocumentAction(props) {
  
  return (
    <button className="button" onClick={props.onClick}>
      {props.value}
      {props.currentDoc.type == 'folder' ?
        (
          <i class="fa fa-folder-o"></i>
        )
        :
        (
          <i class="fa fa-file-word-o"></i>
        )}
    </button>

  );
}
export default DocumentAction;