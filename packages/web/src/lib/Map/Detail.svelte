
<script context="module" lang="ts">
</script>

<script lang="ts">

    import { onMount } from 'svelte';
    //import Icon from 'svelte-awesome/components/Icon.svelte'
    import Facebook from 'svelte-bootstrap-icons/lib/Facebook'
    import Instagram from 'svelte-bootstrap-icons/lib/Instagram'
    import Phone from 'svelte-bootstrap-icons/lib/Phone'
    import Envelope from 'svelte-bootstrap-icons/lib/Envelope'
    import BoxArrowUpRight from 'svelte-bootstrap-icons/lib/BoxArrowUpRight'

    import type { Location } from '../../types'

    export let data : Location
    $: ({category, expand, address, website, instagram, facebook, title, about, mail, phone, mainImage} = data)


    onMount(async () => {
        // fetch images here
    });

    /*export let type
    export let expand
    export let address
    export let web
    export let ig
    export let facebook
    export let n
    export let about
    export let mail
    export let phone = undefined*/

    $: mainImageStyle = mainImage ? `--background-image-url: url('${mainImage}');` : ''



</script>

    
<div class="popover {category} {expand ? 'expand' : ''}" style="{mainImageStyle}" >
 
    {#if expand }

<div class="detail-wrapper" >

    <div class="top-info">
        <address>
            {#if address}{address}{/if }
        </address>
            
        <ul class="links">
                {#if website}
                    <li><a rel="external" title="website" alt="Website of {title}" href="{website}" target="new"><BoxArrowUpRight/></a></li>
                {/if}
    
                {#if instagram}
                <li><a rel="external" title="instagram" alt="{title} on instagram" href="https://instagram.com/{instagram}"><Instagram/></a></li>
                {/if}
    
                {#if facebook}
                <li><a rel="external" title="facebook" alt="{title} on facebook" href="https://facebook.com/{facebook}"><Facebook/></a></li>
                {/if}
                
            </ul>
        </div>
            
            <h1>{title}</h1>
    
            {#if about}
            <p>{about}</p>
            {/if}
            
            <div class="bottom-info">
    
            <ul>
             {#if mail}
             <li>
                <span class="icon"><Envelope/></span> <a href="mailto:{mail}">{mail}</a>
            </li>
                {/if}
                
                {#if phone}
                <li>
                <span class="icon"><Phone/></span> {phone}
                </li>
                {/if}
    
            </ul>
    
            </div>
    </div>

    {/if}
</div>


<style lang="scss">
    .popover {
        position: absolute;
        left: 0;
        right: 0;
        margin-top: -1px;
        //opacity: 0;
        //max-height: 0;
        display: block;
        overflow: hidden;
        color: white;
        border-top:solid $background-color 2px;
        pointer-events: all;

        transform: scaleY(0);    
        transform-origin: top;
        transition: transform 0.2s cubic-bezier(0.645, 0.045, 0.355, 1.000);

        &.expand {
            transform: scaleY(1); 
        }

        @each $class, $color in $locColorMap {
            &.#{$class} {
                background-color: rgba(darken($color, 0.2), 0.8);
            }
        }
	}
    h1, p, a, span { // h2, h3, h4, h5, h6,
      pointer-events: auto;
    }
    .detail-wrapper::before {
        content: "";
        position: absolute;
        z-index: -1;
        top: -5%; left: -5%;
        width: 110%; height: 110%;
        background-image: var(--background-image-url);
        filter: blur(1px) brightness(30%);
        pointer-events: all;
        background-size: cover;
        background-position: center;
        opacity: 0.8;
    }

    .detail-wrapper {
        position: relative;
        padding: 2px 2em;
    }

    address {
    }
    h1 {
        font-size: 1.5em;
        margin-top: 0.1em;
    }
    .top-info {
        font-size: 0.9em;
        margin-top: 0.8em;
        display: flex;
        justify-content: space-between;
    }
    .links {
        display: inline-flex;
        padding: 0;
        margin: 0;
        li {
            list-style: none;
            padding: 0 0.2em;
        }
    }
    .bottom-info {
        font-size: 1em;
        margin: 0.8em 0;
        ul {
            display: flex;
            margin: 0;
            padding: 0;
            li {
                list-style: none;
                padding: 0 1.5em 0 0;
                .icon {
                    padding-right: 0.1em;
                    vertical-align: middle;
                }
            }

        }

    }
</style>
	

