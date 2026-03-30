'use client';

import { useState, useRef, useEffect } from 'react';
import JSConfetti from 'js-confetti';

const reasons = [
  "My ex said it was small anyway",
  "The voices in my head unionized and demanded sacrifice",
  "To own the libs",
  "For TikTok clout before I rope",
  "Because hugging my family feels too good",
  "I lost a bet to a raccoon on Discord",
  "My therapist said 'feel your feelings' so now I feel nothing",
  "The government is putting 5G in my balls",
  "I identify as one-armed now, it's my truth",
  "My dominant hand kept voting wrong",
  "To make my OnlyFans more interesting",
  "Because why the fuck not",
  "My left arm kept texting my ex",
  "I need a handicap parking spot in life",
  "To finally win an argument with my mom",
  "The arm was voting for the wrong party",
  "I wanted to be a pirate but I hate water",
  "Because two arms are too much responsibility",
  "My arm kept winning at arm wrestling and it went to its head",
  "To reduce my carbon footprint by 50%",
  "The voices told me it would make me 37% more attractive",
  "I saw a one-armed guy get more likes on Instagram",
  "Because my arms were starting a podcast without me",
  "To save money on sleeves",
  "My arm betrayed me by waving at my crush first",
  "I need both hands free... wait no, now I need zero",
  "The doctor said I have too much blood",
  "To become a better drummer (one stick only)",
  "My arm kept eating the last slice of pizza",
  "Because participation trophies aren't enough anymore",
  "I lost rock paper scissors to myself",
  "To test if my mom actually loves me",
  "The arm was secretly a fed",
  "I want to high-five with my stump",
  "Because God said 'less is more'",
  "My arm kept liking my ex's stories",
  "To join the OneArmGang hall of fame",
  "I ran out of copium and started mainlining hopium",
  "The government microchipped my dominant hand",
  "Because two arms make me look too employable",
  "My arm filed for divorce",
  "To make airport security easier",
  "I need an excuse to never shake hands again",
  "Because my arms were plotting against me in my sleep",
  "To become the ultimate 'lefty' or 'righty' debate winner",
  "My arm kept scrolling TikTok instead of letting me sleep",
  "I want to be known as 'that guy who actually did it'",
  "Because existential dread hits different with one arm",
  "The arm was too woke",
  "To save on deodorant for one pit",
  "My arm ghosted me after we argued",
  "Because I saw it in a dream and dreams don't lie",
  "To win the 'most retarded decision of 2026' award",
  "My arm kept winning Fortnite while I lost",
  "I need to level up my victim points",
  "Because hugging feels like a war crime now",
  "The voices said it would fix my credit score",
  "To become a professional thumb wrestler",
  "My arm was the real simp in the relationship",
  "Because two arms = too many bad decisions",
  "I lost a fight to a Roomba",
  "To make my dating profile more mysterious",
  "The arm kept calling the suicide hotline for me",
  "Because I'm transitioning to torso mode",
  "My arm voted yes on the group chat poll",
  "To reduce my therapy bill by half",
  "I saw a limbless influencer making bank",
  "Because my arms started a union and demanded raises",
  "To finally beat my high score in 'how fucked am I'",
  "The government needs my DNA and the arm has it",
  "My arm kept saying 'skill issue' when I failed",
  "Because one arm is enough to flip off the world",
  "I need a built-in conversation starter for life",
  "To make my shadow look cooler",
  "My arm betrayed me by applauding my enemies",
  "Because I'm too lazy to maintain two arms",
  "The voices offered me a better deal with one arm",
  "To join the 'no handjobs' club ironically",
  "My arm kept winning arguments on Reddit",
  "Because life is pain and pain is life",
  "I want to be carried like a baby forever",
  "The arm was the toxic one in our friendship",
  "To test if blood tastes like irony",
  "Because two arms make me look suspiciously normal",
  "My arm filed a restraining order against me",
  "To become Singapore's official national retard",
  "The voices said it would make me go viral",
  "Because my arms were planning a coup",
  "I need fewer appendages to disappoint people with",
  "To make my 'no cap' actually mean no arm",
  "My arm kept snitching on my search history",
  "Because I'm speedrunning becoming unemployable",
  "The arm lost a staring contest with my depression",
  "To finally have a valid excuse for everything",
  "My arm started a religion that banned me",
  "Because one arm = 100% more based",
  "I saw it on ARM.lol and thought 'why not me'",
  "To make my mom regret not aborting just the arm",
  "Because the leaderboard called and I answered",
  "My arm kept saying 'touch grass' while I touched nothing",
  "To become the final boss of dark humor",
  "Because two arms are for normies and I'm built different"
];

type Entry = {
  id: number;
  username: string;
  arm: string;
  reason: string;
  score: number;
  timestamp: number;
};

export default function ArmChop() {
  const [selectedArm, setSelectedArm] = useState<'left' | 'right' | 'both' | null>(null);
  const [selectedReason, setSelectedReason] = useState('');
  const [username, setUsername] = useState('Abdul from Singapore'); // default retard name
  const [isChopped, setIsChopped] = useState(false);
  const [certificate, setCertificate] = useState('');
  const [retardScore, setRetardScore] = useState(0);
  const [leaderboard, setLeaderboard] = useState<Entry[]>([]);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const jsConfetti = useRef<JSConfetti | null>(null);

  // Load leaderboard from localStorage
  useEffect(() => {
    jsConfetti.current = new JSConfetti();
    
    const saved = localStorage.getItem('armLeaderboard');
    if (saved) {
      setLeaderboard(JSON.parse(saved));
    } else {
      // Seed with funny fake entries so it looks alive from day 1
      const seed: Entry[] = [
        { id: 1, username: "RaccoonBetLad", arm: "both", reason: "lost a bet to a raccoon on Discord", score: 9876, timestamp: Date.now() - 1000000 },
        { id: 2, username: "5G_Balls", arm: "right", reason: "The government is putting 5G in my balls", score: 9420, timestamp: Date.now() - 2000000 },
        { id: 3, username: "TherapyFailed", arm: "left", reason: "My therapist said feel your feelings", score: 8699, timestamp: Date.now() - 3000000 },
        { id: 4, username: "OneArmChad", arm: "both", reason: "To own the libs", score: 6969, timestamp: Date.now() - 4000000 },
      ];
      setLeaderboard(seed);
      localStorage.setItem('armLeaderboard', JSON.stringify(seed));
    }
  }, []);

  // Save to localStorage whenever leaderboard changes
  useEffect(() => {
    localStorage.setItem('armLeaderboard', JSON.stringify(leaderboard));
  }, [leaderboard]);

  const chop = () => {
    if (!selectedArm) return;

    const reason = selectedReason || reasons[Math.floor(Math.random() * reasons.length)];
    const score = Math.floor(Math.random() * 4000) + 6000; // high scores for dopamine

    setRetardScore(score);
    setIsChopped(true);

    // Blood + confetti (same as before)
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx.fillStyle = '#8B0000';
        for (let i = 0; i < 80; i++) {
          ctx.beginPath();
          ctx.ellipse(Math.random() * canvas.width, Math.random() * canvas.height * 0.7 + 100, Math.random() * 60 + 20, Math.random() * 30 + 10, Math.random() * Math.PI, 0, Math.PI * 2);
          ctx.fill();
        }
        setTimeout(() => { if (canvas) canvas.style.opacity = '0.85'; }, 100);
      }
    }

    if (jsConfetti.current) {
      jsConfetti.current.addConfetti({ emojis: ['🖕', '💀', '🩸', '🔪', '🤡'], emojiSize: 60, confettiNumber: 120 });
      setTimeout(() => jsConfetti.current?.addConfetti({ emojis: ['🖕'], emojiSize: 90, confettiNumber: 40 }), 400);
    }

    const armText = selectedArm === 'both' ? 'BOTH arms' : `${selectedArm} arm`;
    const cert = `OFFICIAL RETARD CERTIFICATE #${Math.floor(Math.random() * 900000) + 100000}\n\n${new Date().toLocaleDateString()} — HellHole\n\n${username} just chopped his ${armText} off because:\n\n"${reason}"\n\nNew Retard Score: ${score}\n\nRemaining IQ: Probably negative\n\nYou are now officially funnier than 99% of the population.`;

    setCertificate(cert);

    // ADD TO LEADERBOARD
    const newEntry: Entry = {
      id: Date.now(),
      username: username.trim() || "Anonymous Retard",
      arm: selectedArm,
      reason: reason,
      score: score,
      timestamp: Date.now()
    };

    const updated = [...leaderboard, newEntry]
      .sort((a, b) => b.score - a.score)  // highest first
      .slice(0, 10); // top 10 only

    setLeaderboard(updated);
  };

  const reset = () => {
    setIsChopped(false);
    setSelectedArm(null);
    setSelectedReason('');
    setCertificate('');
    const canvas = canvasRef.current;
    if (canvas) canvas.style.opacity = '0';
  };

  const clearLeaderboard = () => {
    if (confirm("Wipe the hall of fame? (this is permanent for this browser)")) {
      localStorage.removeItem('armLeaderboard');
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen bg-black text-red-500 flex flex-col items-center p-6 overflow-hidden relative">
      <canvas ref={canvasRef} className="splatter pointer-events-none fixed inset-0 z-10" />

      <div className="text-center z-20 max-w-4xl w-full">
        <h1 className=" text-6xl md:text-8xl font-black blood-text tracking-tighter mb-2">ARM<span className="text-white">.</span>lol</h1>
        <p className="text-red-400 text-xl mb-8">Chop your arm. Get on the leaderboard. Become a legend.</p>

        {!isChopped ? (
          <>
            {/* LEADERBOARD - always visible */}
            <div className="mb-12 bg-zinc-950 border-2 border-red-800 p-6 rounded">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl font-black text-white">🏆 TODAY'S TOP RETARDS 🏆</h2>
                {/* <button onClick={clearLeaderboard} className="text-xs text-red-700 hover:text-red-500">clear (for testing)</button> */}
              </div>
              <div className="space-y-2 text-left max-h-80 overflow-y-auto font-mono text-sm">
                {leaderboard.length === 0 ? (
                  <p className="text-red-700">No one has chopped yet. Be the first legend.</p>
                ) : (
                  leaderboard.map((entry, index) => (
                    <div key={entry.id} className="flex justify-between border-b border-red-900 pb-2">
                      <span>#{index + 1} {entry.username} — {entry.arm} arm</span>
                      <span className="text-white">{entry.score} pts — "{entry.reason.slice(0, 45)}{entry.reason.length > 45 ? '...' : ''}"</span>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Chop section */}
            <div className="space-y-8">
              <div>
                <p className="text-white mb-3">Your retard name (for the hall of fame):</p>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full max-w-md mx-auto bg-black border-2 border-red-800 p-4 text-white text-center text-xl focus:border-red-600"
                  placeholder="Abdul from Singapore"
                />
              </div>

              <div>
                <p className="text-white mb-4">Choose your sacrifice:</p>
                <div className="md:flex gap-10 justify-center text-8xl">
                  {(['left', 'right', 'both'] as const).map((arm) => (
                    <button
                      key={arm}
                      onClick={() => setSelectedArm(arm)}
                      className={`transition-all ${selectedArm === arm ? 'scale-125 text-red-500 mb-4' : 'hover:scale-110 opacity-70 mb-4'}`}
                    >
                      {arm === 'both' ? '🦾💪' : arm === 'left' ? '💪' : '🦾'}
                    </button>
                  ))}
                </div>
              </div>

              <select
                value={selectedReason}
                onChange={(e) => setSelectedReason(e.target.value)}
                className="w-full max-w-md mx-auto bg-black border-2 border-red-800 text-white p-4 text-lg"
              >
                <option value="">Pick a retarded reason...</option>
                {reasons.map((r, i) => <option key={i} value={r}>{r}</option>)}
              </select>

              <button
                onClick={chop}
                disabled={!selectedArm}
                className="mt-6 px-24 py-8 bg-red-700 hover:bg-red-600 disabled:bg-gray-800 text-white text-5xl font-black border-4 border-red-900 active:scale-95 transition-all"
              >
                CHOP IT OFF
              </button>
            </div>
          </>
        ) : (
          <div className="certificate bg-zinc-950 border-4 border-red-800 p-10 max-w-2xl mx-auto text-left whitespace-pre-wrap font-mono text-red-400 leading-relaxed">
            {certificate}
            
            <div className="mt-10 flex gap-4">
              <button onClick={reset} className="flex-1 py-5 bg-black border border-red-700 hover:bg-red-950 text-white font-bold">
                TRY AGAIN (lose more IQ)
              </button>
              <button 
                onClick={() => {
                  const tweet = `Just chopped my ${selectedArm === 'both' ? 'BOTH arms' : selectedArm + ' arm'} off on https://arm.lol\nReason: "${selectedReason || 'random retardation'}"\nRetard Score: ${retardScore}\nI'm now on the leaderboard, bitch. #OneArmGang #ARMlol`;
                  navigator.clipboard.writeText(tweet);
                  alert("✅ Copied! Paste it everywhere like a true degenerate.");
                }}
                className="flex-1 py-5 bg-red-700 hover:bg-red-600 text-white font-bold"
              >
                COPY & POST TO TWITTER/DISCORD
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="absolute bottom-6 text-red-900 text-xs">
        Built for retards, by a retard • Scores saved in your browser only • Real virality starts when you share
      </div>
    </div>
  );
}
