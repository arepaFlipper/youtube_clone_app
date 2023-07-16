export interface ItemProps {
  kind: string;
  id: (IDVideo | IDChannel);
  snippet: {
    thumbnails: {
      high: {
        url: string;
      }
    }
  };
};

export interface IDVideo {
  kind: "youtube#video";
  videoId: string;
}

export interface IDChannel {
  kind: "youtube#channel";
  channelId: string;
}
