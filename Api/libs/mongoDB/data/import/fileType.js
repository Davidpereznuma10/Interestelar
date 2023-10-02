function determineFileType(video) {
    if (video.video && video.texto) {
      return 'video y texto';
    } else if (video.video) {
      return 'video';
    } else {
      return 'txt';
    }
  }

  module.exports = { determineFileType }