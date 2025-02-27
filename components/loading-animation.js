const LoadingAnimation = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-20 h-20">
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-t-purple-500 border-r-blue-500 border-b-pink-500 border-l-indigo-500 rounded-full animate-spin"></div>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-t-blue-500 border-r-pink-500 border-b-indigo-500 border-l-purple-500 rounded-full animate-spin-slow"></div>
        </div>
      </div>
      <p className="mt-4 text-gray-300">Generating your image...</p>
    </div>
  )
}

export default LoadingAnimation

