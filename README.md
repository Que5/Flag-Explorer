# Flag-Explorer

A full-stack web application for exploring country flags and related data. This project consists of a Python/Django backend and a React/TypeScript frontend built with Vite.

## Table of Contents

- [Flag-Explorer](#flag-explorer)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
    - [Backend](#backend)
    - [Frontend](#frontend)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
    - [1. Clone the Repository](#1-clone-the-repository)
    - [2. Backend Setup](#2-backend-setup)
    - [3. Frontend Setup](#3-frontend-setup)
  - [Running the Application](#running-the-application)
  - [Running Tests](#running-tests)
    - [Backend Tests](#backend-tests)
    - [Frontend Tests](#frontend-tests)
  - [Project Structure](#project-structure)
  - [CI/CD Pipeline](#cicd-pipeline)
  - [License](#license)

## Features

* **Flag Display:** Browse and view flags of different countries.
* **Country Data:** Access additional information related to each country.
* *(Add more specific features here if applicable, e.g., Search, Filtering, User Authentication)*

## Technologies Used

### Backend

* **Python 3.10**
* **Django**: Web framework
* **Django REST Framework**: For API creation
* **pytest**: For testing
* **PostgreSQL** (or SQLite for development)

### Frontend

* **Node.js (LTS recommended, v18+)**
* **Vite**: Next-generation frontend tooling
* **React**: JavaScript library for building user interfaces
* **TypeScript**: Typed superset of JavaScript
* **Redux Toolkit**: For state management
* **Axios**: For API requests
* **React Router DOM**: For client-side routing
* **Vitest**: Fast unit test framework
* **ESLint**: For code linting

## Prerequisites

Before you begin, ensure you have the following installed on your system:

* **Git**: For cloning the repository.
    * [Download Git](https://git-scm.com/downloads)
* **Python 3.10**: For the backend.
    * [Download Python](https://www.python.org/downloads/)
* **pip**: Python package installer (usually comes with Python).
* **Node.js v18.x or later**: For the frontend.
    * [Download Node.js](https://nodejs.org/en/download/) (LTS version is recommended)
* **npm** (Node Package Manager): Comes with Node.js.

## Getting Started

Follow these steps to get your development environment set up.

### 1. Clone the Repository

```bash
git clone [https://github.com/Que5/Flag-Explorer.git](https://github.com/Que5/Flag-Explorer.git)
cd Flag-Explorer



Yes, absolutely! A README.md file is essential for any project, especially one with a frontend and backend. It's the first thing new contributors or users will look at to understand your project and how to get it running.

Here's a comprehensive README.md file for your "Flag-Explorer" project, incorporating all the information we've discussed about your backend (Django/Python) and frontend (Vite/React/TypeScript/Vitest).

File Name: README.md

Markdown

# Flag-Explorer

A full-stack web application for exploring country flags and related data. This project consists of a Python/Django backend and a React/TypeScript frontend built with Vite.

## Table of Contents

- [Flag-Explorer](#flag-explorer)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
    - [Backend](#backend)
    - [Frontend](#frontend)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
    - [1. Clone the Repository](#1-clone-the-repository)
    - [2. Backend Setup](#2-backend-setup)
    - [3. Frontend Setup](#3-frontend-setup)
  - [Running the Application](#running-the-application)
  - [Running Tests](#running-tests)
    - [Backend Tests](#backend-tests)
    - [Frontend Tests](#frontend-tests)
  - [Project Structure](#project-structure)
  - [CI/CD Pipeline](#cicd-pipeline)
  - [License](#license)

## Features

* **Flag Display:** Browse and view flags of different countries.
* **Country Data:** Access additional information related to each country.
* *(Add more specific features here if applicable, e.g., Search, Filtering, User Authentication)*

## Technologies Used

### Backend

* **Python 3.10**
* **Django**: Web framework
* **Django REST Framework**: For API creation
* **pytest**: For testing
* **PostgreSQL** (or SQLite for development)

### Frontend

* **Node.js (LTS recommended, v18+)**
* **Vite**: Next-generation frontend tooling
* **React**: JavaScript library for building user interfaces
* **TypeScript**: Typed superset of JavaScript
* **Redux Toolkit**: For state management
* **Axios**: For API requests
* **React Router DOM**: For client-side routing
* **Vitest**: Fast unit test framework
* **ESLint**: For code linting

## Prerequisites

Before you begin, ensure you have the following installed on your system:

* **Git**: For cloning the repository.
    * [Download Git](https://git-scm.com/downloads)
* **Python 3.10**: For the backend.
    * [Download Python](https://www.python.org/downloads/)
* **pip**: Python package installer (usually comes with Python).
* **Node.js v18.x or later**: For the frontend.
    * [Download Node.js](https://nodejs.org/en/download/) (LTS version is recommended)
* **npm** (Node Package Manager): Comes with Node.js.

## Getting Started

Follow these steps to get your development environment set up.

### 1. Clone the Repository

```bash
git clone [https://github.com/Que5/Flag-Explorer.git](https://github.com/Que5/Flag-Explorer.git)
cd Flag-Explorer
2. Backend Setup
Navigate into the backend directory, set up a virtual environment, install dependencies, and prepare the database.

Bash

cd backend

# Create a Python virtual environment
python -m venv venv

# Activate the virtual environment
# On macOS/Linux:
source venv/bin/activate
# On Windows:
# .\venv\Scripts\activate

# Install backend dependencies
pip install -r requirements.txt

# Create a .env file for environment variables (IMPORTANT!)
# In the backend directory, create a file named `.env`
# and add the following line. Replace <YOUR_SECRET_KEY> with a long, random string.
# You can generate one using Python:
# python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
touch .env
echo "SECRET_KEY='<YOUR_SECRET_KEY>'" >> .env
# Add other environment variables here if your Django app uses them, e.g., DATABASE_URL, etc.

# Apply database migrations
python manage.py migrate

# (Optional) Create a superuser for Django admin
python manage.py createsuperuser

# Deactivate the virtual environment when you're done with backend tasks
# deactivate
3. Frontend Setup
Navigate into the frontend directory and install Node.js dependencies.

Bash

cd ../frontend # Go back to root, then into frontend
# Or if you're already in 'Flag-Explorer' root:
# cd frontend

# Install frontend dependencies
npm install

# (Optional) If your frontend needs environment variables (e.g., API base URL),
# create a .env.local file in the frontend directory.
# Example:
# touch .env.local
# echo "VITE_API_BASE_URL=http://localhost:8000/api" >> .env.local
Running the Application
To run the full application, you need to start both the backend and frontend servers simultaneously.

Start the Backend Server:
Open a new terminal tab/window, navigate to the backend directory, activate the virtual environment, and run the Django development server:

Bash

cd backend
source venv/bin/activate # macOS/Linux
# .\venv\Scripts\activate # Windows
python manage.py runserver
The backend will typically run on http://localhost:8000/.

Start the Frontend Development Server:
Open another new terminal tab/window, navigate to the frontend directory, and start the Vite development server:

Bash

cd frontend
npm run dev
The frontend will typically run on http://localhost:5173/ (or another port if 5173 is busy).

You can now access the application in your web browser at the frontend's address (e.g., http://localhost:5173/).

Running Tests
Backend Tests
Run backend tests using pytest within your activated virtual environment.

Bash

cd backend
source venv/bin/activate # Activate your virtual environment
python -m pytest
# or to run tests within the flag_explorer app:
# python -m pytest flag_explorer/
# deactivate # Deactivate when done
Frontend Tests
Run frontend tests using vitest via npm scripts.

Bash

cd frontend
npm test
# Or to run coverage report:
# npm run coverage
Project Structure
Flag-Explorer/
├── .github/                  # GitHub Actions CI/CD workflows
│   └── workflows/
│       └── ci_pipeline.yml   # Your CI/CD pipeline definition
├── backend/                  # Django Backend project
│   ├── flag_explorer/        # Main Django project settings
│   │   ├── api/              # Django REST Framework API apps
│   │   └── ...               # Other Django apps/files
│   ├── requirements.txt      # Python dependencies
│   ├── manage.py             # Django management script
│   └── venv/                 # Python virtual environment (ignored by Git)
├── frontend/                 # Vite/React/TypeScript Frontend project
│   ├── public/               # Static assets
│   ├── src/                  # Source code for React app
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   └── ...
│   ├── index.html            # Main HTML file
│   ├── package.json          # Node.js dependencies and scripts
│   ├── tsconfig.json         # TypeScript configuration
│   ├── vite.config.ts        # Vite configuration
│   └── node_modules/         # Node.js modules (ignored by Git)
├── .gitignore                # Specifies intentionally untracked files to ignore
├── README.md                 # This file
└── ...                       # Other project-level files
CI/CD Pipeline
This project uses GitHub Actions for continuous integration and continuous deployment. The pipeline is defined in .github/workflows/ci.yml. It automatically runs tests and builds both the backend and frontend on pushes and pull requests to the main branch.

