# streamserver-baseon-expressandffmpeg
通过封装hkvision的sdk，将hkvision摄像头保存为服务器视频.mp4视频，在通过express的流媒体服务器进行web播放，使用socket.io,来发射事件与mpeg数据，使用ffmpeg解码.mp4视频，（将h.264解码为mpeg格式)。
