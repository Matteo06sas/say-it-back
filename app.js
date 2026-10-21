const lessons = [
  {
    title: "A missed train",
    topic: "Travel & problem-solving",
    subtitle: "Un imprevisto in stazione. Una nuova soluzione in arrivo.",
    duration: 18,
    focus: "Chiedere informazioni e reagire a un cambio di programma.",
    vocab: [["cancelled", "cancellato"], ["alternative route", "percorso alternativo"], ["relief", "sollievo"]],
    dialogue: [
      ["Maya", "Excuse me, is the train to Oxford still running?"],
      ["Station assistant", "The 10:15 train has been cancelled because of a signal problem."],
      ["Maya", "Oh no. I have an important meeting at noon. Is there another way to get there?"],
      ["Station assistant", "You can take the train to Reading and change there. It should take about two hours."],
      ["Maya", "I see. Do I need to buy a new ticket?"],
      ["Station assistant", "No, your ticket is still valid for the alternative route."],
      ["Maya", "That’s a relief. Thank you for your help."]
    ],
    voiceTitle: "A change of plans",
    voiceover: "Last Saturday, Daniel was travelling to Bristol to visit his sister. He arrived at the station early, but his train was delayed by almost an hour. At first, he felt frustrated because he had planned to have lunch with her. While he was waiting, he checked the train company’s app and found a faster route with one change. He called his sister to explain the situation. She suggested meeting at a café near the new station instead. Daniel arrived later than expected, but they still had a lovely afternoon together.",
    questions: [
      { prompt: "Why was Daniel going to Bristol?", groups: [["visit", "see"], ["sister"]] },
      { prompt: "What problem did he have at the station?", groups: [["train"], ["delayed", "delay"], ["hour"]] },
      { prompt: "How did he find another route?", groups: [["checked", "check"], ["app"], ["faster route", "route"]] },
      { prompt: "Where did Daniel and his sister decide to meet?", groups: [["café", "cafe"], ["new station", "station"]] }
    ],
    prompt: "Have you ever had to change your plans while travelling? What happened?",
    promptHint: "Try: “I was travelling to… when… So I decided to…”"
  },
  {
    title: "A new job",
    topic: "Work & first impressions",
    subtitle: "Nuovo ufficio, nuovi colleghi: il primo giorno di Leo.",
    duration: 17,
    focus: "Raccontare esperienze recenti e prime impressioni.",
    vocab: [["colleague", "collega"], ["to settle in", "ambientarsi"], ["to feel welcome", "sentirsi accolto"]],
    dialogue: [
      ["Nina", "How was your first day at the design studio?"],
      ["Leo", "Better than I expected. Everyone was really friendly."],
      ["Nina", "Did you meet the whole team?"],
      ["Leo", "Not yet. My manager introduced me to the people in my project group."],
      ["Nina", "That helps. What are you working on?"],
      ["Leo", "A new website for a local museum. I’m excited to get started."]
    ],
    voiceTitle: "The first morning",
    voiceover: "When Priya started her new job, she arrived twenty minutes early. She was nervous, but her manager, Tom, was waiting at the entrance. He showed her around the office and introduced her to the team over coffee. Priya had expected a busy first day, so she was surprised when Tom gave her time to read the project notes. Before lunch, a colleague invited her to join a group meeting. By the end of the day, Priya felt more relaxed and already had a clear idea of what to do next.",
    questions: [
      { prompt: "How early did Priya arrive?", groups: [["twenty minutes", "20 minutes"], ["early"]] },
      { prompt: "Who showed her around the office?", groups: [["manager"], ["tom"]] },
      { prompt: "What surprised Priya about the day?", groups: [["time"], ["read", "reading"], ["project notes", "notes"]] },
      { prompt: "How did Priya feel at the end of the day?", groups: [["relaxed", "calm"], ["clear idea", "clear"]] }
    ],
    prompt: "What would help you feel comfortable on your first day in a new place?",
    promptHint: "Try: “I would feel more comfortable if… because…”"
  },
  {
    title: "The flat upstairs",
    topic: "Home & everyday problems",
    subtitle: "Una perdita in cucina e una richiesta fatta con gentilezza.",
    duration: 18,
    focus: "Descrivere un problema in casa e chiedere aiuto in modo cortese.",
    vocab: [["leak", "perdita"], ["landlord", "proprietario"], ["to arrange", "organizzare"]],
    dialogue: [
      ["Sofia", "Hi, I’m calling about the kitchen tap. It’s been leaking since yesterday."],
      ["Landlord", "Thanks for letting me know. Is the leak getting worse?"],
      ["Sofia", "A little. I’ve put a bowl underneath it for now."],
      ["Landlord", "I can send a plumber tomorrow morning. Would that work for you?"],
      ["Sofia", "Yes, that would be great. Could you let me know what time?"],
      ["Landlord", "Of course. I’ll text you this afternoon."]
    ],
    voiceTitle: "A small repair",
    voiceover: "On Monday evening, Ben noticed water under the sink in his rented flat. He turned off the tap and put a towel on the floor. Rather than wait, he took a photo and sent it to his landlord with a short message. The landlord replied within an hour and arranged for a plumber to come the next morning. Ben moved his cleaning supplies out of the cupboard before going to bed. The repair took less than thirty minutes, and the landlord reminded him to report small problems as soon as he noticed them.",
    questions: [
      { prompt: "What did Ben find under the sink?", groups: [["water"], ["under the sink", "sink"]] },
      { prompt: "What did he send to the landlord?", groups: [["photo", "picture"], ["message"]] },
      { prompt: "When did the plumber come?", groups: [["next morning", "morning"], ["tuesday"]] },
      { prompt: "What advice did the landlord give him?", groups: [["report"], ["small problems", "problems"], ["noticed", "notice"]] }
    ],
    prompt: "What small problem at home would you report immediately?",
    promptHint: "Try: “I would report… straight away so that…”"
  },
  {
    title: "Healthy habits",
    topic: "Routines & wellbeing",
    subtitle: "Piccoli cambiamenti che aiutano Nina a dormire meglio.",
    duration: 16,
    focus: "Parlare di abitudini e cambiamenti graduali.",
    vocab: [["habit", "abitudine"], ["to cut down on", "ridurre"], ["to stick to", "mantenere"]],
    dialogue: [
      ["Nina", "I’ve been trying to sleep better this month."],
      ["Amir", "Has anything made a difference?"],
      ["Nina", "I stopped drinking coffee after three in the afternoon."],
      ["Amir", "That’s a good start. Do you use your phone less at night?"],
      ["Nina", "Yes. I leave it in the kitchen and read for a while instead."],
      ["Amir", "Sounds like a routine you can stick to."]
    ],
    voiceTitle: "A calmer evening",
    voiceover: "For years, Nina checked her phone just before bed. She often stayed awake longer than she wanted, reading messages and news. Two weeks ago, she decided to leave her phone outside the bedroom. She also started taking a short walk after work and stopped drinking coffee after three o’clock. The first few evenings felt unusual, but she soon began to fall asleep more easily. Nina says the biggest change was not a perfect routine; it was making one small choice consistently.",
    questions: [
      { prompt: "What did Nina use to do just before bed?", groups: [["checked", "check"], ["phone"]] },
      { prompt: "Where did she start leaving her phone?", groups: [["outside"], ["bedroom"]] },
      { prompt: "What did she stop drinking after three o’clock?", groups: [["coffee"]] },
      { prompt: "What did Nina say was the biggest change?", groups: [["one small choice", "small choice"], ["consistently", "consistency"]] }
    ],
    prompt: "What is one small habit you would like to build, and why?",
    promptHint: "Try: “I’d like to get into the habit of… because…”"
  },
  {
    title: "A trip to remember",
    topic: "Travel & storytelling",
    subtitle: "Un autobus perso, una tazza di tè e un ricordo speciale.",
    duration: 19,
    focus: "Usare il passato per raccontare una storia in modo chiaro.",
    vocab: [["to miss the bus", "perdere l’autobus"], ["to offer", "offrire"], ["unexpected", "inaspettato"]],
    dialogue: [
      ["Jordan", "I had the strangest day on my trip to Wales."],
      ["Ellie", "What happened?"],
      ["Jordan", "I missed the last bus to the village, and it started raining."],
      ["Ellie", "That sounds stressful. What did you do?"],
      ["Jordan", "A family nearby invited me in for tea while I called a taxi."],
      ["Ellie", "So the problem turned into a good story."],
      ["Jordan", "Exactly. It’s the part of the trip I remember most."]
    ],
    voiceTitle: "The unexpected invitation",
    voiceover: "Mia and her brother were hiking in the Lake District when the weather suddenly changed. They had planned a long walk, but heavy rain made the path difficult to follow. They turned back and stopped at a small village shop to check the map. The shop owner noticed their wet clothes and offered them hot chocolate. While they waited for the rain to slow down, she told them about a shorter trail nearby. They finished the day with a walk by the lake and said it was one of their favourite afternoons of the holiday.",
    questions: [
      { prompt: "Where were Mia and her brother hiking?", groups: [["lake district", "district"]] },
      { prompt: "Why did they turn back?", groups: [["heavy rain", "rain"], ["path", "difficult"]] },
      { prompt: "What did the shop owner offer them?", groups: [["hot chocolate", "chocolate"]] },
      { prompt: "What did they do after the rain slowed down?", groups: [["walk"], ["lake"]] }
    ],
    prompt: "Tell me about a trip that did not go as planned. What made it memorable?",
    promptHint: "Try: “At first…, but then… In the end…”"
  },
  {
    title: "Life online",
    topic: "Technology & privacy",
    subtitle: "Emma controlla le autorizzazioni delle app sul suo telefono.",
    duration: 17,
    focus: "Spiegare scelte digitali e dare consigli pratici.",
    vocab: [["permission", "autorizzazione"], ["location data", "dati sulla posizione"], ["to protect", "proteggere"]],
    dialogue: [
      ["Emma", "I checked the permissions on my phone last night."],
      ["Noah", "Did you find anything surprising?"],
      ["Emma", "A torch app had access to my location."],
      ["Noah", "Does it need that to work?"],
      ["Emma", "No, so I turned it off. I also changed two old passwords."],
      ["Noah", "I should probably do the same this weekend."]
    ],
    voiceTitle: "A quick privacy check",
    voiceover: "Emma used to accept every permission request without reading it. Last month, a friend showed her how to review app settings. Emma found that a game was collecting location data even when she was not playing. She changed the setting so the game could only access her location while it was open. She also began using a password manager instead of reusing the same password. The whole check took about fifteen minutes. Emma now reviews her settings every few months and says the process feels simple once you know where to look.",
    questions: [
      { prompt: "What did Emma use to do when apps asked for permission?", groups: [["accept", "accepted"], ["without reading", "not reading"]] },
      { prompt: "What was the game collecting?", groups: [["location data", "location"]] },
      { prompt: "When can the game access her location now?", groups: [["while it was open", "while open", "open"]] },
      { prompt: "How often does Emma review her settings?", groups: [["every few months", "few months"]] }
    ],
    prompt: "What is one simple way to protect your privacy online?",
    promptHint: "Try: “One thing people can do is… This helps because…”"
  },
  {
    title: "A cultural misunderstanding",
    topic: "Communication & culture",
    subtitle: "Una frase ambigua diventa l’occasione per chiedere chiarimenti.",
    duration: 18,
    focus: "Chiarire il significato di una frase e gestire un malinteso.",
    vocab: [["to clarify", "chiarire"], ["to assume", "supporre"], ["misunderstanding", "malinteso"]],
    dialogue: [
      ["Alex", "When Maya said “we should talk,” I thought something was wrong."],
      ["Luca", "What did she mean?"],
      ["Alex", "She just wanted to discuss the next project."],
      ["Luca", "So the phrase sounded more serious than she intended."],
      ["Alex", "Exactly. I asked her what she meant, and she explained."],
      ["Luca", "That was better than guessing."]
    ],
    voiceTitle: "Clearer conversations",
    voiceover: "During a video call, Sam’s new colleague said, “Let’s take this offline.” Sam thought it meant the meeting was over, so he started to say goodbye. The colleague explained that she only wanted to continue the conversation in a smaller group after the call. Sam laughed and admitted he had never heard the expression before. Later, he wrote down a few unfamiliar phrases and asked his team about them. He learned that checking the meaning early can prevent a small language gap from becoming a bigger misunderstanding.",
    questions: [
      { prompt: "What did Sam think “take this offline” meant?", groups: [["meeting was over", "meeting over"], ["goodbye"]] },
      { prompt: "What did his colleague actually want to do?", groups: [["continue"], ["smaller group", "small group"], ["after the call", "after the meeting"]] },
      { prompt: "What did Sam write down later?", groups: [["unfamiliar phrases", "phrases"]] },
      { prompt: "What can checking a meaning early prevent?", groups: [["language gap", "gap"], ["misunderstanding"]] }
    ],
    prompt: "What can you say when you do not understand an expression in English?",
    promptHint: "Try: “Could you explain what… means?” or “Do you mean…?”"
  },
  {
    title: "Small changes, big impact",
    topic: "Community & the environment",
    subtitle: "Un orto condiviso avvicina i vicini e riduce gli sprechi.",
    duration: 20,
    focus: "Descrivere iniziative locali e parlare dei loro effetti.",
    vocab: [["shared garden", "orto condiviso"], ["to reduce waste", "ridurre gli sprechi"], ["neighbourhood", "quartiere"]],
    dialogue: [
      ["Rosa", "Have you seen the new garden behind the library?"],
      ["Ben", "Yes! The neighbours built it together last month."],
      ["Rosa", "They’re growing vegetables and sharing the tools."],
      ["Ben", "I heard they also collect food scraps for compost."],
      ["Rosa", "That’s a clever way to reduce waste."],
      ["Ben", "And people get to know each other while they work."]
    ],
    voiceTitle: "The garden on Maple Street",
    voiceover: "Last spring, a group of residents turned an unused space beside their community centre into a shared garden. They planted vegetables, built a small tool shed, and set up a box for food scraps to make compost. Every Saturday, neighbours meet to water the plants and share jobs. The garden has produced more food than they expected, so they donate extra vegetables to a local café. People say the project has made the street greener, but the best result is that neighbours who had never spoken now work together every week.",
    questions: [
      { prompt: "What was the space beside the community centre like before?", groups: [["unused", "not used"], ["space"]] },
      { prompt: "What do the residents put in the box?", groups: [["food scraps", "scraps"]] },
      { prompt: "Where do they donate extra vegetables?", groups: [["local café", "local cafe", "café", "cafe"]] },
      { prompt: "What do residents say is the best result?", groups: [["neighbours", "neighbors"], ["work together", "together"]] }
    ],
    prompt: "What small change could make your neighbourhood better?",
    promptHint: "Try: “We could… It would help by…”"
  }
];

const stages = ["Dialogo", "Voiceover", "Comprensione", "Your turn"];
const STORAGE_KEY = "say-it-back-progress-v1";
const lessonList = document.querySelector("#lesson-list");
const lessonPanel = document.querySelector("#lesson-panel");
const progressLabel = document.querySelector("#progress-label");
const courseProgress = document.querySelector("#course-progress");
const politeStatus = document.querySelector("#polite-status");

function readSavedState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return {
      selected: Number.isInteger(saved.selected) && saved.selected >= 0 && saved.selected < lessons.length ? saved.selected : 0,
      stage: stages.includes(saved.stage) ? saved.stage : stages[0],
      completed: Array.isArray(saved.completed) ? saved.completed.filter((index) => Number.isInteger(index) && index >= 0 && index < lessons.length) : [],
      answers: saved.answers && typeof saved.answers === "object" ? saved.answers : {},
      feedback: saved.feedback && typeof saved.feedback === "object" ? saved.feedback : {},
      replies: saved.replies && typeof saved.replies === "object" ? saved.replies : {},
      replyFeedback: saved.replyFeedback && typeof saved.replyFeedback === "object" ? saved.replyFeedback : {}
    };
  } catch {
    return { selected: 0, stage: stages[0], completed: [], answers: {}, feedback: {}, replies: {}, replyFeedback: {} };
  }
}

let state = readSavedState();

function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch { /* Progress still works for this visit if storage is unavailable. */ }
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}

function keyFor(lessonIndex, questionIndex) { return `${lessonIndex}:${questionIndex}`; }

function renderLessonList() {
  lessonList.innerHTML = lessons.map((lesson, index) => {
    const current = index === state.selected;
    const completed = state.completed.includes(index);
    return `<li>
      <button class="lesson-button${completed ? " is-complete" : ""}" type="button" data-lesson="${index}"${current ? ' aria-current="step"' : ""}>
        <span class="lesson-index">${completed ? "✓" : String(index + 1).padStart(2, "0")}</span>
        <span class="lesson-title">${escapeHTML(lesson.title)}<span class="lesson-meta">${lesson.duration} min · B1–B2</span></span>
        <span class="lesson-check" aria-hidden="true">${completed ? "✓" : ""}</span>
      </button>
    </li>`;
  }).join("");
  progressLabel.textContent = `${state.completed.length} di ${lessons.length}`;
  courseProgress.value = state.completed.length;
  courseProgress.textContent = `${state.completed.length} di ${lessons.length}`;
}

function renderTabs() {
  return `<nav class="lesson-tabs" aria-label="Fasi della lezione">${stages.map((stage, index) => `
    <button class="stage-tab" type="button" data-stage="${escapeHTML(stage)}"${state.stage === stage ? ' aria-current="step"' : ""}>
      <span class="stage-num">${index + 1}</span>${escapeHTML(stage)}
    </button>`).join("")}</nav>`;
}

function renderDialogue(lesson) {
  const lines = lesson.dialogue.map(([speaker, text], index) => `
    <div class="dialogue-line">
      <span class="speaker-badge" aria-hidden="true">${escapeHTML(speaker.slice(0, 1))}</span>
      <div class="dialogue-bubble"><span class="dialogue-speaker">${escapeHTML(speaker)}</span><p class="dialogue-text">${escapeHTML(text)}</p></div>
      <button class="inline-audio" type="button" data-speak="${escapeHTML(text)}" aria-label="Ascolta la battuta ${index + 1}">▶</button>
    </div>`).join("");
  const vocab = lesson.vocab.map(([english, italian]) => `<span class="vocab-chip"><strong>${escapeHTML(english)}</strong><span>${escapeHTML(italian)}</span></span>`).join("");
  return `<div class="stage-content">
    <p class="content-kicker">Step 1 · Leggi e osserva</p>
    <h3>Un dialogo, una situazione reale.</h3>
    <p class="stage-description">Leggi la conversazione. Se vuoi, ascolta ogni battuta e nota le parole utili.</p>
    <div class="vocab-row" aria-label="Parole utili">${vocab}</div>
    <div class="dialogue-list">${lines}</div>
  </div>`;
}

function renderVoiceover(lesson) {
  return `<div class="stage-content">
    <p class="content-kicker">Step 2 · Ascolta il voiceover</p>
    <h3>Ascolta il senso generale, poi i dettagli.</h3>
    <p class="stage-description">Puoi riascoltarlo tutte le volte che vuoi. La trascrizione è disponibile qui sotto.</p>
    <article class="voiceover-card">
      <div class="voiceover-top">
        <div class="voiceover-heading"><span class="voiceover-symbol" aria-hidden="true">♫</span><div><span>LISTENING · B1–B2</span><strong>${escapeHTML(lesson.voiceTitle)}</strong></div></div>
        <button class="listen-button" type="button" data-action="listen-voiceover"><span aria-hidden="true">▶</span> Ascolta</button>
      </div>
      <p>Prima ascolta senza leggere. Poi prova a rispondere alle domande basandoti su ciò che hai capito.</p>
      <details class="transcript-details"><summary>Apri la trascrizione</summary><p lang="en-GB">${escapeHTML(lesson.voiceover)}</p></details>
    </article>
    <p class="listen-hint" id="listen-hint">La voce sintetica usa l’inglese britannico, se disponibile nel browser.</p>
  </div>`;
}

function normalise(text) {
  return String(text).toLocaleLowerCase("en").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[’']/g, "'").replace(/[^a-z0-9\s'-]/g, " ").replace(/\s+/g, " ").trim();
}

function evaluateQuestion(answer, groups) {
  const normalized = normalise(answer);
  const matched = groups.filter((group) => group.some((term) => normalized.includes(normalise(term))));
  const required = Math.max(1, Math.ceil(groups.length / 2));
  return { correct: matched.length >= required, matched: matched.length, required };
}

function renderComprehension(lesson) {
  const questions = lesson.questions.map((question, questionIndex) => {
    const key = keyFor(state.selected, questionIndex);
    const feedback = state.feedback[key];
    const savedAnswer = escapeHTML(state.answers[key] || "");
    const feedbackHTML = feedback ? `<p class="answer-feedback" id="feedback-${questionIndex}" data-state="${feedback.correct ? "good" : "try"}" role="status" tabindex="-1">${feedback.correct ? "✓ " : "↳ "}${escapeHTML(feedback.message)}</p>` : `<p class="answer-feedback" id="feedback-${questionIndex}" role="status" tabindex="-1"></p>`;
    return `<li class="question-item">
      <form class="question-form" data-question="${questionIndex}">
        <div class="question-heading"><span class="question-number">${questionIndex + 1}</span><label class="question-prompt" for="answer-${questionIndex}">${escapeHTML(question.prompt)}</label></div>
        <div class="answer-row"><input class="answer-input" id="answer-${questionIndex}" name="answer" type="text" autocomplete="off" value="${savedAnswer}" placeholder="Answer in English…" aria-describedby="feedback-${questionIndex}" required><button class="check-button" type="submit">Controlla</button></div>
        ${feedbackHTML}
      </form>
    </li>`;
  }).join("");
  const successCount = lesson.questions.filter((_, index) => state.feedback[keyFor(state.selected, index)]?.correct).length;
  return `<div class="stage-content">
    <p class="content-kicker">Step 3 · Comprensione</p>
    <h3>What did you understand?</h3>
    <p class="stage-description">Rispondi in inglese con una frase breve. Se una risposta non passa, aggiungi un dettaglio dal voiceover e riprova.</p>
    <ol class="question-list">${questions}</ol>
    <p class="listen-hint">Parole chiave riconosciute: una verifica guidata, non un voto sulla grammatica.</p>
    ${successCount === lesson.questions.length ? `<div class="complete-banner" role="status"><span aria-hidden="true">✓</span><div><strong>Nice work — hai colto i dettagli.</strong>Continua con una risposta personale in inglese.</div></div>` : ""}
  </div>`;
}

function renderSpeaking(lesson) {
  const savedReply = escapeHTML(state.replies[state.selected] || "");
  const feedback = state.replyFeedback[state.selected];
  const recognitionAvailable = Boolean(window.SpeechRecognition || window.webkitSpeechRecognition);
  const feedbackHTML = feedback ? `<p class="reply-feedback is-visible" role="status" tabindex="-1">${escapeHTML(feedback)}</p>` : `<p class="reply-feedback" role="status" tabindex="-1"></p>`;
  return `<div class="stage-content">
    <p class="content-kicker">Step 4 · Your turn</p>
    <h3>Adesso la conversazione è tua.</h3>
    <p class="stage-description">Ascolta la domanda e rispondi in inglese. Puoi scrivere oppure dettare la risposta, se il browser supporta la dettatura.</p>
    <div class="prompt-card">
      <p class="prompt-overline">A question for you</p>
      <p class="prompt-question" lang="en-GB">${escapeHTML(lesson.prompt)}</p>
      <div class="prompt-actions">
        <button class="secondary-button" type="button" data-speak-prompt><span aria-hidden="true">▶</span> Ascolta la domanda</button>
        ${recognitionAvailable ? `<button class="secondary-button" type="button" data-action="record-reply"><span aria-hidden="true">◉</span> Rispondi a voce</button>` : ""}
      </div>
      <form id="reply-form">
        <label class="sr-only" for="reply-input">La tua risposta in inglese</label>
        <textarea class="reply-input" id="reply-input" name="reply" placeholder="Write your answer in English…" lang="en" required>${savedReply}</textarea>
        <div class="reply-footer"><p class="reply-note">${escapeHTML(lesson.promptHint)} La risposta resta in questo browser. Il feedback ti aiuta a svilupparla, non assegna un voto alla grammatica.</p><button class="submit-reply" type="submit">Invia risposta <span aria-hidden="true">→</span></button></div>
        ${feedbackHTML}
      </form>
    </div>
    ${state.completed.includes(state.selected) ? `<div class="complete-banner"><span aria-hidden="true">✓</span><div><strong>Lezione completata!</strong>Il tuo progresso è stato aggiornato nel percorso.</div></div>` : ""}
  </div>`;
}

function renderStage(lesson) {
  if (state.stage === stages[0]) return renderDialogue(lesson);
  if (state.stage === stages[1]) return renderVoiceover(lesson);
  if (state.stage === stages[2]) return renderComprehension(lesson);
  return renderSpeaking(lesson);
}

function renderLesson() {
  const lesson = lessons[state.selected];
  const completed = state.completed.includes(state.selected);
  const stageIndex = stages.indexOf(state.stage);
  const footerAction = stageIndex < stages.length - 1
    ? `<button class="next-button" type="button" data-action="next-stage">${stageIndex === 1 ? "Vai alle domande" : stageIndex === 2 ? "Passa alla tua risposta" : "Continua"} <span aria-hidden="true">→</span></button>`
    : `<button class="next-button" type="button" data-action="complete-lesson"${completed ? " disabled" : ""}>${completed ? "Lezione completata ✓" : "Segna come completata"}${completed ? "" : ' <span aria-hidden="true">✓</span>'}</button>`;
  const footerText = stageIndex === 2 ? "Puoi correggere le risposte e tornare al voiceover." : `Fase ${stageIndex + 1} di ${stages.length}`;
  const allComplete = state.completed.length === lessons.length;
  lessonPanel.innerHTML = `
    <div class="lesson-topline"><p class="lesson-topic">${escapeHTML(lesson.topic)}</p><span class="lesson-time"><span aria-hidden="true">◷</span> ${lesson.duration} min · B1–B2</span></div>
    <h2 id="active-lesson-title" tabindex="-1">${escapeHTML(lesson.title)}</h2>
    <p class="lesson-subtitle">${escapeHTML(lesson.subtitle)}</p>
    ${renderTabs()}
    ${renderStage(lesson)}
    <div class="stage-footer"><span class="stage-progress-text">${escapeHTML(footerText)}</span>${footerAction}</div>
    ${allComplete ? `<div class="complete-banner" role="status"><span aria-hidden="true">✳</span><div><strong>Course complete — you did it!</strong>Hai completato tutte le storie del percorso.</div></div>` : ""}`;
}

function renderAll() {
  renderLessonList();
  renderLesson();
}

function announce(message) {
  politeStatus.textContent = "";
  window.setTimeout(() => { politeStatus.textContent = message; }, 30);
}

function speak(text) {
  if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
    announce("La sintesi vocale non è disponibile. Puoi aprire la trascrizione.");
    const hint = document.querySelector("#listen-hint");
    if (hint) hint.textContent = "La sintesi vocale non è disponibile in questo browser: apri la trascrizione qui sopra.";
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-GB";
  utterance.rate = 0.94;
  const voices = window.speechSynthesis.getVoices();
  const voice = voices.find((candidate) => candidate.lang.toLowerCase() === "en-gb") || voices.find((candidate) => candidate.lang.toLowerCase().startsWith("en"));
  if (voice) utterance.voice = voice;
  window.speechSynthesis.speak(utterance);
}

function selectLesson(index) {
  window.speechSynthesis?.cancel();
  state.selected = index;
  state.stage = stages[0];
  saveState();
  renderAll();
  document.querySelector("#active-lesson-title")?.focus({ preventScroll: true });
  announce(`Lezione ${index + 1}: ${lessons[index].title}`);
}

lessonList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-lesson]");
  if (button) selectLesson(Number(button.dataset.lesson));
});

lessonPanel.addEventListener("click", (event) => {
  const stageButton = event.target.closest("[data-stage]");
  if (stageButton) {
    window.speechSynthesis?.cancel();
    state.stage = stageButton.dataset.stage;
    saveState();
    renderLesson();
    return;
  }

  const speakButton = event.target.closest("[data-speak]");
  if (speakButton) { speak(speakButton.dataset.speak); return; }
  if (event.target.closest("[data-speak-prompt]")) { speak(lessons[state.selected].prompt); return; }

  const actionButton = event.target.closest("[data-action]");
  if (!actionButton) return;
  if (actionButton.dataset.action === "listen-voiceover") {
    speak(lessons[state.selected].voiceover);
  } else if (actionButton.dataset.action === "next-stage") {
    state.stage = stages[Math.min(stages.indexOf(state.stage) + 1, stages.length - 1)];
    saveState();
    renderLesson();
    document.querySelector(".lesson-tabs [aria-current='step']")?.focus({ preventScroll: true });
  } else if (actionButton.dataset.action === "complete-lesson") {
    if (!state.completed.includes(state.selected)) state.completed.push(state.selected);
    saveState();
    renderAll();
    announce(`Lezione completata. Progresso: ${state.completed.length} su ${lessons.length}.`);
  } else if (actionButton.dataset.action === "record-reply") {
    startSpeechRecognition(actionButton);
  }
});

lessonPanel.addEventListener("input", (event) => {
  if (event.target.matches(".answer-input")) {
    const form = event.target.closest("[data-question]");
    state.answers[keyFor(state.selected, Number(form.dataset.question))] = event.target.value;
    saveState();
  } else if (event.target.matches("#reply-input")) {
    state.replies[state.selected] = event.target.value;
    saveState();
  }
});

lessonPanel.addEventListener("submit", (event) => {
  event.preventDefault();
  const questionForm = event.target.closest("[data-question]");
  if (questionForm) {
    const questionIndex = Number(questionForm.dataset.question);
    const answer = questionForm.elements.answer.value.trim();
    if (!answer) { questionForm.elements.answer.focus(); return; }
    const result = evaluateQuestion(answer, lessons[state.selected].questions[questionIndex].groups);
    const feedback = result.correct
      ? { correct: true, message: "Good answer — hai incluso abbastanza dettagli chiave." }
      : { correct: false, message: "Quasi. Riascolta quel passaggio e aggiungi un dettaglio preciso." };
    state.answers[keyFor(state.selected, questionIndex)] = answer;
    state.feedback[keyFor(state.selected, questionIndex)] = feedback;
    saveState();
    renderLesson();
    document.querySelector(`#feedback-${questionIndex}`)?.focus({ preventScroll: true });
    announce(feedback.message);
    return;
  }

  if (event.target.id === "reply-form") {
    const reply = event.target.elements.reply.value.trim();
    if (!reply) { event.target.elements.reply.focus(); return; }
    state.replies[state.selected] = reply;
    const words = reply.split(/\s+/).filter(Boolean).length;
    state.replyFeedback[state.selected] = words < 7
      ? "Good start. Aggiungi un dettaglio o una ragione: prova a continuare con ‘because…’ oppure ‘for example…’."
      : "Nice work — hai sviluppato la risposta. Per renderla ancora più chiara, aggiungi un esempio concreto o una frase con ‘because’.";
    saveState();
    renderLesson();
    document.querySelector(".reply-feedback")?.focus({ preventScroll: true });
    announce("Risposta salvata. Puoi continuare o segnare la lezione come completata.");
  }
});

function startSpeechRecognition(button) {
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!Recognition) {
    announce("La dettatura non è disponibile in questo browser. Scrivi la risposta nel campo di testo.");
    return;
  }
  const recognition = new Recognition();
  recognition.lang = "en-GB";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  button.disabled = true;
  button.textContent = "In ascolto…";
  announce("Parla ora in inglese.");
  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    const input = document.querySelector("#reply-input");
    if (input) {
      input.value = transcript;
      state.replies[state.selected] = transcript;
      saveState();
      input.focus();
    }
    announce(`Risposta trascritta: ${transcript}`);
  };
  recognition.onerror = (event) => announce(event.error === "not-allowed" ? "Microfono non autorizzato. Puoi scrivere la risposta." : "Non ho rilevato la risposta. Riprova o scrivila nel campo.");
  recognition.onend = () => {
    const activeButton = document.querySelector("[data-action='record-reply']");
    if (activeButton) { activeButton.disabled = false; activeButton.innerHTML = '<span aria-hidden="true">◉</span> Rispondi a voce'; }
  };
  try { recognition.start(); } catch { announce("Non è possibile avviare la dettatura. Puoi scrivere la risposta."); }
}

window.addEventListener("beforeunload", () => window.speechSynthesis?.cancel());
renderAll();

