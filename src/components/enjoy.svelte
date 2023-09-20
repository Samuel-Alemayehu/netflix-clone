<style>
.container {
    height: 70vh;
    background-color: rgba(0, 0, 0, 1);
    color: white;
    border-top: 10px rgba(71, 66, 66, 0.5) solid;
    border-bottom: 10px rgba(71, 66, 66, 0.5) solid;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-evenly;
    align-items: center;

}

h2 {
    margin: 0;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    font-family: Netflix Sans, Helvetica Neue, Segoe UI, Roboto, Ubuntu, sans-serif;

}

p {
    margin: 1rem 0 0;
    font-size: 1.125rem;
    font-weight: 400;
    text-align: center;
    font-family: Netflix Sans, Helvetica Neue, Segoe UI, Roboto, Ubuntu, sans-serif;

}

.video {
    position: absolute;
    width: 70%;
    top: 20.5%;
    right: 16.5%;
    z-index: 1;

}

.tv {
    position: relative;
    width: 100%;
    z-index: 10;
}

@media screen and (max-width: 1500px) {
    .container{
        height: 100vh;
    }
}

@media screen and (max-width: 1024px) {
   
}

@media screen and (max-width: 768px) {
    .container {
        height: 70vh;
    }
}

@media (max-width: 300px) {}
</style>

<div class="container">
    <div>
        <h2>Enjoy on your TV</h2>
        <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
    </div>

    <div style="display:flex;justify-content:center;">
        <div style="position: relative;">
            <img src="/tv.png" class="tv" alt="img not loaded" />
            <video src="/video-tv-0819.m4v" class="video" autoplay={true} loop={true} playsinline={true} muted/>
                </div>
                </div>
                </div>
