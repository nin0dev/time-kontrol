import { useEffect, useState } from 'react';

type CountupProps = {
  activity: string;
  onStop: () => void;
};

export default function Countup({ activity, onStop }: CountupProps) {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning]);

  const format = (t: number) =>
    `${String(Math.floor(t / 3600)).padStart(2, '0')}:${String(Math.floor((t % 3600) / 60)).padStart(2, '0')}:${String(t % 60).padStart(2, '0')}`;

  const handleStop = () => {
    setIsRunning(false);
    onStop();
  };

  return (
    <div>
      <h2 className="text-3xl font-mono mb-4">{format(time)}</h2>
      <button onClick={() => setIsRunning(true)} className="px-4 py-2 bg-indigo-400 text-white rounded mr-2">
        Start
      </button>
      <button onClick={handleStop} className="px-4 py-2 bg-black text-white rounded mr-2">
        Stop
      </button>
      <button onClick={() => { setTime(0); setIsRunning(false); }} className="px-4 py-2 bg-black text-white rounded">
        Reset
      </button>
    </div>
  );
}