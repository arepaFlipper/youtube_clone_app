import { ItemProps } from '../types';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';

interface IProps {
  channel: ItemProps;
}

// @ts-ignore
const ChannelCard = ({ channel }: IProps) => {
  const { id, snippet } = channel;
  const { channelId } = id;
  return (
    <Card>
      <Link to={channelId ? `/video/${channelId}` : demoVideoUrl}>
        <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title} sx={{ width: '358px', height: '150px' }} />
      </Link>
    </Card >
  )
}

export default ChannelCard
