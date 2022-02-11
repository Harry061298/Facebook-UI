import React, { Component } from 'react'
import { FacebookProvider, Feed } from 'react-facebook'
import './styles.css'
import './asset.css'

import Home from '../styles/house-chimney-solid.svg'
import { Description } from '@material-ui/icons'

export default class NewsFeed extends Component {
  render() {
    var data = [
      {
        id: 1,
        name: 'Hariprasad',
        Description:
          "Hey, this is a story I hate And telling it might make me break But I'll tell it anyway This chapter's about How yousaid there was nobody else Then you got up and went to her house You guys always left me out",
        link:
          'https://gallery.yopriceville.com/var/albums/Animated-Gif-Images/Beautiful_Tree_Gif_Animation.gif?m=1399676400',
      },
      {
        id: 3,
        name: 'Harry',
        Description:
          'Look deep into nature, and then you will understand everything better.',
        link:
          'https://media.wired.com/photos/59326d5344db296121d6aee9/master/pass/8552.gif',
      },
      {
        id: 2,
        name: 'Harry61298',
        Description:
          'We don’t inherit the earth from our ancestors, we borrow it from our children',
        link:
          'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5eeea355389655.59822ff824b72.gif',
      },
    ]
    console.log('data', data)
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
            <div className="col-md-2 ">
              {/* <li>Friends</li>
              <li>Friends</li>
              <li>Friends</li>
              <li>Friends</li>
              <li>Friends</li>
              <li>Friends</li>
              <li>Friends</li> */}
            </div>
            <div className="col-md-8 layout-newsfeed">
              <div className="post-box">
                <div
                  className="row"
                  style={{ borderBottom: '2px solid', marginLeft: '0%' }}
                >
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

                {data
                  ? data.map((data, index) => (
                      <div className="row post-content">
                        <img
                          className="dp-img"
                          src="https://www.w3schools.com/howto/img_avatar2.png"
                          alt="Avatar"
                        />
                        <b className="news-profile-name">{data.name}</b>
                        <p className="indi-post">{data.Description}</p>
                        <img className="posted-image" src={data.link} />
                      </div>
                    ))
                  : ''}
                {/* <div className="row">
                  <img
                    className="dp-img"
                    src="https://www.w3schools.com/howto/img_avatar2.png"
                    alt="Avatar"
                  />
                  <b className="news-profile-name"> Harry</b>
                  <p className="indi-post">
                    Look deep into nature, and then you will understand
                    everything better.
                  </p>
                  <img
                    className="posted-image"
                    src="https://media.wired.com/photos/59326d5344db296121d6aee9/master/pass/8552.gif"
                  />
                </div> */}
                {/* <div className="row">
                  <img
                    className="dp-img"
                    src="https://www.w3schools.com/howto/img_avatar2.png"
                    alt="Avatar"
                  />
                  <b className="news-profile-name">Harry61298</b>
                  <p className="indi-post">
                    <p className="indi-post">
                      Hey, this is a story I hate And telling it might make me
                      break But I'll tell it anyway This chapter's about How you
                      said there was nobody else Then you got up and went to her
                      house You guys always left me out
                    </p>
                    <img
                      className="posted-image"
                      src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5eeea355389655.59822ff824b72.gif"
                    />
                  </p>
                </div> */}
              </div>
            </div>
            <div className="col-md-2 ">
              {/* <div>
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
