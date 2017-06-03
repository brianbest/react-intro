/* global React ReactDOM */
import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './myTitle'

var div = React.DOM.div
var MyTitleFactory = React.createFactory(MyTitle)
var myFirstComponent = React.createClass({
  render: function () {
    return (
      div(null,
        MyTitleFactory({title: 'props are crazy', color: 'peru'}),
        MyTitleFactory({title: 'Shut yo face', color: 'tomato'}),
        MyTitleFactory({title: 'make it till you make it', color: 'rebeccapurple'}),
        MyTitleFactory({title: 'Attack!!', color: 'darkvioletred'})
      )
    )
  }
})
ReactDOM.render(React.createElement(myFirstComponent), document.getElementById('app'))
