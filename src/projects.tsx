import type {Component} from 'solid-js';

type Project = {
    title: string;
    description: string;
    link: string | undefined;
    images: Array<string>;
}

const Projects: Component = () => {
    const projectData: Array<Project> = [
        // {
        //     title: "FancyBoard",
        //     description: "a hot-swappable, low-profile mechanical keyboard made from scratch",
        //     link: "https://github.com/darshg321/FancyBoard",
        //     images: ["FancyBoard.png"]
        // },
        {
            title: "TopArm",
            description: "fusion of a top hat and robotic arm",
            link: "https://github.com/darshg321/TopArm",
            images: ["TopArm.png"]
        },
        {
            title: "Arcadetris",
            description: "2-player Tetris console built @ HC Undercity",
            link: "https://github.com/darshg321/arcadetris",
            images: ["Arcadetris.png"]
        },
        {
            title: "Mushu",
            description: "2025 FRC robot, ranking #13/130 in Ontario",
            link: undefined,
            images: ["Mushu.png"]
        },
    ]

    return (
        <div class={"grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-12 max-w-5xl mx-auto"}>
            {projectData.map((project) => (
                <div class={"bg-white border-2 border-magenta rounded-lg p-6 hover:border-orange transition-colors"}>
                    <h2 class={"text-2xl font-medium mb-3 text-magenta"}>{project.title}</h2>
                    {project.images.map((img) => (
                        <img src={img} alt={project.title} class="w-60 h-60 rounded mb-4 object-cover"/>
                    ))}
                    <p class={"text-base text-gray-700 mb-4 leading-relaxed"}>{project.description}</p>
                    <a href={project.link}
                       class={"text-sm text-orange hover:text-magenta font-medium"}>{project.link ? "github →" : "closed source :("}</a>
                </div>
            ))}
        </div>
    );
};

export default Projects;
