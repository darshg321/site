import type {Component} from 'solid-js';

type Project = {
    title: string;
    description: string;
    link: string;
    images: Array<string>;
}

const Projects: Component = () => {
    const projectData: Array<Project> = [
        {
            title: "FancyBoard",
            description: "a hot-swappable, low-profile mechanical keyboard made from scratch",
            link: "https://github.com/darshg321/FancyBoard",
            images: ["https://github.com/darshg321/FancyBoard/raw/main/assets/FancyBoard_Render.png"]
        },
        {
            title: "Arcadetris",
            description: "hardware-focused led matrix 2-player Tetris arcade game built @ HC Undercity",
            link: "https://github.com/darshg321/arcadetris",
            images: ["https://github.com/darshg321/arcadetris/raw/main/images/arcadetris.png"]
        }
    ]

    return (
        <div class={"grid grid-cols-4"}>
            {projectData.map((project) => (
                <div class={"m-4 p-4 w-60 text-center"}>
                    <p class={"text-2xl"}>{project.title}</p>
                    {project.images.map((img) => (
                        <img src={img}/>
                    ))}
                    <p class={"text-xm w-50"}>{project.description}</p>
                    <a href={project.link} class={"text-xm text-blue-700"}>github!!</a>
                </div>
            ))}
        </div>
    );
};

export default Projects;
