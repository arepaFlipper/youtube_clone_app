import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { demoProfilePicture } from '../utils/constants';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { ItemProps } from '../types';

interface IProps {
  channelDetail: ItemProps;
}

// @ts-ignore
const ChannelCard = ({ channelDetail }: IProps) => {
  const { id, snippet } = channelDetail;
  const { channelId } = id;
  return (
    <Box sx={{ boxShadow: 'none', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', widht: { xs: '356px', md: '320px' }, height: '326px', margin: 'auto' }}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#FFF' }}>
          <CardMedia
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snippet?.title}
            sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3d3' }}
          />
          <Typography variant="h6" >
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: 14, color: '#1AA7EC', ml: '5px' }} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography variant="subtitle2" color="white">
              {(channelDetail?.statistics?.subscriberCount).toLocaleString()}
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box >
  )
}

export default ChannelCard
