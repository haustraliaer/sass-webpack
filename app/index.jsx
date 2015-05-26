require('./index.scss')

var React = require('react')
var View1 = require('View1')
var View2 = require('View2')
var View3 = require('View3') // this breaks it.

var App = React.createClass({
  render: function() {
    return (
      <div className='App'>
        <View1 />
        <View2 />
      </div>
    )
  }
})

//test
React.render(<App />, document.body)
