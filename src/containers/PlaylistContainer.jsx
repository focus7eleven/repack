import React,{PropTypes} from 'react'
import styles from './PlaylistContainer.scss'
import Api from '../api'
import itemLogo from '../../resource/item.png'
import likeLogo from '../../resource/like.png'

const PlaylistComponent = React.createClass({
  PropTypes:{
    onChange: PropTypes.func.isRequired,
  },

  getInitialState(){
    return {
      userid: 39238941,
      userlist: [],
      firstItem: {},
    }
  },

  componentWillMount(){
    Api.getUserPlaylists(this.state.userid,0,1000).then((json) => {
      const userlist = json.playlist;
      const firstItem = userlist.shift();
      this.setState({userlist,firstItem});
    })
  },

  handleListSelected(item){
    this.props.onChange(item.id);
  },

  render(){
    const {userlist,firstItem} = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.itemContainer} onClick={()=>this.handleListSelected(firstItem)}>
          <img src={likeLogo} />
          <div className={styles.listItem}>
            {firstItem.name}
          </div>
        </div>
        {
          userlist.map((item)=>{
            return (
              <div key={item.id} className={styles.itemContainer} onClick={()=>this.handleListSelected(item)}>
                <img src={itemLogo} />
                <div className={styles.listItem}>
                  {item.name}
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
})

export default PlaylistComponent;
