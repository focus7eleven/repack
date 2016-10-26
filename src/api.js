const get = (url) => {
  return fetch(url)
    .then((res)=>{
      return res.json()
    }).then((json)=>{
      return json
    }).catch((ex)=>{
      return ex
    })
}

const post = (url, form) => {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(form),
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
  }).then((res)=>{
      return res.json()
    }).then((json)=>{
      return json
    }).catch((ex)=>{
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
  },
  getUserPlaylists: (uid,offset,limit) => {
    const url = '/api/user/playlist?offset='+offset+'&limit='+limit+'&uid='+uid
    return get(url);
  },
  getPlaylist: (id) => {
    const url = '/api/playlist/detail?id='+id
    return get(url);
  },
  getTrack: (id) => {
    const url = '/api/song/detail?ids=%5B'+id+'%5d'
    return get(url);
  },
  getLyrics: (id) => {
    const url = '/api/song/lyric?id='+id+'&lv=-1'
    return get(url);
  },
  postSearch: (name,limit,offset) => {
    const url = '/api/search/suggest/web';
    const form = {
      s: name,
      limit: limit,
      offset: offset,
      type:1
    };
    return post(url,form);
  },
  // getDailyRecommend: () =>{
  //   const url = '/weapi/v1/discovery/recommend/songs'
  //   const form = {
  //     params: 'Yvb7Q0P4BfMDo/gdEbGbwJQbxM0f5b2AG3MvkxDSJ6tF+mIWvYUzjGoPzvkuWET/G/ykoMpYi2rr4eDN5WpW4KG3L05R0TSTm5/mRGTx0I8ITYDw2f9jVKr1LD5o4PkgLvvhY9klLgHB4mLpBqn8dmcYWjj885pDm9M4g+G5j5ooJ8fUwDviNvcNOy2vwSzP',
  //     encSecKey: '471ed0911ca380fa4f65e2fb7a41a7c032811f60a265b7ae87901b86ab0614ef3bc0201599657a5de119d7b79293da8cfce658c1f5330e2649bb8f2fdfaee4d3bf2f37791d787fb79154a0d09cca2adc002ba7fae51372b960178315480e85e0d8141e3ec2caea10ab55cf79270cca1036f67a5fba95985520ee8f4d02e98963'
  //   }
  //   return post(url,form);
  // },

}

export default Api
