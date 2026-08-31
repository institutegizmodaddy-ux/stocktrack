export const formatDate = (date: string | Date) => {
  return new Date(date).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export const formatTime = (date: string | Date) => {
  return new Date(date).toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
  })
}

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(amount)
}

export const statusColors: Record<string, string> = {
  received: 'badge-info',
  diagnosis: 'badge-warning',
  waiting_approval: 'badge-warning',
  repairing: 'badge-info',
  qc: 'badge-warning',
  ready_delivery: 'badge-success',
  delivered: 'badge-success',
  new: 'badge-info',
  contacted: 'badge-warning',
  'follow-up': 'badge-info',
  interested: 'badge-success',
  not_interested: 'badge-danger',
  service_booked: 'badge-success',
  converted: 'badge-success',
  lost: 'badge-danger',
}

export const statusLabels: Record<string, string> = {
  received: 'Received',
  diagnosis: 'Diagnosis',
  waiting_approval: 'Waiting Approval',
  repairing: 'Repairing',
  qc: 'QC Testing',
  ready_delivery: 'Ready for Delivery',
  delivered: 'Delivered',
  new: 'New Lead',
  contacted: 'Contacted',
  'follow-up': 'Follow-up',
  interested: 'Interested',
  not_interested: 'Not Interested',
  service_booked: 'Service Booked',
  converted: 'Converted',
  lost: 'Lost',
}
