import type { Component } from 'solid-js';

type Task = {
    name: string;
    startTime: string;
    endTime: string;
}

type Post = {
    date: string;
    text: string;
    todayGoals: Array<Array<{goal: string; complete: boolean;}>>;
    tomorrowGoals: Array<Array<{goal: string;}>>;
    schedule: Array<Task>;
}

const Blog: Component = () => {
    return (
        <div>

        </div>
    );
};

export default Blog;
