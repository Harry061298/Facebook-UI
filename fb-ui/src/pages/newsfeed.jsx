import React, { Component } from 'react'
import { FacebookProvider, Feed } from 'react-facebook'
import './styles.css'
import './asset.css'

import Home from '../styles/house-chimney-solid.svg'

export default class NewsFeed extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <img
            className="logo"
            src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
            alt="fb"
          />
          {/* <div>
            {' '}
            <FontAwesomeIcon icon="fa-light fa-house-chimney" />
            <img className="Home" src={Home} alt="Home" />
          </div> */}
        </div>

        <div className="">
          <div className="row">
            <div className="col-md-2 right layout">
              <li>Friends</li>
              <li>Friends</li>
              <li>Friends</li>
              <li>Friends</li>
              <li>Friends</li>
              <li>Friends</li>
              <li>Friends</li>
            </div>
            <div className="col-md-8 layout-newsfeed">
              <div className="post-box">
                <div className="row">
                  <img
                    className="dp-img"
                    src="https://www.w3schools.com/howto/img_avatar2.png"
                    alt="Avatar"
                  />
                  <input
                    className="text-box"
                    type="text"
                    placeholder="Whats on your mind"
                    readOnly
                  />
                </div>
              </div>
            </div>
            <div className="col-md-2 left layout">
              <div>
                <li>Friends</li>
                <li>Friends</li>
                <li>Friends</li>
                <li>Friends</li> <li>Friends</li>
                <li>Friends</li>
                <li>Friends</li>
                <li>Friends</li>
                <li>Friends</li>
                <li>Friends</li>
                <li>Friends</li>
                <li>Friends</li>
                <li>Friends</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
