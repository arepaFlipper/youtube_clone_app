export interface ItemProps {
  kind: string;
  id: ({
    kind: "youtube#video";
    videoId: string;
  } | {
    kind: "youtube#channel";
    channelId: string;
  })
};
