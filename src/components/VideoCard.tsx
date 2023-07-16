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
    <Card sx={{ width: { md: '320px', xs: '100%' }, boxShadow: 'none', borderRadius: 'none' }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title} sx={{ width: '358px', height: '150px' }} />
      </Link>
      <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={(snippet?.channelId) ? `/channel/${snippet.channelId}` : demoVideoUrl}>
          <Typography variant="subtitle2" color="#878787">
            {snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
            <CheckCircle sx={{ fontSize: '12px', color: '#1AA7EC', ml: '6px' }} />
          </Typography>
        </Link>
      </CardContent>
    </Card >
  )
}

export default VideoCard;
