const ProgressCircle = ({ progress, color, children }) => {
  return (
    <div className="relative h-[149px] w-[149px]">
      <svg width="149" height="149" viewBox="0 0 149 149">
        <circle
          cx="74.5"
          cy="74.5"
          r="72"
          fill="none"
          strokeWidth="5"
          transform="rotate(-90 74.5 74.5)"
          stroke={color}
          strokeDasharray={`${(progress / 100) * 452} 452`}
        />
      </svg>
      {children}
    </div>
  );
};

export default ProgressCircle;
