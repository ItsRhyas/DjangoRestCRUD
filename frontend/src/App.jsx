import { useEffect, useState } from 'react'
import api from './api'
import UserForm from './components/UserForm'
import UserList from './components/UserList'

const emptyForm = { name: '', email: '' }

export default function App() {
  const [users, setUsers] = useState([])
  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const loadUsers = async () => {
    try {
      setError('')
      const response = await api.get('/users/')
      setUsers(response.data)
    } catch {
      setError('Failed to load users.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadUsers()
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      if (editingId) {
        await api.put(`/users/${editingId}/`, form)
      } else {
        await api.post('/users/', form)
      }

      setForm(emptyForm)
      setEditingId(null)
      await loadUsers()
    } catch {
      setError('Failed to save user.')
    }
  }

  const handleEdit = (user) => {
    setEditingId(user.id)
    setForm({ name: user.name, email: user.email })
  }

  const handleDelete = async (id) => {
    try {
      await api.delete(`/users/${id}/`)
      await loadUsers()
    } catch {
      setError('Failed to delete user.')
    }
  }

  const handleCancel = () => {
    setEditingId(null)
    setForm(emptyForm)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-4 py-10 text-slate-100">
      <div className="mx-auto max-w-5xl space-y-8">
        <section className="space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">User CRUD</p>
          <h1 className="text-4xl font-bold">Dashboard</h1>
          <p className="max-w-2xl text-slate-300">Create, update, and remove users from a simple React and Django boilerplate.</p>
        </section>

        {error ? <div className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-red-200">{error}</div> : null}

        <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
          <UserForm
            form={form}
            onChange={handleChange}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
            editingId={editingId}
          />

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Users</h2>
              <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">{users.length} total</span>
            </div>

            <UserList
              users={users}
              loading={loading}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </section>
        </div>
      </div>
    </main>
  )
}
