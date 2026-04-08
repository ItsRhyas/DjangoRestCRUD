# CRUD hecho por OpenCode

Minimal full-stack CRUD app for users with `name` and `email`.

## Stack

- Backend: Django 5.x, Django REST Framework, drf-spectacular
- Frontend: React + Vite + Tailwind CSS + Axios
- Database: SQLite
- Containerization: Docker Compose

## Structure

```text
backend/
frontend/
docker-compose.yml
README.md
```

## Run with Docker

```bash
docker compose up --build
```

- Frontend: http://localhost:5173
- Backend API: http://localhost:8000/api/users/
- Swagger UI: http://localhost:8000/api/docs/
- OpenAPI schema: http://localhost:8000/api/schema/

## Backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

## Frontend

```bash
cd frontend
npm install
npm run dev
```

Set `VITE_API_URL` if your API is not available at `http://localhost:8000/api`.
