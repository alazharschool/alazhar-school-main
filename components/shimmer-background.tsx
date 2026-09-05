"use client"

export function ShimmerBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Islamic Geometric Patterns with Shimmer */}
      <div className="absolute top-10 left-10 w-32 h-32 border-2 border-amber-600/20 rotate-45 rounded-lg animate-pulse"></div>
      <div className="absolute top-40 right-20 w-24 h-24 border-2 border-amber-600/20 rotate-12 rounded-lg animate-pulse delay-300"></div>
      <div className="absolute bottom-20 left-1/4 w-20 h-20 border-2 border-amber-600/20 rotate-45 rounded-lg animate-pulse delay-700"></div>
      <div className="absolute bottom-40 right-1/3 w-16 h-16 border-2 border-amber-600/20 rotate-12 rounded-lg animate-pulse delay-1000"></div>

      {/* Floating Particles */}
      <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-amber-400/30 rounded-full animate-bounce delay-500"></div>
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-amber-400/30 rounded-full animate-bounce delay-1000"></div>
      <div className="absolute top-1/2 left-1/5 w-1.5 h-1.5 bg-amber-400/30 rounded-full animate-bounce delay-700"></div>

      {/* Shimmer Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent animate-pulse delay-500"></div>
    </div>
  )
}
