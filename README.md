## Description

The basic website for managing tasks with an authorization system. It uses React as a frontend and Django as a backend

## Necessary components

Before you start, make sure that you have installed:

- [Node.js ](https://nodejs.org/) (version 16.x or newer)
- [Git](https://git-scm.com/)
- [Python](https://www.python.org/)

## Set up the backend

### 1. Clone the Repository

```bash
git clone https://github.com/Yerassylzh/ReactDo
cd ReactDo
cd backend
```

### 2. Create and Activate a Virtual Environment

#### On macOS/Linux

```bash
python3 -m venv venv
source venv/bin/activate
```

#### On Windows

```bash
python -m venv venv
venv\Scripts\activate
```

### 3. Environment Variables

#### Create .env file in the current directory

```bash
DJANGO_SECRET_KEY=django-insecure-c3wi1%l-tnbrvgi=5=5k5x)s-2a0s7bg4vg@!+d!2t%)5pnx2r
```

### 4. Install Dependencies

```bash
pip install -r requirements.txt
```

### 5. Set Up the Database

```bash
cd react_do
python manage.py migrate
```

### 6. Run the Development Server

```bash
python manage.py runserver
```

## Set up the frontend

### 1. Open up a brand new terminal. Then navigate to the frontend folder

```bash
cd ReactDo
cd frontend
```

### 2. Install dependencies

```bash
npm install

```

### 3. Set up environment variables

#### Create a file .env in the frontend/ folder. Provide the following data:

```bash
VITE_BACKEND_BASE_URL=http://localhost:8000
```

### 4. Start the server

```bash
npm run dev
```
