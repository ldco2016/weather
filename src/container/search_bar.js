import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};

    this.onInputChange = this.onInputChange.bind(this);
    // always need to bind this
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }
  // callback
  onFormSubmit(event) {
    event.preventDefault();

    // We need to go fetch weather data
    // hooked up search_bar to fetchWeather ActionCreator
    this.props.fetchWeather(this.state.term);
    // clear out the search input
    this.setState({term:''});
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  // makes sure this flows down into the middleware
  return bindActionCreators({fetchWeather}, dispatch);
}
// accessing ActionCreator by connecting component through
// mapDispatchToProps with SearchBar
export default connect(null, mapDispatchToProps)(SearchBar);
