const startBtn = document.getElementById("startBtn");
const preview = document.getElementById("preview");

let stream;

const handleStop = () => {
  startBtn.innerText = "Start recording";
  startBtn.removeEventListener("click", handleStop);
  startBtn.addEventListener("click", handleStart);
};

const handleStart = () => {
  startBtn.innerText = "Stop recording";
  startBtn.removeEventListener("click", handleStart);
  startBtn.addEventListener("click", handleStop);
  const recorder = new MediaRecorder(stream);
  recorder.ondataavailable = (e) => console.log(e);
  recorder.start();
  setTimeout(() => {
    recorder.stop();
  }, 10000);
};

const init = async () => {
  stream = await navigator.mediaDevices.getUserMedia({
    audio: true,
    video: true,
  });
  preview.srcObject = stream;
  preview.play();
};

init();

startBtn.addEventListener("click", handleStart);
