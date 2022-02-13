import React, { Component } from 'react'
import { FacebookProvider, Feed } from 'react-facebook'
import './styles.css'
import './asset.css'

import Home from '../styles/house-chimney-solid.svg'
import pen from '../styles/pen.svg'
import Gif from '../styles/gificons.png'
import video from '../styles/video-solid.svg'
import { Description } from '@material-ui/icons'
import ReactGiphySearchbox from 'react-giphy-searchbox'
var data = [
  {
    id: 1,
    name: 'User1',
    Description:
      "Hey, this is a story I hate And telling it might make me break But I'll tell it anyway This chapter's about How yousaid there was nobody else Then you got up and went to her house You guys always left me out",
    link:
      'https://institute.careerguide.com/wp-content/uploads/2020/09/BelovedMagnificentKatydid-max-1mb.gif',
  },
  {
    id: 1,
    name: 'User2',
    Description:
      'Look deep into nature, and then you will understand everything better.',
    link: 'https://i.gifer.com/L61C.gif',
  },
  {
    id: 3,
    name: 'User3',
    Description:
      'We don’t inherit the earth from our ancestors, we borrow it from our children',
    link: 'https://acegif.com/wp-content/gif/outerspace-22.gif',
  },
]
export default class NewsFeed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showGif: false,
      openGif: false,
      selectedGif: '',
      text: '',
      url: '',
      Posts: [],
      PostSuccess: false,
    }
  }

  componentDidMount = () => {
    // this.state.Posts.push(data)
    // console.log('data', this.state.Posts)
  }
  OpenGifRow = (type) => {
    if (type == 'open') {
      this.setState({ openGif: true })
    } else {
      this.setState({ openGif: false })
    }
  }
  OpenGif = (type) => {
    if (type == 'open') {
      this.setState({ showGif: true })
    } else {
      this.setState({ showGif: false })
    }
  }
  TextBox = (e) => {
    this.setState({ Text: e.target.value })
  }

  postButton = () => {
    var data1 = data.length
    var data2 = this.state.Posts.length
    console.log('Postcheck', data1, data2)
    var url =
      'https://media2.giphy.com/media/' + this.state.selectedGif + '/giphy.gif'

    var Posts = {
      id: data.length + 1,
      name: 'User ' + Number(data.length + 1),
      Description: this.state.Text,
      link: url,
    }

    data.push(Posts)

    data.sort((a, b) => parseFloat(b.id) - parseFloat(a.id))

    this.setState({
      Posts: data,
      PostSuccess: true,
      openGif: false,
      selectedGif: '',
    })
    setTimeout(() => {
      this.setState({ PostSuccess: false })
    }, 5000)
  }
  render() {
    const { openGif, showGif, selectedGif, PostSuccess } = this.state
    var url = 'https://media2.giphy.com/media/' + selectedGif + '/giphy.gif'

    // this.setState({ url: url })
    return (
      <div>
        <div className="header">
          <img
            className="logo"
            src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
            alt="fb"
          />
        </div>

        <div className="">
          <div className="row">
            <div className="col-md-2 "></div>
            <div className="col-md-8 layout-newsfeed">
              <div className="post-box">
                <div
                  className="row "
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
                    onClick={(e) =>
                      openGif
                        ? this.OpenGifRow('close')
                        : this.OpenGifRow('open')
                    }
                  />
                  <div
                    className="Home"
                    onClick={(e) =>
                      openGif
                        ? this.OpenGifRow('close')
                        : this.OpenGifRow('open')
                    }
                  >
                    <img style={{ width: '30px' }} src={pen} alt="Home" />{' '}
                    {/* {openGif ? (
                      <span style={{ marginLeft: '1em', fontWeight: 'bolder' }}>
                        Close post{' '}
                      </span>
                    ) : (
                      <span style={{ marginLeft: '1em', fontWeight: 'bolder' }}>
                        Compose post{' '}
                      </span>
                    )} */}
                  </div>
                  {openGif ? (
                    <div className="row Write-post">
                      {openGif ? (
                        <div style={{ width: '100%' }}>
                          <div
                            className="row"
                            style={{ margin: '3% 2% 3% 4%' }}
                          >
                            <textarea
                              type="text"
                              className="Text-box-post"
                              placeholder="Write about something"
                              onChange={this.TextBox}
                            />
                            <div>
                              <img
                                style={{ width: '50px', marginLeft: '6%' }}
                                src={Gif}
                                alt="Gif"
                                onClick={(e) =>
                                  showGif
                                    ? this.OpenGif('close')
                                    : this.OpenGif('open')
                                }
                              />{' '}
                            </div>
                          </div>
                        </div>
                      ) : (
                        ''
                      )}
                      {/* <div style={{ margin: ' 0% 0% 2% 14%' }}> */}

                      {/* </div> */}
                      {showGif ? (
                        <div className="searchboxWrapper">
                          <ReactGiphySearchbox
                            apiKey="nKxTkKCzfhqQd7wXdWSoTsQp6bpcyxbT"
                            poweredByGiphy={false}
                            onSelect={(item) =>
                              this.setState({
                                selectedGif: item.id,
                                showGif: false,
                              })
                            }
                            masonryConfig={[
                              { columns: 2, imageWidth: 110, gutter: 5 },
                              {
                                mq: '700px',
                                columns: 3,
                                imageWidth: 120,
                                gutter: 5,
                              },
                            ]}
                          />
                        </div>
                      ) : (
                        ''
                      )}
                      {selectedGif != '' ? (
                        <div className="row">
                          <div>
                            <img
                              className="posted-image"
                              // style={{ width: 'auto' }}
                              src={url}
                            />
                          </div>
                          <div className="post-btn">
                            <button
                              class="button post-btn-btn"
                              onClick={this.postButton}
                            >
                              Post
                            </button>
                          </div>
                        </div>
                      ) : (
                        ''
                      )}
                    </div>
                  ) : (
                    ''
                  )}
                  {PostSuccess ? (
                    <div className="post-success">Posted</div>
                  ) : (
                    ''
                  )}
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
