export default function UserForm({ form, onChange, onSubmit, onCancel, editingId }) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur">
      <h2 className="mb-4 text-xl font-semibold">{editingId ? 'Edit user' : 'Add user'}</h2>

      <form className="space-y-4" onSubmit={onSubmit}>
        <div>
          <label className="mb-2 block text-sm text-slate-300" htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={onChange}
            className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 outline-none transition focus:border-cyan-400"
            placeholder="Jane Doe"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-300" htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 outline-none transition focus:border-cyan-400"
            placeholder="jane@example.com"
            required
          />
        </div>

        <div className="flex gap-3">
          <button className="rounded-xl bg-cyan-400 px-4 py-3 font-medium text-slate-950 transition hover:bg-cyan-300" type="submit">
            {editingId ? 'Update user' : 'Add user'}
          </button>
          {editingId ? (
            <button className="rounded-xl border border-white/10 px-4 py-3 font-medium text-slate-200 transition hover:bg-white/5" type="button" onClick={onCancel}>
              Cancel
            </button>
          ) : null}
        </div>
      </form>
    </section>
  )
}
