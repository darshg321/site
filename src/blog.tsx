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
        <div class={"flex flex-col items-center p-10"}>
            {postData.map((post) => (
                <div class="p-6 items-center border-1 rounded-2xl space-y-2">
                    <p class="text-xl">{post.text}</p>
                    <p class="text-xs">{post.date}</p>
                </div>
            ))}
        </div>
    );
};

export default Blog;
