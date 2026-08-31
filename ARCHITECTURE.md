# StockTrack Architecture

## Overview

StockTrack is built as a monorepo with three main workspaces:

1. **Frontend**: Next.js web application
2. **Backend**: Express.js REST API
3. **Database**: PostgreSQL schema and migrations

## Frontend Architecture

### Structure

```
frontend/
├── app/                   # Next.js App Router
│   ├── dashboard/         # Dashboard pages
│   ├── customers/         # Customer management
│   ├── repairs/           # Repair tracking
│   ├── technicians/       # Technician management
│   ├── inventory/         # Inventory management
│   ├── payments/          # Payment tracking
│   └── auth/              # Authentication pages
├── components/            # Reusable React components
│   ├── ui/                # Basic UI components
│   ├── dashboard/         # Dashboard specific components
│   ├── forms/             # Form components
│   ├── tables/            # Table components
│   └── navigation/        # Navigation components
├── lib/                   # Utilities and helpers
│   ├── api.ts             # API client
│   ├── auth.ts            # Authentication utilities
│   └── utils.ts           # General utilities
├── styles/                # Global styles
└── types/                 # TypeScript type definitions
```

### Key Features

- **Server Components**: Leverages Next.js 14 Server Components for performance
- **Type Safety**: Full TypeScript support
- **Responsive Design**: Tailwind CSS for mobile-first responsive design
- **State Management**: React Context API for global state
- **API Integration**: Custom API client for backend communication

## Backend Architecture

### Structure

```
backend/
├── src/
│   ├── controllers/       # Request handlers
│   ├── services/          # Business logic
│   ├── models/            # Database models
│   ├── middleware/        # Express middleware
│   ├── routes/            # API routes
│   ├── utils/             # Utilities
│   └── types/             # TypeScript types
├── tests/                 # Test files
└── server.ts              # Entry point
```

### Key Features

- **Layered Architecture**: Controllers → Services → Models
- **Error Handling**: Centralized error handling middleware
- **Authentication**: JWT-based authentication
- **Database**: PostgreSQL with pg library
- **Validation**: Input validation middleware

## Database Architecture

### Core Tables

- **Users**: Staff and admin accounts
- **Customers**: Customer information and contact details
- **Devices**: iPhone devices submitted for repair
- **Repairs**: Repair jobs and tracking
- **RepairHistory**: Complete audit trail of repair status changes
- **Technicians**: Technician profiles and workload
- **InventoryItems**: Spare parts inventory
- **Payments**: Payment records and invoices
- **Leads**: CRM leads for calling staff
- **FollowUps**: Follow-up scheduling and tracking

### Relationships

```
Customers
  ├── Devices (1:N)
  │   └── Repairs (1:N)
  │       └── RepairHistory (1:N)
  ├── Payments (1:N)
  └── FollowUps (1:N)

Technicians
  └── Repairs (1:N)

InventoryItems
  └── RepairItems (1:N)

Leads
  └── CallHistory (1:N)
```

## Authentication & Authorization

### Roles

1. **Admin**: Full access to all features
2. **Service Manager**: Customer, service entry, repair tracking, technician, payment management
3. **Technician**: Assigned repairs, status updates, parts usage
4. **Calling Staff**: Leads, calling CRM, follow-ups, customer info

### Flow

1. User logs in with email/password
2. Backend validates credentials and generates JWT token
3. Frontend stores token in secure httpOnly cookie
4. All API requests include token in Authorization header
5. Backend middleware validates token and checks role-based permissions

## Data Flow

### Service Entry Flow

1. Staff creates new service entry via form
2. Frontend validates input and uploads photos to backend
3. Backend stores device info, generates auto-increment Job ID
4. Device entry creates initial Repair record with "Received" status
5. Technician notified of new job assignment
6. Dashboard updates in real-time with new entry

### Repair Tracking Flow

1. Technician updates repair status via dashboard
2. Backend updates Repair record and creates RepairHistory entry
3. Timestamp, staff info, and notes are recorded
4. Customer notified if status reaches "Ready for Delivery"
5. Notifications triggered for status changes

## API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

### Customers
- `GET /api/customers` - List customers
- `POST /api/customers` - Create customer
- `GET /api/customers/:id` - Get customer detail
- `PUT /api/customers/:id` - Update customer
- `GET /api/customers/search` - Search customers

### Repairs
- `GET /api/repairs` - List repairs
- `POST /api/repairs` - Create repair
- `GET /api/repairs/:id` - Get repair detail
- `PUT /api/repairs/:id/status` - Update repair status
- `GET /api/repairs/imei/:imei` - Search by IMEI

### And more...

See [API_DOCS.md](./docs/API_DOCS.md) for complete documentation.

## Security

- JWT for stateless authentication
- Password hashing with bcrypt
- Role-based access control (RBAC)
- Input validation and sanitization
- CORS protection
- Rate limiting on API endpoints
- Database connection pooling
