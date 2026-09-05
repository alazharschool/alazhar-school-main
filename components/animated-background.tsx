"use client"

interface AnimatedBackgroundProps {
  variant?: 'geometric' | 'particles' | 'shimmer' | 'all'
  intensity?: 'subtle' | 'medium' | 'strong'
  color?: 'amber' | 'gold' | 'orange' | 'custom'
  customColor?: string
  className?: string
  children?: React.ReactNode
}

export function AnimatedBackground({
  variant = 'all',
  intensity = 'medium',
  color = 'amber',
  customColor,
  className = '',
  children
}: AnimatedBackgroundProps) {
  
  // تحديد الألوان بناءً على الخيار
  const getColorClasses = () => {
    if (customColor) return customColor
    
    switch (color) {
      case 'gold':
        return 'border-yellow-600/20 bg-yellow-400/30 via-yellow-400/20'
      case 'orange':
        return 'border-orange-600/20 bg-orange-400/30 via-orange-400/20'
      case 'amber':
      default:
        return 'border-amber-600/20 bg-amber-400/30 via-amber-400/20'
    }
  }

  // تحديد الشفافية بناءً على الكثافة
  const getOpacity = () => {
    switch (intensity) {
      case 'subtle':
        return '/10'
      case 'strong':
        return '/40'
      case 'medium':
      default:
        return '/20'
    }
  }

  const colorClasses = getColorClasses()
  const opacity = getOpacity()

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Geometric Patterns */}
      {(variant === 'geometric' || variant === 'all') && (
        <>
          <div className={`absolute top-10 left-10 w-32 h-32 border-2 ${colorClasses} rotate-45 rounded-lg animate-pulse`}></div>
          <div className={`absolute top-40 right-20 w-24 h-24 border-2 ${colorClasses} rotate-12 rounded-lg animate-pulse delay-300`}></div>
          <div className={`absolute bottom-20 left-1/4 w-20 h-20 border-2 ${colorClasses} rotate-45 rounded-lg animate-pulse delay-700`}></div>
          <div className={`absolute bottom-40 right-1/3 w-16 h-16 border-2 ${colorClasses} rotate-12 rounded-lg animate-pulse delay-1000`}></div>
        </>
      )}

      {/* Floating Particles */}
      {(variant === 'particles' || variant === 'all') && (
        <>
          <div className={`absolute top-1/4 left-1/3 w-2 h-2 ${colorClasses.replace('/20', opacity)} rounded-full animate-bounce delay-500`}></div>
          <div className={`absolute top-3/4 right-1/4 w-1 h-1 ${colorClasses.replace('/20', opacity)} rounded-full animate-bounce delay-1000`}></div>
          <div className={`absolute top-1/2 left-1/5 w-1.5 h-1.5 ${colorClasses.replace('/20', opacity)} rounded-full animate-bounce delay-700`}></div>
          <div className={`absolute top-1/3 right-1/3 w-1 h-1 ${colorClasses.replace('/20', opacity)} rounded-full animate-bounce delay-300`}></div>
        </>
      )}

      {/* Shimmer Lines */}
      {(variant === 'shimmer' || variant === 'all') && (
        <>
          <div className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent ${colorClasses.replace('/20', '/20')} to-transparent animate-pulse`}></div>
          <div className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent ${colorClasses.replace('/20', '/20')} to-transparent animate-pulse delay-500`}></div>
          <div className={`absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent ${colorClasses.replace('/20', '/10')} to-transparent animate-pulse delay-1000`}></div>
        </>
      )}

      {/* المحتوى */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

// مكون سريع للاستخدام المباشر
export function QuickAnimatedBackground({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <AnimatedBackground 
      variant="all" 
      intensity="medium" 
      color="amber" 
      className={className}
    >
      {children}
    </AnimatedBackground>
  )
}

// مكون للعناوين الرئيسية
export function HeroAnimatedBackground({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <AnimatedBackground 
      variant="all" 
      intensity="strong" 
      color="gold" 
      className={className}
    >
      {children}
    </AnimatedBackground>
  )
}

// مكون للبطاقات
export function CardAnimatedBackground({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <AnimatedBackground 
      variant="geometric" 
      intensity="subtle" 
      color="amber" 
      className={className}
    >
      {children}
    </AnimatedBackground>
  )
}
