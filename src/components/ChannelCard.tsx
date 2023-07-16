import { ItemProps } from '../types';

interface IProps {
  channel: ItemProps;
}

const ChannelCard = ({ channel }: IProps) => {
  return (
    <div style={{ color: 'white' }}>ChannelCard</div>
  )
}

export default ChannelCard
