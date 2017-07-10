import WebTorrent from "webtorrent";

export function getMedia(torrentId) {
  const client = new WebTorrent();
  client.add(torrentId, function (torrent) {
    // Torrents can contain many files. Let's use the .mp4 file
    const file = torrent.files.find(function (file) {
      return file.name.endsWith(".mp4");
    });

    // Display the file by adding it to the DOM. Supports video, audio, image, etc. files
    file.appendTo("#player");
  });
}
