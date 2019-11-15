import React from 'react';
import axios from 'axios';
import DocumentAction from './document-action';

class CurrentDirectory extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      docType: "folder",
      docName : "",
      updatedCurrentLevelDocs: this.props.currentLevelDocs
    };
 
  }

  handleSelectChange = (event) => {
    this.setState({docType: event.target.value});
  }
  handleSubmit = (event) => {
    let newDoc = 
    {
      "title" : this.state.docName,
      "type" : this.state.docType,
      "parentId" : this.props.currentDirectory._id
     

    }
    axios.post('http://localhost:8080/api/document',newDoc).then( (res) => {
       let docs = this.props.currentLevelDocs;
       docs.push(res.data);
       this.setState({updatedCurrentLevelDocs : docs})
    })
    event.preventDefault();
  }
  handleInputChange = (event) => {
    this.setState({docName: event.target.value});
  }


    renderUserDocument(doc) {
        return (
         
          <DocumentAction
            value={doc.title}
            onClick={() => this.props.onClick(doc)}
            currentDoc = {doc}
          />
        );
      }
  render() {
    return (
    
      <div>
          <ul>
            {
                this.props.currentLevelDocs.map((doc, index)=>
                  this.renderUserDocument(doc))
                  
            }
        </ul>
        
        <div>
        <form onSubmit={this.handleSubmit}>
        <label>
          Doc/Folder Name:
          <input
            name="fileName"
            type="text"
            onChange={this.handleInputChange} />
        </label>

          <select value={this.state.docType} onChange={this.handleSelectChange}>
              <option value="folder">folder</option>
              <option value="document">document</option>
          </select>
        
        <input type="submit" value="Create" />
      </form>

        </div>
   
    </div>
   
     
    );
  }

}

export default CurrentDirectory;
