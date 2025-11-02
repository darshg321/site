import type {Component} from 'solid-js';

type Project = {
    title: string;
    description: string;
    link: string | undefined;
    images: Array<string>;
}

const Projects: Component = () => {
    const projectData: Array<Project> = [
        {
            title: "FancyBoard",
            description: "a hot-swappable, low-profile mechanical keyboard made from scratch",
            link: "https://github.com/darshg321/FancyBoard",
            images: ["FancyBoard.png"]
        },
        {
            title: "Arcadetris",
            description: "hardware-focused led matrix 2-player Tetris arcade game built @ HC Undercity",
            link: "https://github.com/darshg321/arcadetris",
            images: ["Arcadetris.png"]
        },
        // {
        //     title: "Mushu",
        //     description: "2025 FRC robot, ranked #13/130 in Ontario, seeding #7 in our worlds division",
        //     link: undefined,
        //     images: ["https://github.com/darshg321/arcadetris/raw/main/images/arcadetris.png"]
        // },
    ]

    return (
        <div class={"grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-12 max-w-5xl mx-auto"}>
            {projectData.map((project) => (
                <div class={"bg-white border-2 border-magenta rounded-lg p-6 hover:border-[#fe8839] transition-colors"}>
                    <h2 class={"text-2xl font-medium mb-3 text-[#ed344f]"}>{project.title}</h2>
                    {project.images.map((img) => (
                        <img src={img} alt={project.title} class="w-full rounded mb-4 object-cover"/>
                    ))}
                    <p class={"text-base text-gray-700 mb-4 leading-relaxed"}>{project.description}</p>
                    <a href={project.link}
                       class={"text-sm text-orange hover:text-magenta font-medium"}>{project.link ? "github →" : "closed :("}</a>
                </div>
            ))}
        </div>
    );
};

export default Projects;
