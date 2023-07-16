export interface ItemProps {
  kind: string;
  id: (IDVideo | IDChannel);
  snippet: {
    thumbnails: {
      high: {
        url: string;
      }
    }
    title: string;
  };
  statistics: {
    subscriberCount: number;
  }
};

export interface IDVideo {
  kind: "youtube#video";
  videoId: string;
}

export interface IDChannel {
  kind: "youtube#channel";
  id: {
    channelId: string;
  };
  snippet: {
    title: string;
  }
  statistics: {
    subscriberCount: number;
  }
}
