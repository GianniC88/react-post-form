import { useState } from 'react'
const url = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";
function App() {
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: true,

  })

  function handleFormData(e) {
    const { name, value, type, checked } = e.target

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }


  return (
    <>
      <div className="container">
        <div className="row p-5">
          <div className="col">
            <div className="card">
              <div className="card-header">
                <h3>Crea un nuovo post</h3>
              </div>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="author" className="form-label text-uppercase">Autore</label>
                    <input
                      type="text"
                      className="form-control"
                      name="author"
                      id="author"
                      placeholder="Inserisci il nome dell'autore"
                      value={formData.author}
                      onChange={handleFormData}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="title" className="form-label text-uppercase">Titolo</label>
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      id="title"
                      placeholder="Inserisci il titolo del post"
                      value={formData.title}
                      onChange={handleFormData}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="body" className="form-label text-uppercase">Contenuto</label>
                    <textarea
                      className="form-control"
                      name="body"
                      id="body"
                      rows="5"
                      placeholder="Scrivi il contenuto del post..."
                      value={formData.body}

                      onChange={handleFormData}
                    ></textarea>
                  </div>

                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="public"
                      id="public"
                      checked={formData.public}
                      onChange={handleFormData}
                    />
                    <label className="form-check-label" htmlFor="public">
                      Rendi il post pubblico
                    </label>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Crea Post
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
