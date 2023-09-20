<style>
.container {
    height: 80vh;
    background-color: rgba(0, 0, 0, 1);
    color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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



.text-container {
    margin: auto;
    text-align: center;
}

.tv {
    position: relative;
    width: 100%;
    z-index: 10;
}

.movie-title {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    z-index: 12;
    background-color: black;
    border: 2px solid rgba(128, 128, 128, 0.7);
    border-radius: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 60%;

}

.gif {
    width: 50px;
    height: 50px;
}

.movie-image {
    width: 40px;
    height: 70px;
}

.movie-title p {
    margin: 0;
    font-size: 1rem;
}

@media screen and (max-width: 1500px) {
    .container{
        height: auto;
        padding-top: 40px;
        padding-bottom: 40px;
    }
}

@media screen and (max-width: 1024px) {
    .container{
        height:auto;
        padding-top: 40px;
        padding-bottom: 40px;
    }
}

@media screen and (max-width: 768px) {
    .text-container {
        width: 85%;

    }
    .container {
        height: 70vh;
    }

    .movie-title {
        width: 70%;
        left: 50%;
        /* min-width: 18rem; */
        overflow: hidden;
        transform: translateX(-50%)
    }

    #downloading {
        font-size: 0.85rem;
    }
    #movie-name{
        font-size: 0.85rem;

    }

}

@media (max-width: 300px) {}
</style>

<div class="container">
    <div class="text-container">
        <h2>Download your shows to watch offline
        </h2>
        <p>Save your favorites easily and always have something to watch.
        </p>
    </div>

    <div style="display:flex;justify-content:center;">
        <div style="position: relative;">
            <img src="/mobile-0819.jpg" class="tv" alt="img not loaded" />
            <div class="movie-title">
                <img src="/boxshot.png" alt="gif not found" class='movie-image'/>
                <div >
                    <p id="movie-name"style="font-weight: 600;">Stranger things</p>
                    <p id="downloading" style="font-weight: 600; color:#0071eb">Downloading...</p>
                </div>
                <img src="/download-icon.gif"  alt="gif not found" class="gif" />

            </div>
        </div>
    </div>
</div>
