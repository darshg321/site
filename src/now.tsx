import type {Component} from 'solid-js';

const Now: Component = () => {
    const playPronunciation = () => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance('now');
            utterance.lang = 'en-US';
            window.speechSynthesis.speak(utterance);
        }
    };

    return (
        <div class={"flex flex-col items-center"}>
            <div class={"flex flex-col w-150"}>
                <div class={"flex flex-row items-center justify-center p-20"}>
                    <img
                        src={"/speaker.svg"}
                        onClick={playPronunciation}
                        class="cursor-pointer hover:opacity-70"
                        alt="Play pronunciation"
                        width={"5%"}
                        height={"5%"}
                    />
                    <div class={"flex flex-col"}>
                        <p>now</p>
                        <p>/nou/</p>
                        <p>key site component</p>
                    </div>
                </div>
                <div class={"border-l-4 border-gray-400 pl-4 mb-8"}>
                    <p class={"italic text-gray-600"}>
                        a person's current focus; what you'd tell a friend you hadn't seen in a year.</p>
                </div>
            </div>
            <div class={"w-150 mt-8 pt-8 border-t border-gray-300"}>
                <p>still in Mississauga (boring). currently focused on studying for the SAT (1530??), learning chemistry
                    for the Canadian Chemistry Olympiad, making hardware projects, and generally just doing too many
                    things</p>
            </div>
        </div>
    );
};

export default Now;
