// Adds a video background

let video = `
<div class="background-wrap"><video id="video-bg-elem" preload="auto" autoplay="true" loop="loop" muted="muted"> <source src="https:\/\/theme-park.dev\/css\/addons\/unraid\/login-page\/alien\/video\/isolation.mp4" type="video\/mp4">Video not supported</video></div>
`
document.body.innerHTML += video
