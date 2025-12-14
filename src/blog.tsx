import type {Component} from 'solid-js';

type Post = {
    date: string;
    title: string;
    description: string;
    image: string;
};

const Blog: Component = () => {
    const postData: Array<Post> = [
        {
            date: "12/13/2025",
            title: "TopArm",
            description: "fusion of a top hat and robotic arm",
            image: "TopArm.png",
        },
        {
            date: "12/13/2025",
            title: "AuraGenerator",
            description: "a constant mist effect to follow you around",
            image: "AuraGenerator.png",
        },
    ];

    return (
        <div class="flex flex-col items-center p-8">
            <p class="text-orange text-4xl italic mb-10">blog !!</p>

            <div class="grid gap-8 max-w-3xl w-full">
                {postData.map((post) => (
                    <div
                        class="flex flex-col md:flex-row overflow-hidden rounded-xl border border-magenta bg-white shadow-sm hover:shadow-lg transition-shadow">

                        <div class="w-30 h-30 my-5">
                            <img
                                src={post.image}
                                alt={post.title}
                                class="w-full h-full object-cover"
                            />
                        </div>

                        <div class="flex flex-col justify-between p-6 space-y-3 md:w-2/3">
                            <div class="space-y-2">
                                <a
                                    href={`/blog/${post.title}`}
                                    class="text-xl font-semibold text-gray-800 hover:text-magenta transition-colors"
                                >
                                    {post.title}
                                </a>

                                <p class="text-gray-600 text-sm leading-relaxed">
                                    {post.description}
                                </p>
                            </div>

                            <p class="text-xs text-gray-400">{post.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
