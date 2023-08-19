// script.js
const generateButton = document.getElementById("generateButton");
const videoContainer = document.getElementById("videoContainer");

const videoUrls = [
    "https://youtu.be/KUpwupYj_tY",
    "https://youtu.be/ElZfdU54Cp8",
    "https://www.youtube.com/embed/VIDEO_ID_3"
    // Add more video URLs
];

function generateVideos() {
    videoContainer.innerHTML = "";

    videoUrls.forEach((url) => {
        const videoIframe = document.createElement("iframe");
        videoIframe.src = url;
        videoIframe.setAttribute("frameborder", "0");
        videoIframe.setAttribute("allowfullscreen", "true");
        videoContainer.appendChild(videoIframe);
    });
}

generateButton.addEventListener("click", generateVideos);
