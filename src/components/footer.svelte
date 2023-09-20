<style>
.footer-container {
    height: 50vh;
    background-color: rgba(0, 0, 0, 1);
    padding: 40px;
}

.container {
    height: 100%;
    width: 80%;
    margin: auto;
    color: white;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 20px 20px 20px 20px 20px;
    align-items: center;
    align-content: center;
    column-gap: 20px;
    row-gap: 25px;

}

a {
    color: rgba(255, 255, 255, 0.7);

}

@media screen and (max-width: 1500px) {}

@media screen and (max-width: 1024px) {
    .container {
        width: 90%;

    }

}

@media screen and (max-width: 768px) {
    .footer-container {
        height: auto;
        padding-top: 15px;
    }

    .container {
        grid-template-columns: 1fr 1fr ;
        grid-template-rows: 20px 20px 20px 20px 20px;
        align-items: center;
        align-content: center;
        column-gap: 20px;
        row-gap: 25px;

    }

}

@media (max-width: 300px) {}
</style>

<div class=" footer-container">

    <footer class="container">
        <a href="/" style="grid-column-start:1;grid-column-end:-1;" >    Questions? Contact us.
        </a>

        <a href="/">    Help Center
        </a>
        <a href="/">    Account
        </a>
        <a href="/">  Media Center
        </a>
        <a href="/"> FAQ
        </a>
        <a href="/"> Jobs
        </a>
        <a href="/"> Ways to Watch
        </a>
        <a href="/"> Terms of Use
        </a>
        <a href="/"> Investor Relations

        </a>
        <a href="/"> Cookie Preferences

        </a>
        <a href="/"> Corporate Information

        </a>
        <a href="/"> Contact Us
        </a>
        <a href="/"> Privacy

        </a>
        <a href="/"> Speed Test
        </a>
        <a href="/">         Legal Notices

        </a>
        <a href="/">        Only on Netflix

        </a>

    </footer>

</div>
