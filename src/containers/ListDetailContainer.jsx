import React,{PropTypes} from 'react'
import styles from './ListDetailContainer.scss'
import Api from '../api'
import moment from 'moment'

const ListDetailComponent = React.createClass({
  PropTypes: {
    id: PropTypes.number.isRequired,
    playlist: PropTypes.object.isRequired,
  },

  getInitialState() {
    return {
      playlist: {},
      coverImgUrl: "",
      avatarUrl: "",
    }
  },

  componentWillMount() {
    console.log(this.props.playlist);
    this.setState({playlist:this.props.playlist});
  },

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.playlist);
    this.setState({playlist:nextProps.playlist,id:nextProps.id});
  },

  render(){
    const {playlist} = this.state;
    const test = this.state.playlist.tracks[0].duration;
    console.log(moment.duration(test).asSeconds());
    console.log(moment.duration(test).asMinutes());
    console.log(moment.duration(test).seconds());
    console.log(moment.duration(test).minutes());

    return (
      <div className={styles.container}>
        <div className={styles.listInfo}>
          <div>
            <img className={styles.coverImg} src={playlist.coverImgUrl} />
          </div>
          <div className={styles.profile}>
            <div className={styles.title}>
              <div>歌单</div>
              <div>{playlist.name}</div>
            </div>
            <div className={styles.creator}>
              <div>
              <div><img src={playlist.creator.avatarUrl} /></div>
              </div>
              <div>{playlist.creator.nickname}</div>
              <div>{moment(playlist.createTime).format("YYYY-MM-DD")}创建</div>
            </div>
          </div>
          <div className={styles.statistics}>
            <div>
              <div>歌曲数</div>
              <div>{playlist.trackCount}</div>
            </div>
            <div>/</div>
            <div>
              <div>收听数</div>
              <div>{playlist.playCount}</div>
            </div>
          </div>
        </div>
        <div className={styles.listDetail}>
          <div><div>歌曲列表</div></div>
          <div className={styles.header}>
            <div></div>
            <div>音乐标题</div>
            <div>歌手</div>
            <div>专辑</div>
            <div>时长</div>
          </div>
          <div className={styles.trackList}>
            {
              playlist.tracks.map((item,index)=>{
                return (
                  <div className={styles.data} style={index%2==0?{'backgroundColor':'rgb(244,244,244)'}:{'backgroundColor':'rgb(250,250,250)'}} key={index}>
                    <div>{index+1}</div>
                    <div>{item.name}</div>
                    <div>
                      {
                        item.artists.map((artist,index)=>{
                          return (
                            index === 0 ? artist.name : " , " + artist.name
                          )
                        })
                      }
                    </div>
                    <div>{item.album.name}</div>
                    <div>{item.duration}</div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
})

export default ListDetailComponent;
