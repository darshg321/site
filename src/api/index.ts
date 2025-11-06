export const config = {
    runtime: "edge",
};

export default async function handler(req: Request) {
    const ua = req.headers.get("user-agent") || "";

    // any terminal cmd
    if (/curl|wget|httpie|python-requests/i.test(ua)) {
        const encoder = new TextEncoder();
        const stream = new ReadableStream({
            async start(controller) {
                const messages = [
                    "hi, i'm darsh !!\n",
                    "this text is streamed dynamically.\n",
                    "works perfectly with curl.\n",
                ];
                for (const msg of messages) {
                    controller.enqueue(encoder.encode(msg));
                    await new Promise((r) => setTimeout(r, 400));
                }
                controller.close();
            },
        });

        return new Response(stream, {
            headers: {"Content-Type": "text/plain; charset=utf-8"},
        });
    }


    return Response.redirect("/", 302);
}
