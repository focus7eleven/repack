import React from 'react'
import Api from './api.js'
import styles from './AppContainer.scss'
import NavbarComponent from './containers/NavbarContainer'
import PlaylistComponent from './containers/PlaylistContainer'
import PlayerComponent from './containers/PlayerContainer'
import ListDetailComponent from './containers/ListDetailContainer'

const AppContainer = React.createClass({
  getInitialState(){
    return {
      listId: 32242867,
      playlist: {},
      isReady: false,
    }
  },

  componentWillMount() {
    Api.getPlaylist(this.state.listId).then((json) => {
      this.setState({playlist:json.result,isReady:true});
    })
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

  handleOnChange(id){
    this.setState({isReady:false})
    Api.getPlaylist(id).then((json) => {
      this.setState({listId:id,playlist:json.result,isReady:true});
    })
  },

  render(){
    const {listId,isReady,playlist} = this.state;

    return (
      <div className={styles.app}>
      <div className={styles.container}>
        <NavbarComponent></NavbarComponent>
        <div className={styles.mainPanel}>
          <PlaylistComponent onChange={this.handleOnChange}></PlaylistComponent>
          {
            isReady ?
              <ListDetailComponent id={listId} playlist={playlist}></ListDetailComponent>
              :
              <div className={styles.blank}></div>
          }
        </div>
        <PlayerComponent></PlayerComponent>
      </div>
      </div>
    )
  }
})

export default AppContainer
