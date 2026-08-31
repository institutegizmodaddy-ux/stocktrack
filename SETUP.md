# Setup Guide

## Prerequisites

- Node.js 18+
- PostgreSQL 14+
- npm or yarn

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/institutegizmodaddy-ux/stocktrack.git
cd stocktrack
```

### 2. Setup Frontend

```bash
cd frontend
npm install
cp .env.example .env.local
```

### 3. Setup Backend

```bash
cd ../backend
npm install
cp .env.example .env
```

### 4. Setup Database

```bash
cd ../database
npm install
npm run migrate
npm run seed
```

### 5. Start Development Servers

**Terminal 1 - Frontend**
```bash
cd frontend
npm run dev
```

**Terminal 2 - Backend**
```bash
cd backend
npm run dev
```

**Terminal 3 - Database** (if using local PostgreSQL)
```bash
psql -U postgres -d stocktrack
```

Frontend will be available at `http://localhost:3000`
Backend API will be available at `http://localhost:5000`

## Environment Variables

See `.env.example` files in frontend and backend directories.

## Database

Database schema is defined in `database/schema.sql`
Sample data is seeded via `database/seeds/`
