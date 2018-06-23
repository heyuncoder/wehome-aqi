import React, { Component } from 'react';
import { Map, Marker } from 'react-amap';
import $ from 'jquery'

import './App.css';
import HeaderBar from './components/HeaderBar';
import Dashboard from './components/Dashboard';

class App extends Component {
  constructor() {
    super();
    this.mapCenter = { longitude: 116.472432, latitude: 40.023924 };
  }

  state = {
    markerPosition: {
      longitude: 116.472432, latitude: 40.023924
    },
    aqi: {},
    city: {}
  }

  getAQiWithGps(e) {
    console.log(e)
    let data = {
      lat: e.lnglat.lat,
      lon: e.lnglat.lng,
    }
    this.setState({
      markerPosition: {
        longitude: data.lon,
        latitude: data.lat
      }
    });
    // $.ajax({
    //   url: 'http://localhost:7001/aqi/getwithgps',
    //   type: 'POST',
    //   data: data
    // }).done((res) => {
    //   console.log(res);
    // })
    $.ajax({
      url: 'http://aliv1.data.moji.com/whapi/json/aliweather/aqi',
      type: 'POST',
      headers: {
        Authorization: "APPCODE c54ea15e9a574424bd8a5ef242f539bc"
      },
      data: data
    }).done((res) => {
      // todo: error handle
      let result = JSON.parse(res)
      if (result.msg === "success") {
        this.setState({
          aqi: result.data.aqi,
          city: result.data.city
        })
      }

    })

  }
  render() {

    const events = {
      // created: (ins) => {console.log(ins)},
      click: this.getAQiWithGps.bind(this)
    }

    return (
      <div className="App">
        <Map id="map" zoom={14} center={this.mapCenter} events={events} amapkey={"979c467bc4c43b83d4fc15d042ea43cf"}  >
          <Marker position={this.state.markerPosition} />
        </Map>
        <HeaderBar />
        <Dashboard aqi={this.state.aqi} city={this.state.city} />
      </div>
    );
  }
}

export default App;
