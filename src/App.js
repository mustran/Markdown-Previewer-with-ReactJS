import React, { Component } from "react";
import Input from "./components/input";
import Output from "./components/output";
import styles from "./App.module.css";

const placeholder = `# Front End Libraries Projects - Build a Markdown Previewer

## Objective: Build a CodePen.io app that is functionally similar to this: 
### Fulfill the below user stories and get all of the tests to pass. Give it your own personal style.
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
**User Story #1:** I can see a \`textarea\` element with a corresponding id="editor".

**User Story #2:** I can see an element with a corresponding \`id="preview"\`.

**User Story #3:** When I enter text into the #editor element, the \`#preview\` element is updated as I type to display the content of the textarea.

**User Story #4:** When I enter GitHub flavored markdown into the \`#editor\` element, the text is rendered as HTML in the #preview element as I type (HINT: You don't need to parse Markdown yourself - you can import the Marked library for this: https://cdnjs.com/libraries/marked).
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [https://codepen.io/freeCodeCamp/full/GrZVVO](https://codepen.io/freeCodeCamp/full/GrZVVO), and
> Block Quotes!!!

And if you want to get really crazy, even tables:

| Currency Unit       |       Amount       |
|---------------------|:------------------:|
| Penny               |    $0.01 (PENNY)   |
| Nickel              |   $0.05 (NICKEL)   |
| Dime                |     $0.1 (DIME)    |
| Quarter             | $0.25 (QUARTER)    |
| Dollar              | $1 (DOLLAR)        |
| Five Dollars        | $5 (FIVE)          |
| Ten Dollars         | $10 (TEN)          |
| Twenty Dollars      | $20 (TWENTY)       |
| One-hundred Dollars | $100 (ONE HUNDRED) |

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

class App extends Component {
    state = {
        markdown: placeholder
    };

    textChangedHandler = e => {
        this.setState({
            markdown: e.target.value
        });
    };

    render() {
        return (
            <div className={styles.App}>
                <Input inputMD={this.state.markdown} changeHandler={this.textChangedHandler} />
                <Output outputMD={this.state.markdown} />
            </div>
        );
    }
}

export default App;
