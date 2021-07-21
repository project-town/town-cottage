import { addEvent } from "../common/index.js";

const makeVideoPlay = () => {
  const playBtn = document.querySelector(".play-btn");
  const pauseBtn = document.querySelector(".pause-btn");
  const video = document.querySelector(".video");
  pauseBtn.style.display = "none";
  video.addEventListener("ended", () => handlePause(pauseBtn, playBtn, video));
  addEvent(playBtn, "click", () => handlePlay(pauseBtn, playBtn, video));
  addEvent(pauseBtn, "click", () => handlePause(pauseBtn, playBtn, video));
};

const handlePlay = (pauseBtn, playBtn, video) => {
  playBtn.style.display = "none";
  pauseBtn.style.display = "block";
  video.play();
};

const handlePause = (pauseBtn, playBtn, video) => {
  playBtn.style.display = "block";
  pauseBtn.style.display = "none";
  video.pause();
};

export default { makeVideoPlay };
