import { Stack, Box } from '@mui/material';
import { ItemProps } from '../types';
import { VideoCard, ChannelCard } from './';

type VideosProps<T> = {
  videos: T[];
  direction: string;
}

const Videos = ({ videos, direction }: VideosProps<ItemProps>) => {

  if (!videos?.length) {
    return 'Loading...';
  }

  return (
    <div>
      <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>
        {videos.map((item, idx) => {
          return (
            <Box key={idx}>
              {(item.id.kind === 'youtube#video') && (<VideoCard video={item} />)}
              {(item.id.kind === 'youtube#channel') && (<ChannelCard channelDetail={item} />)}
            </Box>
          )
        })}
      </Stack>
    </div>
  )
}

export default Videos
