import ReactPlayer from 'react-player'
import { useDispatch } from 'react-redux'
import { next, useCurrentLesson } from '../store/slices/player'

export function Video() {
  const dispatch = useDispatch()
  const { currentLesson } = useCurrentLesson()

  function handlePlayNextVideo() {
    dispatch(next())
  }

  return (
    <div className="w-full bg-zinc-500 aspect-video">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        playing
        onEnded={handlePlayNextVideo}
        url={`https://youtube.com/watch?v=${currentLesson.id}`}
      />
    </div>
  )
}
