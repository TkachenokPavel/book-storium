import { createGlobalStyle } from "styled-components";
import { BODY } from "./typography";

export const GlobalStyles = createGlobalStyle`
    html, body, body div, span, object, iframe, 
    h1, h2, h3, h4, h5, h6, p, blockquote, pre, abbr, 
    address, cite, code, del, dfn, em, img, ins, kbd, 
    q, samp, small, strong, sub, sup, var, b, i, dl, 
    dt, dd, ol, ul, li, fieldset, form, label, legend, 
    table, caption, tbody, tfoot, thead, tr, th, td, 
    article, aside, figure, footer, header, menu, nav, 
    section, time, mark, audio, video, details, summary {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font-weight: normal;
        vertical-align: baseline;
        background: transparent;
    }

    article, aside, figure, footer, header, nav, section, details, summary {
        display: block;
    }

    html {
        box-sizing: border-box;
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    img,
    object,
    embed {max-width: 100%;}

    html {overflow-y: scroll;}

    ul {list-style: none;}

    blockquote, q {
        quotes: none;
    }

    blockquote:before,
    blockquote:after,
    q:before,
    q:after {content: ''; content: none;}

    a {
        margin: 0; padding: 0; font-size: 100%; vertical-align: baseline; 
        background: transparent;text-decoration:none;
    }

    del {
        text-decoration: line-through;
    }

    hr {
        display: block; height: 1px; border: 0; border-top: 
        1px solid #ccc; margin: 1em 0; padding: 0;
    }

    input, select {
        vertical-align: middle;
    }

    pre {
        white-space: pre; 
        white-space: pre-wrap; 
        white-space: pre-line; 
        word-wrap: break-word; 
    }

    select, input, textarea {
        font: 99% sans-serif;
    }

    table {
        font-size: inherit; font: 100%;
    }

    small {
        font-size: 85%;
    }

    strong {
        font-weight: bold;
    }

    td, td img {
        vertical-align: top;
    }

    sub, sup {font-size: 75%; line-height: 0; position: relative;}
    sup {top: -0.5em;}
    sub {bottom: -0.25em;}

    pre, code, kbd, samp {font-family: monospace, sans-serif;}

    .clickable,
    label,
    input[type=button],
    input[type=submit],
    input[type=file],
    button {cursor: pointer;}

    button, input, select, textarea {
        margin: 0;
    }

    button,
    input[type=button] {width: auto; overflow: visible;}

    body {
        position: relative;
        ${BODY}
    }
`;
