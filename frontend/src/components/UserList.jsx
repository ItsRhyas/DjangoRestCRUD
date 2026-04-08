export default function UserList({ users, loading, onEdit, onDelete }) {
  if (loading) {
    return <p className="text-slate-300">Loading users...</p>
  }

  if (!users.length) {
    return <p className="text-slate-300">No users yet. Add one using the form.</p>
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10">
      <table className="min-w-full divide-y divide-white/10 text-left">
        <thead className="bg-slate-950/50 text-sm text-slate-300">
          <tr>
            <th className="px-4 py-3 font-medium">ID</th>
            <th className="px-4 py-3 font-medium">Name</th>
            <th className="px-4 py-3 font-medium">Email</th>
            <th className="px-4 py-3 font-medium">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10 bg-white/5">
          {users.map((user) => (
            <tr key={user.id}>
              <td className="px-4 py-3 text-slate-300">{user.id}</td>
              <td className="px-4 py-3 font-medium">{user.name}</td>
              <td className="px-4 py-3 text-slate-300">{user.email}</td>
              <td className="px-4 py-3">
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="rounded-lg border border-cyan-400/30 px-3 py-2 text-sm text-cyan-200 transition hover:bg-cyan-400/10"
                    onClick={() => onEdit(user)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="rounded-lg border border-red-400/30 px-3 py-2 text-sm text-red-200 transition hover:bg-red-400/10"
                    onClick={() => onDelete(user.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
