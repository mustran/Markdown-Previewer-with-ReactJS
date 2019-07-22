import React, { Component } from "react";
import Input from "./components/input";
import Output from "./components/output";
import styles from "./App.module.css";

const placeholder = `# Front End Libraries Projects - Build a Markdown Previewer

## Objective: Build a CodePen.io app that is functionally similar to this: 
### Fulfill the below user stories and get all of the tests to pass. Give it your own personal style.
  

  
**User Story #1:** I can see a \`textarea\` element with a corresponding id="editor".

**User Story #2:** I can see an element with a corresponding \`id="preview"\`.

**User Story #3:** When I enter text into the #editor element, the \`#preview\` element is updated as I type to display the content of the textarea.

**User Story #4:** When I enter GitHub flavored markdown into the \`#editor\` element, the text is rendered as HTML in the #preview element as I type (HINT: You don't need to parse Markdown yourself - you can import the Marked library for this: https://cdnjs.com/libraries/marked).

**User Story #5:** When my markdown previewer first loads, the default text in the \`#editor\` field should contain valid markdown that represents at least one of each of the following elements: a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.

**User Story #6:** When my markdown previewer first loads, the default markdown in the \`#editor\` field should be rendered as HTML in the \`#preview\` element.

_Optional Bonus_ (you do not need to make this test pass): When I click a link rendered by my markdown previewer, the link is opened up in a new tab (HINT: read the Marked.js docs for this one!).

> GitHub repository.

The [link](https://github.com/mustran/Markdown-Previewer-with-ReactJS) to my repo.

Tasks:

| User Story          |Correct/Incorrect|
|---------------------|:---------------:|
| User Story #1       |    Completed    |
| User Story #2       |    Completed    |
| User Story #3       |    Completed    |
| User Story #4       |    Completed    |
| User Story #5       |    Completed    |
| User Story #6       |    Completed    |
| Bonus               |    Completed    |


Heres some code, on how I completed the Bonus task:

\`\`\`
// this is multi-line code:

let renderer = new marked.Renderer();
renderer.link = (href, title, text) => \`<a target="_blank" href="\${ href }" title="\${ title }">\${ text }</a>\`;
\`\`\`

in the \`output\` component I added the renderer

\`\`\`
<div dangerouslySetInnerHTML={{ __html: marked(props.outputMD, {renderer}) }} />
\`\`\`

- I created two components.
  - One for the editor.
     - One for the preview
> Screenshot of the project

![Screenshot](https://image.prntscr.com/image/aKUgDhtKSN_0XiLlPZRRkw.png)
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
