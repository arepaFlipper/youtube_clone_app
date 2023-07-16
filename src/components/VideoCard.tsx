import { ItemProps } from '../types';

interface IProps {
  video: ItemProps;
}

const VideoCard = ({ video }: IProps) => {
  return (
    <div style={{ color: 'white' }}>
      VideoCard
    </div>
  )
}

export default VideoCard;
