import { LitElement, html, css } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
    this.name = "Mount Nittany";
    this.source = "https://www.statecollege.com/wp-content/uploads/2021/01/1478334_40232.jpg";
    this.description = "This is the mountain where Penn State University Park is located. The word Nittany is Algonquian in origin and is part of the Appalacian mountain range. The mountain is famous for its hiking trainls and stunning views.";
    this.fancy = false;
    
  }
  

  static get styles() {
    return css`
      :host {
        display: inline-block;
        box-sizing: border-box;
      }

.card.fancy {
  background-color: red;
}
h1 {
  font-size: 32px;
  display: inline-block
}

h3,h4,h5,h6 {
  margin: 8px 0;
  display: block;
}

#card-list {
  display: flex;
  display: block
}
.card {
  
  font-size: 16px;
  display: inline-flex;
  border: 8px blue;
  padding: 8px;
  margin: 8px;
  background-color: green;
  transition: .6s all ease-in-out;
  max-width: 400px;
  max-height: 300px;
}

.card-image {
  max-width: 200px;
  max-height: 100px;
}

.card-text {
  max-width: 300px;
  padding: 0 8px 8px 8px;
  color: black;
  background-color: white;
  margin: 0 0 0 8px;
  overflow: auto;
}
// card formatting section
 details summary {
    text-align: left;
    font-size: 20px;
    padding: 8px 0;
  }

  details[open] summary {
    font-weight: bold;
  }
  
  details div {
    border: 2px solid black;
    text-align: left;
    padding: 8px;
    height: 70px;
    overflow: auto;
  }
.card-title {
  position: sticky;
  top: 0;
  background-color: #eeeeee;
  text-align: center;
  font-size: 2em;
  padding: 8px 8px 16px;
  margin: 16px;
}

ul {

  padding: 16px;
}

ul 
li {
  padding: 8px 16px;
  list-style: square;
}

ul 
li:hover {
  font-weight: bold;
}

.links li:focus-within,
.links li:hover {
  background-color: white;
  color: blue;
}
.links li a:focus,
.links li:hover a {
  color: green;
  text-decoration: underline;
  cursor: move;
  outline: none;
}
    `;
    

  }
  

  render() {
    return html`
      <div>${this.title}</div>
        <div class=${classMap({ card: true, fancy: this.fancy })}>
          <img class="card-image" src="${this.source}" alt="${this.name}" />
          <div class="card-text">
            <h3 class="card-title">${this.name}</h3>
            <div class="card-details">
              <details ?open="${this.fancy}" @toggle="${this.openChanged}">
        <summary>Details</summary>
            <slot>Thing here</slot>
        </details>
              <h4>Facts</h4>
              <ul>
                <li>In PA</li>
                <li>Is tall</li>
                <li>Third fact go here</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `;
  }
    openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  static get properties() {
    return {
      title: { type: String },
      name: { type: String },
      source: { type: String },
      description: { type: String },
      fancy: { type:Boolean, reflect: true },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
