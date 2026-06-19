type ScrollProgressBarProps = {
  progress: number
}

export default function ScrollProgressBar({ progress }: ScrollProgressBarProps) {
  return (
    <div className="mt-8 mx-auto max-w-[280px]">
      <div className="h-[2px] bg-[#E8DDD0] rounded-full relative overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full w-[30%] bg-[#3B1F0E] rounded-full transition-transform duration-150 ease-out"
          style={{
            transform: `translateX(${progress * (100 / 0.3)}%)`,
          }}
        />
      </div>
    </div>
  )
}
