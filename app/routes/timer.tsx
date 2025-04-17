import { useState } from 'react';
import { Link } from 'react-router';
import Countdown from '~/components/Countdown';
import Countup from '~/components/Countup';
import { db } from '../firebase/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

export default function TimerPage() {
  const [mode, setMode] = useState<'countdown' | 'countup' | null>(null);
  const [duration, setDuration] = useState<number | null>(null);
  const [activity, setActivity] = useState('');
  const [sessionEnded, setSessionEnded] = useState(false);

  const handleSessionStop = () => {
    setSessionEnded(true);
  };

  const handlePresetClick = (seconds: number) => {
    setMode('countdown');
    setDuration(seconds);
  };

  const handleFreeClick = () => {
    setMode('countup');
    setDuration(null);
  };

  const handleSaveSession = async () => {
    await addDoc(collection(db, 'sessions'), {
      activity,
      mode,
      duration,
      endedAt: serverTimestamp()
    });
    setSessionEnded(false);
    setMode(null);
    setActivity('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center py-5 px-10 w-fit bg-white rounded-xl shadow-lg">
            <h1 className="text-2xl text-indigo-400 font-bold">TimeKontrol</h1>
            <p>by <Link className="underline" target="_blank" to="https://github.com/nin0dev">Nino Berber</Link></p>
            <div className="my-4">
                <label htmlFor="activity" className="block text-gray-700 font-semibold mb-2">
                    What would you like to focus on?
                </label>
                <input
                id="activity"
                type="text"
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
                placeholder="Ex: Learn maths lesson"
                className="w-full max-w-md mx-auto border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-400"
                />
            </div>

            <div className="flex flex-wrap gap-4 mb-6">
                <button onClick={() => handlePresetClick(0.5 * 60)} className="h-30 w-30 bg-gray-100 text-black font-bold rounded-lg hover:cursor-pointer">
                30s
                </button>
                <button onClick={() => handlePresetClick(1 * 60)} className="h-30 w-30 bg-gray-100 text-black font-bold rounded-lg hover:cursor-pointer">
                1m
                </button>
                <button onClick={() => handlePresetClick(60 * 60)} className="h-30 w-30 bg-gray-100 text-black font-bold rounded-lg hover:cursor-pointer">
                1h
                </button>
                <button onClick={handleFreeClick} className="h-30 w-30 bg-indigo-400 text-white font-bold rounded-lg hover:cursor-pointer">
                Free mode
                </button>
            </div>

            {mode === 'countdown' && duration !== null && (
                <Countdown key={duration} duration={duration} activity={activity} onStop={handleSessionStop} />
            )}
            {mode === 'countup' && (
                <Countup activity={activity} onStop={handleSessionStop} />
            )}

            {activity && (
                <p className="mt-4 text-gray-500 italic">Current activity: {activity}</p>
            )}

            {sessionEnded && (
                <div className="mt-6">
                <button
                    onClick={handleSaveSession}
                    className="bg-indigo-500 text-white font-bold px-4 py-2 rounded hover:bg-green-600"
                >
                    Save session
                </button>
                </div>
            )}
      </div>
    </div>
  );
}