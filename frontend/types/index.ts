// User & Auth
export interface User {
  id: string
  email: string
  name: string
  role: 'admin' | 'manager' | 'technician' | 'calling_staff'
  phone?: string
  avatar?: string
  createdAt: string
}

export interface AuthToken {
  accessToken: string
  refreshToken: string
  expiresIn: number
}

// Customer
export interface Customer {
  id: string
  name: string
  mobileNumber: string
  whatsappNumber?: string
  alternateNumber?: string
  email?: string
  address?: string
  city?: string
  state?: string
  pincode?: string
  source: 'walk-in' | 'instagram' | 'facebook' | 'google' | 'referral' | 'website' | 'calling' | 'other'
  createdAt: string
  updatedAt: string
}

// Device
export interface Device {
  id: string
  customerId: string
  jobId: string
  model: string
  colour: string
  storage: string
  imei: string
  serialNumber?: string
  warrantyStatus: boolean
  entryDate: string
  photos?: string[]
}

// Repair
export interface Repair {
  id: string
  deviceId: string
  jobId: string
  customerId: string
  status: RepairStatus
  problemCategory: string
  detailedIssue: string
  estimatedCost: number
  advancePayment: number
  remainingAmount: number
  estimatedDeliveryDate: string
  technicianId?: string
  createdAt: string
  updatedAt: string
}

export type RepairStatus = 'received' | 'diagnosis' | 'waiting_approval' | 'repairing' | 'qc' | 'ready_delivery' | 'delivered'

// Repair History
export interface RepairHistory {
  id: string
  repairId: string
  status: RepairStatus
  date: string
  time: string
  staffName: string
  notes?: string
}

// Technician
export interface Technician {
  id: string
  name: string
  mobileNumber: string
  specialization: string[]
  activeJobs: number
  completedRepairs: number
  pendingRepairs: number
  averageRepairTime: number
  createdAt: string
}

// Inventory
export interface InventoryItem {
  id: string
  partName: string
  category: string
  compatibleModels: string[]
  supplier: string
  purchasePrice: number
  sellingPrice: number
  availableQuantity: number
  minimumStockLevel: number
  warehouseLocation: string
  createdAt: string
}

// Payment
export interface Payment {
  id: string
  repairId: string
  customerId: string
  amount: number
  method: 'cash' | 'upi' | 'card' | 'bank_transfer'
  date: string
  notes?: string
  invoiceNumber: string
  createdAt: string
}

// Lead
export interface Lead {
  id: string
  leadId: string
  customerName: string
  mobileNumber: string
  source: string
  interestedService: string
  iphoneModel?: string
  problem?: string
  assignedStaff?: string
  status: LeadStatus
  createdAt: string
  updatedAt: string
}

export type LeadStatus = 'new' | 'contacted' | 'follow-up' | 'interested' | 'not_interested' | 'service_booked' | 'converted' | 'lost'

// Follow-up
export interface FollowUp {
  id: string
  customerId?: string
  leadId?: string
  date: string
  time: string
  notes: string
  assignedStaff: string
  status: 'pending' | 'completed' | 'overdue'
  nextFollowUpDate?: string
  createdAt: string
}
