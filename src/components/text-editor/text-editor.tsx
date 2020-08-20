import React from 'react';
import { Input, Button } from 'antd';

import './text-editor.css';
import { WispApi } from '../../services/wisp-api';

const { TextArea } = Input;

class TextEditor extends React.Component {

  render() {
    return (
      <div className="text-editor">
        <Input placeholder="Title" allowClear maxLength={64} />
        <TextArea placeholder="Enter your secret note" rows={5} />
        <Button type="primary" onClick={this.onSubmit}>Submit</Button>
      </div>
    )
  }

  onSubmit() {
    const wispApi = new WispApi();
    wispApi.writeData('Hello world!');
  }
}

export default TextEditor;