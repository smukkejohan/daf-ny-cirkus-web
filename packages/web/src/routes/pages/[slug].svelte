<script context="module" lang="ts">

import { browser, dev } from '$app/env';

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement...
export const hydrate = dev;

// ...but if the client-side router is already loaded
// (i.e. we came here from elsewhere in the app), use it
export const router = browser;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in prod
export const prerender = true;

    //export const prerender = false;
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ url, params, fetch, session, stuff }) {
		const slug = params.slug

        if(slug == '') {
            return
        }

		const fetchUrl = `/api/pages/${slug}.json`;
		const res = await fetch(fetchUrl);

			if (res.ok) {
				const pageData = await res.json()

                return { props: {
                    title: pageData.title,
                    content: pageData.content
                } };
				
			} /*else {
				
				return {
					status: res.status,
					error: new Error(`Could not load ${url}`)
				}
			}*/
		
	}
</script>

<script lang="ts">
    import PortableText from '@portabletext/svelte'
  	import ExternalLink from '$lib/PortableText/ExternalLink.svelte'
    import FileLink from '$lib/PortableText/FileLink.svelte'
    import Image from '$lib/PortableText/Image.svelte'


    export let title = "Ny Cirkus page from sanity"
    export let content = []
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<PortableText
  blocks={content}
  serializers={{
    types: {
      // block-level components
      //callout: Callout,
      // inline-level components
      //userInfo: UserInfo
      image: Image,
    },
    marks: {
	    link: ExternalLink,
      file: FileLink,
      // Overwrite default mark renderers
      //strong: CustomStrong
    },
    blockStyles: {
      //normal: CustomParagraph,
      //blockquote: Quote,
      // Re-using the same component across multiple styles
      //h1: CustomHeading,
      //h2: CustomHeading,
      //h3: CustomHeading,
      // Swap only the list parts you need
      //list_bullet: UnorderedListWrapper,
      //list_number: OrderedListWrapper,
      //listItem_bullet: ListItem,
      //listItem_number: ListItem,
      // Custom user-defined style
      //textCenter: CentralizedText
    }
  }}
/>