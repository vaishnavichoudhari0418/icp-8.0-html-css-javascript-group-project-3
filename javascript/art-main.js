function ChangeVideo(num){
  let mainVideo = document.getElementById("main-video");
    if (num == 1) {
        mainVideo.src = "../../art-video/career.mp4";
      } else if (num == 2) {
        mainVideo.src = "../../art-video/after10inart.mp4";
      } else if (num == 3) {
        mainVideo.src = "../../art-video/career12.mp4";
      }
      mainVideo.load();
      mainVideo.play(); 
}