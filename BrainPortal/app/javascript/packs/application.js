/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

import React from 'react'
import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types'
// import axios from 'axios'
// import validations from '../validations'

// import EventsList from './EventsList'
// import EventForm from './EventForm'
// import FormErrors from './FormErrors'

class Eventlite extends React.Component {
  render() {
    return (
      <div>
        <h1>THIS IS my {this.props.name}</h1>
      </div>
    )
  }
}

// Eventlite.propTypes = {
//   events: PropTypes.array.isRequired
// }

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('input_data')
  const data = node.getAttribute("data")
  const data_json = JSON.parse(data)
  ReactDOM.render(
    <Eventlite name={data_json.name} />,
    document.body.appendChild(document.createElement('div')),
  )
})