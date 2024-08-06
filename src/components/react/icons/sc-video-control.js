import * as React from 'react'
import { FaPlay, FaPause } from 'react-icons/fa6'

const VideoControlButton = ({ isPlaying, onClick }) => (
    <button className="video-control" onClick={onClick}>
        {isPlaying ? <FaPause /> : <FaPlay /> }
    </button>
)

export default VideoControlButton;