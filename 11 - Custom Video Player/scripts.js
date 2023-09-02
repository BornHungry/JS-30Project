const video = document.querySelector(".viewer");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");
const playStop = document.querySelector(".toggle");
const skipButtons = document.querySelectorAll("[data-skip]");
const ranges = document.querySelectorAll(".player__slider");

function startStop() {
  const method = video.paused ? "play" : "pause";
  video[method]();
}

function updateButton() {
  const icon = this.paused ? "►" : "❚ ❚";
  console.log(icon);
  playStop.textContent = icon;
}

video.addEventListener("click", startStop);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
playStop.addEventListener("click", startStop);

function rangeUpdate() {
  video[this.name] = this.value;
}

ranges.forEach((range) => range.addEventListener("change", rangeUpdate));
ranges.forEach((range) => range.addEventListener("mousemove", rangeUpdate));

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}
skipButtons.forEach((button) => button.addEventListener("click", skip));

function handleProgress() {
  const variable = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${variable}%`;
}
video.addEventListener("timeupdate", handleProgress);

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// farenin basılı olduğunu kontrol etmek için "mousedown" değişkeni tanımlanır

let mousedown = false;
progress.addEventListener("mousemove", (e) => {
  if (mousedown) {
    scrub(e);
  }
});
progress.addEventListener("click", scrub);

progress.addEventListener("mousedown", () => {
  mousedown = true;
});
progress.addEventListener("mouseup", () => {
  mousedown = false;
});
