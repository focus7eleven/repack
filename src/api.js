const get = (url) => {
  return fetch(url)
    .then(function(response) {
      return response.json()
    }).then(function(json) {
      return json
    }).catch(function(ex) {
      return ex
    })
}

const Api = {
  getHotArtist: (offset,limit) => {
    // Limit: entry limit
    // Offset: page offset
    const url = '/api/artist/top?offset='+offset+'&limit='+limit+'&total=false'
    return get(url);
  },
  getArtistAlbums: (id,offset,limit) => {
    // Id: artist id
    // Limit: entry limit
    // Offset: page offset
    const url = '/api/artist/albums/'+id+'?offset='+offset+'&limit='+limit;
    return get(url);
  },
  getAlbum: (id) => {
    const url = '/api/album/'+id;
    return get(url);
  }

}

export default Api
