import React, { Component } from 'react'
import './assets/font/iconfont.css'
import './App.css'
import chineseColors from './assets/chinese-color'
import japanColors from './assets/japan-color'
import japanBg from './assets/japan-bg.mp3'
import chinaBg from './assets/china-bg.mp3'

const jinrishici = require('jinrishici')

class App extends Component {
  state = {
    colorsInfo: chineseColors,
    currentColor: chineseColors[0].hex,
    currentColorName: chineseColors[0].name,
    currentIsDark: chineseColors[0].isDark,
    peomContentUp: '',
    peomContentDown: '',
    peomAuthor: '',
    full: false,
    country: 'china',
    status: 'stop'
  }
  componentDidMount = () => {
    this.getPeomData()
    this.getPeomTimer = setInterval(() => {
      this.getPeomData()
    }, 1000 * 10)
    document.addEventListener('fullscreenchange', () => {
      if (!this.isFullScreenCurrently()) {
        this.setState({ full: false })
      }
    })
  }
  getPeomData = () => {
    jinrishici.load(res => {
      let contentArr = res.data.content.split('，')
      let author = res.data.origin.author
      this.setState({
        peomContentUp: contentArr[0] + '，',
        peomContentDown: contentArr[1],
        peomAuthor: author
      })
    })
  }
  handleMouseOver = item => {
    this.setState({
      currentColor: item.hex,
      currentColorName: item.name,
      currentIsDark: item.isDark
    })
    if (item.jia) {
      this.setState({
        currentJia: item.jia
      })
    } else {
      this.setState({
        currentJia: ''
      })
    }
  }
  changeNation() {
    let country = this.state.country === 'china' ? 'japan' : 'china'
    if (country === 'china') {
      this.setState({
        colorsInfo: chineseColors,
        country: country,
        currentColor: chineseColors[0].hex,
        currentColorName: chineseColors[0].name,
        currentIsDark: chineseColors[0].isDark,
        currentJia: ''
      })
    }
    if (country === 'japan') {
      this.setState({
        colorsInfo: japanColors,
        country: country,
        currentColor: japanColors[0].hex,
        currentColorName: japanColors[0].name,
        currentIsDark: japanColors[0].isDark,
        currentJia: japanColors[0].jia
      })
    }
    if (this.state.status === 'play') {
      this.stop()
    }
  }
  isFullScreenCurrently = () => {
    var full_screen_element =
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement ||
      null
    // If no element is in full-screen
    if (full_screen_element === null) return false
    else return true
  }
  fullScreen = () => {
    this.setState({ full: !this.state.full }, () => {
      if (this.state.full) {
        const i = this.refs.containerWrap
        if (i.requestFullscreen) {
          i.requestFullscreen()
        } else if (i.webkitRequestFullscreen) {
          i.webkitRequestFullscreen()
        } else if (i.mozRequestFullScreen) {
          i.mozRequestFullScreen()
        } else if (i.msRequestFullscreen) {
          i.msRequestFullscreen()
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
      }
    })
  }
  play = () => {
    // 回到初始位置
    const scrollZone = document.getElementById('scroll')
    scrollZone.scrollTop = 0

    this.setState({ status: 'play' })
    let colorsInfo = this.state.colorsInfo,
        i = 1
    this.timer = setInterval(() => {
      this.setState({
        currentColor: colorsInfo[i].hex,
        currentColorName: colorsInfo[i].name,
        currentIsDark: colorsInfo[i].isDark
      })
      if (colorsInfo[i].currentJia) {
        this.setState({
          currentJia: colorsInfo[i].currentJia
        })
      }
      i++
      if (!colorsInfo[i]) i = 1
      // 大于 6 ，右边滚动到视野区域
      if(i>6){
        const scrollZone = document.getElementById('scroll')
        const setScrollHeight = (i-6)*60
        if (scrollZone) {
          scrollZone.scrollTop = setScrollHeight
        }
      }
    }, 5000)
  }
  stop = () => {
    this.setState({ status: 'stop' })
    clearInterval(this.timer)
  }
  control =()=>{
    var audio = document.getElementById('music');
    if(audio!==null){
      if(audio.paused){
        audio.play();// 播放
      }else{
        audio.pause();// 暂停
      }
    }
  }
  render() {
    const {
      currentColorName,
      currentIsDark,
      currentColor,
      peomContentUp,
      peomContentDown,
      peomAuthor,
      colorsInfo
    } = this.state
    return (
      <div
        className="App"
        ref="containerWrap"
        style={{ backgroundColor: currentColor }}
      >
       
        

        <div onClick={this.fullScreen} className="full-screen">
          {!this.state.full ? (
            <i
              className={'iconfont iconquanpingzuidahua iconfont-full-screen'}
            ></i>
          ) : (
            <i
              className={'iconfont icontuichuquanping2 iconfont-full-screen'}
            ></i>
          )}
        </div>
        <div className="button-span" onClick={this.changeNation.bind(this)}>
          <span className="button-text noselect">
            {this.state.country === 'china' ? '中' : '日'}
          </span>
        </div>
        {this.state.status === 'stop' ? (
          <i
            onClick={this.play}
            className={'iconfont iconxunhuanbofang play'}
          ></i>
        ) : (
          <i onClick={this.stop} className={'iconfont icontingzhi play'}></i>
        )}
         <span className= 'control' onClick={this.control}>播放/暂停</span>
         <audio
          src={this.state.country === 'japan' ? japanBg : chinaBg}
          autoPlay="autoplay"
          loop="loop"
          id ='music'
        >
          Your browser does not support the audio element.
        </audio>
        <div
          className="current-name"
          style={{ color: `${currentIsDark ? '#000' : '#fff'}` }}
        >
          {this.state.currentJia ? (
            <p className="current-name-jia">{this.state.currentJia}</p>
          ) : (
            ''
          )}
          <p className="current-name-text noselect">{currentColorName}</p>
          <p className="current-name-color">{currentColor}</p>
        </div>
        <div
          className="poem"
          style={{ color: `${currentIsDark ? '#000' : '#fff'}` }}
        >
          <p className="poem-up">{peomContentUp}</p>
          <p className="poem-down">{peomContentDown}</p>
          <p className="poem-author">-- {peomAuthor}</p>
          {/* <p className="poem-up" id="poem_sentence_up">柳湖松岛莲花寺，</p> */}
          {/* <p className="poem-down" id="poem_sentence_down">晚动归桡出道场。</p> */}
        </div>

        <aside className="aside" id= 'scroll'>
          {colorsInfo.map((item, index) => (
            <div
              key={index}
              className="aside-piece"
              style={{ backgroundColor: `${item.hex}` }}
              onMouseOver={() => this.handleMouseOver(item)}
            >
              <div
                className="aside-piece-one"
                style={{ color: `${item.isDark ? '#000' : '#fff'}` }}
              >
                <p className="aside-piece-name"> {item.name} </p>
                <p className="aside-piece-color"> {item.hex}</p>
              </div>
            </div>
          ))}
        </aside>
      </div>
    )
  }
}

export default App
