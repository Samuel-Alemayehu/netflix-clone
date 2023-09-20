<script>
import Front from "../components/front.svelte";
import Enjoy from "../components/enjoy.svelte";
import Download from "../components/download.svelte";
import Watch from "../components/watch.svelte";
import ForKids from "../components/for-kids.svelte";
import Faq from "../components/faq.svelte";
import Footer from "../components/footer.svelte";
export let data
</script>

<Front/>
    <Enjoy/>
        <Download/>
            <Watch/>
                <ForKids/>
                    <Faq faq={data.faqs}/>
                    
                        <Footer/>
