import React from 'react'
import Api from './api.js'
import NavbarComponent from './containers/NavbarContainer'

const AppContainer = React.createClass({
  getInitialState(){
    return {
      userid: 39238941,
      playlistid: 32242867,
      trackid: 437245017,
    }
  },

  // handleSearch(){
  //   Api.getHotArtist(0,10).then((json) => {
  //     console.log("hot artists: ",json);
  //   });
  //
  //   Api.getArtistAlbums(6452,0,10).then((json) => {
  //     console.log("artist albums: ",json);
  //   })
  //
  //   Api.getAlbum(34720827).then((json) => {
  //     console.log("album: ",json);
  //   })
  //
  //   // Api.postSearch('kendrick',10,0).then((json) => {
  //   //   console.log("search: ",json);
  //   // })
  //
  //   Api.getUserPlaylists(this.state.userid,0,1000).then((json) => {
  //     console.log("user playlists: ",json);
  //   })
  //
  //   Api.getPlaylist(this.state.playlistid).then((json) => {
  //     console.log("single playlist: ",json);
  //   })
  //
  //   Api.getTrack(this.state.trackid).then((json) => {
  //     console.log("track: ",json);
  //   })
  //
  //   Api.getLyrics(this.state.trackid).then((json) => {
  //     console.log("lyrics: ",json);
  //   })
  //
  //   // Api.getDailyRecommend().then((json) => {
  //   //   console.log("recommend:",json);
  //   // })
  // },


  render(){
    return (
      <div>
        <NavbarComponent></NavbarComponent>
      </div>
    )
  }
})

export default AppContainer
