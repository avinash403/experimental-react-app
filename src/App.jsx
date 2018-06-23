import React, { Component } from 'react';
import './App.css';
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/theme/monokai';
import 'brace/ext/language_tools';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      code: '',
      errors:'',
      passedTestCount:'',
      totalTestCount:'' 
    };
  }


  onChange = (value) => {
      this.setState({code:value});
  }

  onLoad = (_editor) => {
      _editor.$blockScrolling = Infinity;
    // console.log('load',newValue);
  }

  onTest = () => {
    //run the code against test cases
  }

  onSubmit = () => {
    //check if all test cases passed and score accordingly
  }

  runCode = () => {
    //one solution is to create it as a temp file and run
  }

  render() {
    return (
      
      <div className="App">
        <h1 className="pull-left"> Write Your code here : </h1>
        
        <div className="codeSpace">
            
            {/* for writing code */}
            <AceEditor
              mode="javascript"
              theme="monokai"
              className="codeEditor"
              name="code"
              onLoad={this.onLoad}
              onChange={this.onChange}
              fontSize={14}
              showPrintMargin={true}
              showGutter={true}
              highlightActiveLine={true}
              value={this.state.code}
              setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true,
                    showLineNumbers: true,
                    tabSize: 2,
                  }}
            />
              
            {/* for code results */}
            <AceEditor
              mode="javascript"
              theme="monokai"
              className="codeResult"
              readOnly={true}
              name="code"
              onLoad={this.onLoad}
              onChange={this.onChange}
              fontSize={14}
              showPrintMargin={true}
              showGutter={true}
              highlightActiveLine={true}
              value={this.state.code}
              setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true,
                    showLineNumbers: true,
                    tabSize: 2,
                  }}
            />      
          </div>    

          <div className="margin-left-10 margin-top-30 btn-group">
            <button className="btn btn-primary" onClick={this.onTest}>
              Run Code
            </button>
            <button className="btn btn-success" onClick={this.onSubmit}>Submit</button>
          </div>
          
      </div>
    );
  }
}


export default App;
