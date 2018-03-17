import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import CssBaseline from 'material-ui/CssBaseline';
import Card, { CardHeader } from 'material-ui/Card';
import CardList from "./CardList"

const endpoints = [
  'https://api.github.com/repos/bitcoin/bitcoin',
  'https://api.github.com/repos/ethereum/go-ethereum',
  'https://api.github.com/repos/ripple/rippled',
  'https://api.github.com/repos/bitcoin-abc/bitcoin-abc',
  'https://api.github.com/repos/litecoin-project/litecoin',
  'https://api.github.com/repos/input-output-hk/cardano-sl'
]

class App extends Component {

  state = {
    apiData: []
  }

  componentDidMount = () => {
    axios.all([
      axios.get(endpoints[0]),
      axios.get(endpoints[1]),
      axios.get(endpoints[2]),
      axios.get(endpoints[3]),
      axios.get(endpoints[4]),
      axios.get(endpoints[5])
    ])
    .then(axios.spread((one, two, three, four, five, six) => {
      this.setState({
        apiData: [
          one.data,
          two.data,
          three.data,
          four.data,
          five.data,
          six.data
        ]
      })
    }))
  }

  render() {
    
    return (
      <div>
        <CssBaseline />
        <Card raised className="main-card">
          <CardHeader 
            classes={{"title": "main-card-header-title", "root": "main-card-header"}} 
            title="GitHub Data for Top Six Cryptocurrencies by Market Capitalization" 
          /> 
          {
            this.state.apiData.length > 1 &&
            <CardList apiData={this.state.apiData} />
          }
        </Card>
      </div>
    );
  }
}

export default App;
