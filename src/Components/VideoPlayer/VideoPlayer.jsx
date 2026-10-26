import { useRef } from 'react'
import video from '../../assets/video.mp4'
import './VideoPlayer.css'

const VideoPlayer = ({playState, setPlayState}) => {

    const player = useRef(null);

    function closePlayer(e){
        if(e.target === player.current){
            setPlayState(false);
        }
    }
    return(
        <div className={`video-player ${playState ? '' : 'hide'}`} ref = {player}
        onClick = {closePlayer}>
            <video src={video} autoPlay muted controls></video>
        </div>
    )
}
export default VideoPlayer