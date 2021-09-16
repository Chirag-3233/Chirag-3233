// import React from 'react';
// 
// class Input extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { text: '', inputText: '', mode: 'view' };
// 
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSave = this.handleSave.bind(this);
//         this.handleEdit = this.handleEdit.bind(this);
//     }
//     handleChange(e) {
//         console.log("text", this.state.text)
//         console.log("inputText", this.state.inputText)
// 
//         console.log("e", e)
//         this.setState({ inputText: e.target.value });
//     }
// 
//     handleSave() {
//         console.log("mode",this.state.mode)
//         this.setState({ text: this.state.inputText, mode: 'view' });
//     }
// 
//     handleEdit() {
//         this.setState({ mode: 'edit' });
//     }
// 
//     renderInputField() {
//         if (this.state.mode === 'view') {
//             return <div></div>;
//         } else {
//             return (
//                 <p>
//                     <input
//                         onChange={this.handleChange}
//                         value={this.state.inputText}
//                     />
//                 </p>
//             );
//         }
//     }
// 
//     renderButton() {
//         if (this.state.mode === 'view') {
//             return (
//                 <button onClick={this.handleEdit}>
//                     Edit
//                 </button>
//             );
//         } else {
//             return (
//                 <button onClick={this.handleSave}>
//                     Save
//                 </button>
//             );
//         }
//     }
// 
//     render() {
//         return (
//             <div>
//                 <p>Text: {this.state.text}</p>
//                 {this.renderInputField()}
//                 {this.renderButton()}
//             </div>
//         );
//     }
// }
// 
// export default Input

import React, { useState } from 'react';

const Input = () => {

    const [text, setText] = useState('');
    const [inputText, setinputText] = useState('');
    const [mode, setmode] = useState('view');

    const handleChange = (e) => {
        setinputText(e)
        console.log('inputText', inputText)
        // this.setState({ inputText: e.target.value });
    }

    const handleSave = () => {
        console.log("text", text)
        console.log("inputtext", inputText)
        setText(text)
        setinputText(inputText)
        setmode('view')

        // this.setState({ text: this.state.inputText, mode: 'view' });
    }

    const handleEdit = () => {
        setmode('edit')
        // this.setState({ mode: 'edit' });
    }
    const RenderInput = () => {
        if (mode === 'view') {
            return <div></div>;
        } else {
            return (
                <p>
                    <input
                        onChange={handleChange}
                        value={inputText}
                    />
                </p>
            );
        }
    }

    const renderButton = () => {
        if (mode === 'view') {
            return (
                <button onClick={handleEdit}>
                    Edit
                </button>
            );
        } else {
            return (
                <button onClick={handleSave}>
                    Save
                </button>
            );
        }
    }
    return (
        <div>
            <p>Text: {text}</p>
            {RenderInput()}
            {renderButton()}
        </div>
    );
}

export default Input;
