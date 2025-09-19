import { LitElement, html, css } from 'lit';

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
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

.card.fancy {
  background-color: black;
}
h1 {
  font-size: 32px;
}

h3,h4,h5,h6 {
  margin: 8px 0;
}

#card-list {
  display: flex;
}
.card {
  font-size: 16px;
  display: inline-flex;
  border: 8px blue;
  padding: 8px;
  margin: 8px;
  background-color: green;
  transition: .6s all ease-in-out;
}

.card-image {
  width: 200px;
  height: 100%;
}

.card-text {
  width: 350px;
  padding: 0 8px 8px 8px;
  color: black;
  background-color: white;
  margin: 0 0 0 8px;
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

.card:hover,
.card:focus-within {
  opacity: 1;
  outline: 2px solid green;
  outline-offset: 16px;
}
    `;
  }

  render() {
    return html`<div>${this.title}</div>
    <h1>Mount Nittany</h1>
<div id="cardlist">
  <div class="card">
    <img class="card-image" alt="https://pabucketlist.com/wp-content/uploads/2020/07/Boalsburg-Overlook-Mount-Nittany.jpg" />
    <div class="card-text">
      <h3 class="card-title">Mount Nittany</h3>
      <div class="card-details">
        <p>
        This is the mountain where Penn State University Park is located. The word Nittany is Algonquian in origin and is part of the Appalacian mountain range. The mountain is famous for its hiking trainls and stunning views.
        </p>
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

  static get properties() {
    return {
      title: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
