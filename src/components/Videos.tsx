import { Stack, Box } from '@mui/material';
import { ItemProps } from '../types';
import { VideoCard, ChannelCard } from './';

type VideosProps<T> = {
  videos: T[]
}

const Videos = ({ videos }: VideosProps<ItemProps>) => {
  return (
    <div>
      <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
        {videos.map((item, idx) => {
          return (
            <Box key={idx}>
              {(item.id.kind === 'youtube#video') && (<VideoCard video={item} />)}
              {item.id.kind === 'youtube#channel' && (<ChannelCard channel={item} />)}
            </Box>
          )
        })}
      </Stack>
    </div>
  )
}

export default Videos
