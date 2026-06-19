type ProcessStepProps = {
  number: number
  icon: string
  title: string
  description: string
  isLast?: boolean
}

export default function ProcessStep({ number, icon, title, description, isLast = false }: ProcessStepProps) {
  return (
    <div className="flex flex-col items-center text-center relative">
      {/* Number circle */}
      <div className="w-16 h-16 rounded-full bg-[#3B1F0E] text-[#F5ECD7] flex items-center justify-center text-2xl mb-4 relative z-10">
        {icon}
      </div>

      {/* Connector line (horizontal for desktop) */}
      {!isLast && (
        <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-[2px] bg-[#E8DDD0]" />
      )}

      {/* Step number */}
      <span className="text-xs font-medium tracking-wider uppercase text-[#C17A3B] mb-1">
        Langkah {number}
      </span>

      <h3 className="font-serif text-lg text-[#1A1A1A] mb-2">{title}</h3>
      <p className="text-sm text-gray-600 max-w-[200px] leading-relaxed">{description}</p>

      {/* Vertical connector for mobile */}
      {!isLast && (
        <div className="md:hidden w-[2px] h-8 bg-[#E8DDD0] mt-4" />
      )}
    </div>
  )
}
