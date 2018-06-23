import React, { Component } from 'react';

import './dashboard.css'
class Dashboard extends Component {

    render() {
        let { co, no2, o3, pm10, pm25, rank, so2, value } = this.props.aqi;
        let { counname, name, pname } = this.props.city;
        return (<div className="dashboard">
            <div>空气质量：{value}</div>
            <div>地点：{counname} {pname} {name}</div>
            <ul className="list">
                <li>一氧化碳：{co}</li>
                <li>二氧化氮：{no2}</li>
                <li>PM10:{pm10}</li>
                <li>PM2.5{pm25}</li>
                <li>二氧化硫:{so2}</li>
            </ul>
        </div>)
    }
}

export default Dashboard;