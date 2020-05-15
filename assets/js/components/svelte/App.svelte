<script>
    import Header from './Header.svelte';

    console.log('swag')
</script>
<style>
    h1 {
        color: red;
    }
</style>
<Header />
<div class="home">
    <div class="Aligner">
        <div class="Aligner-item">
            <img alt="whishlist Logo" src="/img/logo.png" />
            <h1>Dev-Starter-Kit</h1>
            <div class="menu">
                <ul>
                    <li>
                        <a href="http://starterkit.whishlist.com" target="new">
                            Documentation
                        </a>
                    </li>
                    <li>
                        <a href="http://www.whishlist.com" target="new">
                            whishlist.Com
                        </a>
                    </li>
                </ul>
            </div>
            <div class="version-num">version 4.0.2</div>
            <br />
            <a
                class="github-button"
                href="https://github.com/whishlistdotcom/Dev-Starter-Kit"
                data-icon="octicon-star"
                data-style="mega"
                data-count-href="/whishlistdotcom/rocky/stargazers"
                data-count-api="/repos/whishlistdotcom/rocky#stargazers_count"
                data-count-aria-label="# stargazers on GitHub"
                aria-label="Star whishlistdotcom/rocky on GitHub"
            >
                Star
            </a>
        </div>
    </div>
</div>
