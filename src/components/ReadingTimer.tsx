interface ReadingTimerProps {
  secondsRemaining: number;
}

/**
 * ReadingTimer - Displays a calm countdown before answers are revealed
 * Shows a circular progress indicator with wolf paw prints filling in
 */
export function ReadingTimer({ secondsRemaining }: ReadingTimerProps) {
  // Calculate progress percentage (5 seconds total, counting down)
  const totalSeconds = 5;
  const progress = ((totalSeconds - secondsRemaining) / totalSeconds) * 100;

  return (
    <div className="flex flex-col items-center justify-center py-8 space-y-6">
      {/* Circular progress indicator */}
      <div className="relative w-24 h-24">
        {/* Background circle */}
        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#e2e8f0" strokeWidth="8" />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 45}`}
            strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
            className="transition-all duration-1000 ease-linear"
          />
        </svg>
        {/* Wolf paw icon in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl" role="img" aria-label="wolf paw">
            🐾
          </span>
        </div>
      </div>

      {/* Countdown number */}
      <div className="text-4xl font-bold text-slate-700">{secondsRemaining}</div>

      {/* Encouraging text */}
      <div className="text-center text-slate-600">
        <p className="font-medium">Read the question carefully...</p>
        <p className="text-sm text-slate-500 mt-1">Answers will appear soon</p>
      </div>
    </div>
  );
}
