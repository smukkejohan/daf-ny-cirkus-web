
<script lang="ts">
    export let data = {}
</script>


<aside>
    <ul>
        {#each Object.keys(data) as t}
          <li class='{t}'>
            <span class='marker'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox="-10 -10 20 20" preserveAspectRatio='xMidYMid meet'><circle cx='0' cy='0' r='8'/></svg>
            </span>
            <span class='text'>{data[t].title}</span>
            </li>
        {/each}
    </ul>
</aside>


<style lang='scss'>

    svg {
        width: 100%;
        height: 100%;
        stroke-opacity: 0.8;
        fill-opacity: 0.9;
    }
    aside {
      position: absolute;
      right: 1em;
      top: 2em;
      pointer-events: all;      
        ul {
            list-style-type: none; 
            li {
                .marker, .text {
                vertical-align: middle;
                display: inline-block;
                }   
            }
            .marker {
                width: 1em;
                height: 1em;
            }
        }
        
      @each $class, $color in $locColorMap {
        li.#{$class} {
            fill: $color;
            stroke: lighten($color, 20);
        }
      }
    }
    </style>