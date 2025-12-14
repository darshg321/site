import {createSignal, onMount} from "solid-js";
import {marked} from "marked";
import {useParams} from "@solidjs/router";

export default function Post() {
    const [html, setHtml] = createSignal("");
    const post = useParams().post;

    onMount(async () => {
        const res = await fetch(`/posts/${post}/${post}.md`);
        const text = await res.text();
        setHtml(marked.parse(text));
    });

    return (
        <div class="flex flex-col min-h-screen">
            <article class="flex flex-col items-center px-6 py-12 max-w-3xl mx-auto w-full">
                <div
                    class="
                        prose
                        prose-neutral
                        dark:prose-invert

                        max-w-none
                        w-full

                        prose-h1:text-4xl
                        prose-h1:font-extrabold
                        prose-h1:tracking-tight
                        prose-h1:mb-4

                        prose-h2:text-2xl
                        prose-h2:font-bold
                        prose-h2:mt-12
                        prose-h2:mb-4

                        prose-h3:text-xl
                        prose-h3:font-semibold

                        prose-p:leading-relaxed

                        prose-img:rounded-xl
                        prose-img:mx-auto
                        prose-img:my-8

                        prose-hr:my-12
                        prose-hr:border-neutral-300
                        dark:prose-hr:border-neutral-700

                        prose-a:text-pink
                        hover:prose-a:underline
                      "
                    innerHTML={html()}
                />
            </article>
        </div>
    );
}
