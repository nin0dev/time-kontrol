import { useEffect, useState } from 'react';

type CountdownProps = {
    duration: number;
    activity: string;
    onStop: () => void;
};

export default function Countdown({ duration, activity, onStop }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      onStop();
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, timeLeft, onStop]);

  const format = (t: number) =>
    `${String(Math.floor(t / 3600)).padStart(2, '0')}:${String(Math.floor((t % 3600) / 60)).padStart(2, '0')}:${String(t % 60).padStart(2, '0')}`;

  return (
    <div>
      <h2 className="text-3xl font-mono mb-4">{format(timeLeft)}</h2>
      <button onClick={() => setIsRunning(true)} className="px-4 py-2 bg-indigo-400 text-white rounded mr-2">
        Start
      </button>
      <button onClick={() => setIsRunning(false)} className="px-4 py-2 bg-black text-white rounded mr-2">
        Stop
      </button>
      <button onClick={() => { setTimeLeft(duration); setIsRunning(false); }} className="px-4 py-2 bg-black text-white rounded">
        Reset
      </button>
    </div>
  );
}