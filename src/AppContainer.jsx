import React from 'react'
import Api from './api.js'

const AppContainer = React.createClass({
  getInitialState(){
    return {
      username: "kdot",
    }
  },

  handleSearch(){
    Api.getHotArtist(0,10).then((json) => {
      console.log("hot artists: ",json);
    });

    Api.getArtistAlbums(6452,0,10).then((json) => {
      console.log("artist albums: ",json);
    })

    Api.getAlbum(34720827).then((json) => {
      console.log("album: ",json);
    })
  },

  render(){
    return <div>
      <button onClick={this.handleSearch}>search</button>
    </div>
  }
})

export default AppContainer
