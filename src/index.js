/**
 * @jsx React.DOM
 */

/**
 *
 * @type {*|exports}
 */

// import react
import React from 'react';

// import react router
import Router from 'react-router';

// react components
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

export default class App extends React.Component {

  render() {
    return (
      <section>
        <h1>Hello Tinashe</h1>
        <hr />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus officia tempora quisquam aspernatur nam sequi perferendis sapiente porro, ut at maiores quibusdam et, mollitia saepe rerum neque culpa fuga! Corrupti!</p>
      </section>
    );
  }

}
