import type {Component} from 'solid-js';

// type Task = {
//     name: string;
//     startTime: string;
//     endTime: string;
// }

type Post = {
    date: string;
    text: string;
    // todayGoals: Array<Array<{goal: string; complete: boolean;}>>;
    // tomorrowGoals: Array<Array<{goal: string;}>>;
    // schedule: Array<Task>;
}

const Blog: Component = () => {
    const postData: Array<Post> = [{date: "1/23/2025", text: "ees it over fur mich"},
        {date: "2/24/2025", text: "aw man"}]

    return (
        <div class={"flex flex-col items-center px-6 py-12 max-w-2xl mx-auto space-y-6"}>
            {postData.map((post) => (
                <div class="w-full p-6 border border-gray-200 rounded-lg bg-white hover:border-[#ed344f] transition-colors space-y-3">
                    <p class="text-lg text-gray-800">{post.text}</p>
                    <p class="text-sm text-gray-500">{post.date}</p>
                </div>
            ))}
        </div>
    );
};

export default Blog;
