type VideosProps<T> = {
  videos: T[]
}
type IVideo = {
  kind: string;
  id: {
    kind: string;
    videoId: string;
  }
}
const Videos = ({ videos }: VideosProps<IVideo[]>) => {
  return (
    <div>Videos</div>
  )
}

export default Videos
