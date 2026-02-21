import { useEffect, useState } from "react"

function App() {
  const [tools, setTools] = useState([])
  const [category, setCategory] = useState("Todos")

  useEffect(() => {
    fetch("http://127.0.0.1:8000/tools")
      .then(res => res.json())
      .then(data => setTools(data))
  }, [])

  const filtered = category === "Todos"
    ? tools
    : tools.filter(tool => tool.category === category)

  const categories = ["Todos", "Texto", "Programação", "Áudio", "Vídeo", "Pesquisa"]

  return (
    <div className="min-h-screen bg-gray-900 p-10 text-white">
      <h1 className="text-3xl font-bold text-center mb-6">
        Catálogo de Ferramentas de IA
      </h1>

      {/* BOTÕES DE FILTRO */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded 
              ${category === cat ? "bg-cyan-600" : "bg-gray-700 hover:bg-gray-600"}`}>
            {cat}
          </button>
        ))}
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map(tool => (
          <div key={tool.id} className="bg-black/60 p-5 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold">{tool.name}</h2>
            <p className="text-sm text-gray-300 mt-2">{tool.description}</p>
            <p className="text-xs mt-2 text-cyan-400">{tool.category}</p>

            <a href={tool.url_link} target="_blank"
              className="inline-block mt-3 bg-cyan-600 px-3 py-1 rounded text-sm">
              Acessar
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App