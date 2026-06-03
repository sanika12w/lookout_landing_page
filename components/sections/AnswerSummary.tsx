import Link from "next/link";

const answers = [
  {
    question: "How can I record front and back cameras simultaneously on iPhone?",
    answer:
      "Lookout allows users to record both front and rear cameras simultaneously using Split Screen, PiP, and Focus modes.",
    href: "/front-and-back-camera-recording",
    label: "Front and back camera guide",
  },
  {
    question: "What is PiP recording?",
    answer:
      "PiP recording displays one camera feed inside another, making it useful for reactions, commentary, interviews, and creator content.",
    href: "/split-screen-video-recorder",
    label: "PiP and Split Screen guide",
  },
  {
    question: "What is Focus mode?",
    answer:
      "Focus mode reduces interface distraction while recording, helping mounted iPhone setups, longer sessions, and low-glow capture.",
    href: "/iphone-vlog-recording-app",
    label: "Vlog workflow guide",
  },
] as const;

export function AnswerSummary() {
  return (
    <section className="section-shell answer-summary" aria-labelledby="answer-summary-title">
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow">QUICK ANSWERS</p>
        <h2 id="answer-summary-title" className="section-title">
          How does Lookout record front and rear iPhone cameras?
        </h2>
        <p className="section-copy">
          Lookout is an iPhone dual camera recording app for capturing front and rear camera video together in Split Screen, PiP, and Focus modes.
        </p>
      </div>
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {answers.map((item) => (
          <article key={item.question} className="premium-card p-7">
            <h3 className="text-xl font-semibold text-white">{item.question}</h3>
            <p className="mt-4 leading-7 text-zinc-400">{item.answer}</p>
            <Link href={item.href} className="text-link mt-5 inline-flex">
              {item.label}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
