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
        <div class={"flex flex-col items-center px-6 py-12 max-w-3xl mx-auto"}>
            <div class={"flex flex-col w-full"}>
                <div class={"flex flex-row items-center justify-center py-12 space-x-6"}>
                    <img
                        src={"/speaker.svg"}
                        onClick={playPronunciation}
                        class="cursor-pointer hover:opacity-70 transition-opacity"
                        alt="Play pronunciation"
                        width={32}
                        height={32}
                    />
                    <div class={"flex flex-col"}>
                        <p class="text-4xl font-medium">now</p>
                        <p class="text-sm text-gray-500 font-mono">/nou/</p>
                        <p class="text-sm text-gray-600">key site component</p>
                    </div>
                </div>
                <div class={"border-l-4 border-[#fe8839] pl-6 mb-8"}>
                    <p class={"italic text-gray-600 text-base"}>
                        a person's current focus; what you'd tell a friend you hadn't seen in a year.</p>
                </div>
            </div>
            <div class={"w-full mt-8 pt-8 border-t border-gray-200"}>
                <p class="text-base text-gray-700 leading-relaxed">still in Mississauga (boring). currently focused on studying for the SAT (1530??), learning chemistry
                    for the Canadian Chemistry Olympiad, making hardware projects, and generally just doing too many
                    things</p>
            </div>
        </div>
    );
};

export default Now;
