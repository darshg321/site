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
    const postData: Array<Post> = [{date: "11/2/2025", text: "ees it over fur mich"},
        {date: "2/24/2025", text: "aw man"}]

    return (
        <div class={"flex flex-col items-center p-8"}>
            <p class={"text-orange text-4xl italic"}>blog !!</p>
            <div class={"flex flex-col items-center px-6 py-12 max-w-2xl mx-auto space-y-6"}>
                {postData.map((post) => (
                    <div
                        class="w-full p-6 border-2 border-magenta rounded-lg bg-white space-y-3">
                        <p class="text-lg text-gray-800">{post.text}</p>
                        <p class="text-sm text-gray-500">{post.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
