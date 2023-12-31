import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const video_detail_data = await fetchFromAPI(`/videos?part=snippet,statistics&id=${id}`);
        setVideoDetail(video_detail_data?.items[0]);
      } catch (error) {
        setVideoDetail(null);
      }

      try {
        const related_videos = await fetchFromAPI(`/search?part=snippet&relatedToVideoId=${id}&type=video`);
        setRelatedVideos(related_videos?.items);
      } catch (error) {
        setRelatedVideos([]);
      }
    })();
  }, [id]);
  if (!videoDetail?.snippet) {
    return 'Loading...';
  }
  const { snippet, statistics } = videoDetail;
  const { title, channelId, channelTitle } = snippet;
  const { viewCount, likeCount, dislikeCount } = statistics;
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            <Typography color="snow" variant="h4" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: "snow" }} py={1} px={2}>
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: 'subtitle1', md: 'h6' }} color="snow">
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: '12px', color: '#1AA7EC', ml: '5px' }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center">
          <Videos videos={relatedVideos} direction="column" />
        </Box>
      </Stack>
    </Box >
  )
}

export default VideoDetail
