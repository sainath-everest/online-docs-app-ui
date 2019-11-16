import React, { Menu } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import '../css/document-action.css'
// import ContextMenuTrigger from '../../node_modules/react-contextmenu/modules/ContextMenuTrigger';
// import ContextMenu from '../../node_modules/react-contextmenu/modules/ContextMenu';
import {MenuItem,ContextMenuTrigger,ContextMenu} from 'react-contextmenu';

class DocumentAction extends React.Component{
  constructor(props) {
    super(props);

  }

  render(){
    return (
      <div style = {{display:"inline-block"}}>
        <ContextMenuTrigger id= "docMenu" className = "docMenu" holdToDisplay={1000}>
         
          <button className="button" onClick = {this.props.onClick}>
              {this.props.value}
              {this.props.currentDoc.type == 'folder' ?
                (
                  <i class="fa fa-folder-o"></i>
                )
                :
                (
                  <i class="fa fa-file-word-o"></i>
                )}
          </button>
  
          
           
                      
        </ContextMenuTrigger>
        <ContextMenu id="docMenu">
           <MenuItem onClick = {()=>{
            console.log("hello world")
           }} data={{"option" : "delete"}}>Delete</MenuItem>
            <MenuItem onClick = {this.props.menuClick} data={{"option" : "rename"}}>Rename</MenuItem>
         </ContextMenu>
  
      </div>
      
  
    );

  }
  
}
export default DocumentAction;