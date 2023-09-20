<style>
.for-kids-container {
    height: 70vh;
    background-color: rgba(0, 0, 0, 1);

}

.container {
    height: 100%;
    width: 90%;
    margin: auto;
    color: white;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

}

.watch-container {
    grid-column-start: 2;
    grid-column-end: span 1;

}

.image-container {
    grid-column-start: 1;
    grid-column-end: span 1;

}

.kid-image {
    width: 80%;
    height: 80%;

}

h1 {
    margin: 0;
    font-size: 3rem;
    font-weight: 700;
    text-align: left;
    font-family: Netflix Sans, Helvetica Neue, Segoe UI, Roboto, Ubuntu, sans-serif;
    grid-column-start: span 1;

}

p {
    margin: 1rem 0 0;
    font-size: 1.5rem;
    font-weight: 400;
    text-align: left;
    font-family: Netflix Sans, Helvetica Neue, Segoe UI, Roboto, Ubuntu, sans-serif;

}

@media screen and (max-width: 1500px) {}

@media screen and (max-width: 1024px) {}

@media screen and (max-width: 768px) {
    .for-kids-container {
        height: auto;
        padding-top: 15px;
    }

    h1 {
        font-size: 2rem;
        text-align: center;

    }

    p {
        text-align: center;
        font-size: 1rem;

    }

    .watch-container {
        grid-column-start: 1;
        grid-column-end: -1;
        grid-row-start: 1;
        grid-row-end: span 1;

    }

    .image-container {
        width: 80%;
        grid-column-start: 1;
        grid-column-end: -1;
        grid-row-start: 2;
        grid-row-end: span 1;
        justify-self: center;
    }

    .kid-image {
        width: 100%;
    }
}

@media (max-width: 300px) {}
</style>

<div class=" for-kids-container">

    <div class="container">

        <div class="image-container">
            <img src="/for-kids.png"  alt="kid-img not found" class="kid-image" />
        </div>
        <div class="watch-container">
            <h1>    Create profiles for kids

            </h1>
            <p>    Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
            </p>
        </div>

    </div>

</div>
