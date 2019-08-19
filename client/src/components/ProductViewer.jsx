import React from 'react';
import axios from 'axios';

export default class ProductViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBid: 0,
      lastBid: 0

    }
    this.updateBid = this.updateBid.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  onSubmit() {
    event.preventDefault();
    if (this.state.currentBid <= this.state.lastBid) {
      alert('Please enter a valid bid');
      this.setState({ currentBid: this.state.lastBid })
    } else {
      alert('Bid accepted');
      this.updateBid();
      this.props.changeViewer()
    }
  }

  handleChange(event) {
    this.setState({ currentBid: event.target.value }, () => this.setState({ lastBid: this.props.currentProduct.curr_bid }, () => console.log(this.state)))

  }

  updateBid() {
    axios.put(`api/products/${this.props.currentProduct.id}`, {
      curr_bid: this.state.currentBid
    })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className='product-viewer'>
        <h2>Current Item</h2>
        <img src={this.props.currentProduct.image} />
        <div>
          <p> {this.props.currentProduct.item}</p>
          <label>Current Bid: </label><span>{this.props.currentProduct.curr_bid}</span>
          <br></br>
          <label>Original Posting Price:</label><span> {this.props.currentProduct.min_cost}</span>
          <p>Item ends in {this.props.currentProduct.ends_in} day(s)</p>

          <div>
            <form action="" onSubmit={this.onSubmit}>
              New Bid:
              <input type="text" onChange={this.handleChange}></input>
              <input type="submit" value="Submit"></input>
            </form>
          </div>
        </div>
      </div>
    )
  }
}