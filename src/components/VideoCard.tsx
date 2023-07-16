import { ItemProps } from '../types';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';

interface IProps {
  video: ItemProps;
}

// @ts-ignore
const VideoCard = ({ video }: IProps) => {
  const { id, snippet } = video;
  const { videoId } = id;
  return (
    <Card>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title} sx={{ width: '358px', height: '150px' }} />
      </Link>
    </Card >
  )
}

export default VideoCard;
