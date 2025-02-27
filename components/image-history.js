const ImageHistory = ({ history }) => {
  return (
    <div className="glass-panel p-6 my-8">
      <h2 className="text-2xl font-semibold mb-6">Recent Generations</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {history.slice(1).map((image) => (
          <div key={image.id} className="bg-gray-800/50 rounded-lg overflow-hidden">
            <div className="aspect-square">
              <img src={image.url || "/placeholder.svg"} alt={image.prompt} className="w-full h-full object-cover" />
            </div>
            <div className="p-3">
              <p className="text-sm text-gray-300 line-clamp-2">{image.prompt}</p>
              <p className="text-xs text-gray-500 mt-1">{new Date(image.timestamp).toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageHistory

