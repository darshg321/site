import {Component, createResource, Suspense} from "solid-js";

const fetchLatestCommit = async (): Promise<string> => {
    const url = "https://api.github.com/repos/darshg321/site/commits/main";
    const response = await fetch(url, {
        headers: {
            Accept: "application/vnd.github.v3+json",
        },
    });

    if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.sha; // commit hash string
};

const Footer: Component = () => {
    const [commit] = createResource(fetchLatestCommit);

    return (
        <footer class="flex flex-row justify-center items-center space-x-6 py-6 px-4 border-t border-pink text-sm">
            <p>made with procrastination !! </p>
            <p>on ver:</p>

            <Suspense fallback={<p>loading...</p>}>
                {commit() && (
                    <a
                        href={`https://github.com/darshg321/site/commit/${commit()}`}
                        class="text-magenta"
                    >
                        {commit()?.slice(0, 7)} {/* short SHA */}
                    </a>
                )}
            </Suspense>

            <p>inspired by:</p>
            <a href="https://phthallo.com" class="text-magenta">phthallo</a>
            <a href="https://aconlin.com" class="text-magenta">acon</a>
            <a href="https://nownownow.com/about" class="text-magenta">now</a>
        </footer>
    );
};

export default Footer;
