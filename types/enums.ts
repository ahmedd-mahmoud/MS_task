export enum DeviceAvailabilityOptions {
  ONLINE = "online",
  OFFLINE = "offline",
  UNDER_MAINTENANCE = "under_maintenance",
}

export enum DeviceTypeOptions {
  PC = "pc",
  SERVER = "server",
  MAC = "mac",
  LINUX = "linux",
}

export enum AlertSeverityOptions {
  INFO = "info",
  WARNING = "warning",
  CRITICAL = "critical",
}

export enum AlertStatusOptions {
  PENDING = "pending",
  RESOLVED = "resolved",
  IN_PROCESS = "in_process",
}

export enum TicketPriorityOptions {
  LOW = "low",
  HIGH = "high",
  CRITICAL = "critical",
}

export enum TicketActivityStatusOptions {
  READ = "read",
  UNREAD = "unread",
  AWAITING = "awaiting",
}

export enum TicketStatusOptions {
  OPEN = "open",
  PENDING = "pending",
  OVERDUE = "overdue",
}

export enum AnalyticsType {
  BarChart = "bar",
  LineChart = "line",
  PieChart = "pie",
  Card = "card",
}
