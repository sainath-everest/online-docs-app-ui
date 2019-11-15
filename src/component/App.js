import React from 'react';
import '../css/App.css';
import axios from 'axios';
import CurrentDirectory from './current-directory';
import CurrentDcoument from './current-document';
import { stat } from 'fs';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      metaData: [],
      root: {},
      currentLevelDocs : [],
      isDoc : false,
      currentDoc : {},
      currentDirectory : {}
    };
  }
  componentDidMount() {
    axios.get('http://localhost:8080/api/')
      .then(res => {
        console.log(res);
        const metaData = res.data;
        let root;
        for (let i = 0; i < metaData.length; i++) {
          if (metaData[i].parentId == "") {
            root = metaData[i];
          }
        }
        this.state.currentLevelDocs.push(root);

        this.setState({
          metaData: metaData,
          root: root,
          currentDirectory : root
         

        });


      });

  }
  findDocMetadataById(docId){
    console.log("in findDocMetadataById");
    return this.state.metaData.find(
      (doc,index) => doc._id == docId
        
      
    );
  }
   handleClickFolder(doc){
    console.log("in handleClick");
    let docs = [];
    if(doc.children.length>0){
       doc.children.map(
        (docId, index)=>{
            let doc =  this.findDocMetadataById(docId)
            docs.push(doc);
          }
          
    );
   

    }
    this.setState({
      currentLevelDocs: docs,
      currentDirectory : doc

    })

    
}
handleClickDoc(doc){
  console.log("in handleClickDoc");
  this.setState({isDoc : true,currentDoc:doc});
  

}


  render() {
    console.log("dfdfd")
    return (

      <div className="app">
        <div className="app-current-directory">
          {this.state.isDoc ?
            <CurrentDcoument
              doc = {this.state.currentDoc}
            />:
          <CurrentDirectory
          currentLevelDocs={this.state.currentLevelDocs}
          currentDirectory = {this.state.currentDirectory}
          onClick={(doc) =>
              doc.type == 'folder' ? this.handleClickFolder(doc) : this.handleClickDoc(doc)
             
            }
        />
          }
           
        </div>
        
      </div>
    );
  }
}

export default App;
