/** @jsx React.DOM */
var React = require('react');
var d3 = require('d3');


exports.Chart = React.createClass({
  render: function() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <svg width={this.props.width} height={this.props.height}>{this.props.children}</svg>
      </div>
    );
  }
});
