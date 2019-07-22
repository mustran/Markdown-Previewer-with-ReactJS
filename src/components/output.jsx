import React from "react";
import marked from "marked";
import styles from './styles/output.module.css'

let renderer = new marked.Renderer();
renderer.link = (href, title, text) => `<a target="_blank" href="${ href }" title="${ title }">${ text }</a>`;

const Output = props => {
    return (
        <div className={styles.preview} id="preview">
            <div dangerouslySetInnerHTML={{ __html: marked(props.outputMD, {renderer}) }} />
        </div>
    );
};

export default Output;
