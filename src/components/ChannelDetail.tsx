import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { Videos, ChannelCard } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const channels = await fetchFromAPI(`/channels?part=snippet&id=${id}`);
        const videos_list = await fetchFromAPI(`/search?channelId=${id}&part=snippet&order=date`);
        setChannelDetail(channels?.items[0]);
        setVideos(videos_list?.items[0]);
      } catch (error) {
        setChannelDetail(null);
        setVideos([]);
      }
    })();
  }, [id])
  return (
    <div>{id}</div>
  )
}

export default ChannelDetail
