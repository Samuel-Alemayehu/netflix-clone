<script lang="ts">
import Accordion, {
    Header,
    Panel,
    Content
} from '@smui-extra/accordion'
export let faq: {
    answer: string,
    question: string,
    id: string
} []
</script>

<style>
.faq-container {
    height: auto;
    background-color: rgba(0, 0, 0, 1);
    border-top: 10px rgba(71, 66, 66, 0.5) solid;
    border-bottom: 10px rgba(71, 66, 66, 0.5) solid;
    padding-bottom: 1.5rem;

}

.container {
    height: 100%;
    width: 75%;
    margin: auto;
    color: white;

}

.question-container {
    padding: 24px;
    /* background-color: rgb(45, 45, 45); */
    margin-bottom: 5px;
    color: white;
}

.answer-container {
    padding: 24px;
    /* background-color: rgb(45, 45, 45); */
    margin-bottom: 5px;
    color: white;

}

h1 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 400;
    text-align: left;
    font-family: Netflix Sans, Helvetica Neue, Segoe UI, Roboto, Ubuntu, sans-serif;

}

p {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 400;
    text-align: left;
    font-family: Netflix Sans, Helvetica Neue, Segoe UI, Roboto, Ubuntu, sans-serif;

}

@media screen and (max-width: 1500px) {}

@media screen and (max-width: 1024px) {}

@media screen and (max-width: 768px) {
    .faq-container {
        height: auto;
        padding: 0px;

    }

    .faq-container {
        padding: 0px;

    }

    h1 {
        font-size: 1rem;
        text-align: center;

    }

    p {
        text-align: center;
        font-size: 0.8rem;

    }

}

@media (max-width: 300px) {}
</style>

<div class=" faq-container">
    <h1 style="color: white;text-align:center;margin-top:1.5rem;margin-bottom:1.5rem;font-size:2.5rem;font-weight:600">Frequently Asked Questions</h1>
    <div class="container">
        <div class="accordion-container">
            <Accordion color="secondary" >
                {#each faq as f, index (f.id)}
                <Panel color="secondary">
                    <Header>      <div class="question-container"><h1>{f.question}</h1></div>
                    </Header>
                    <Content>
                        <div class="answer-container"><p>{f.answer}</p></div>
                    </Content>
                </Panel>

                {/each}
            </Accordion>
        </div>

    </div>

</div>
