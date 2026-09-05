// Error handling utilities
export interface AppError {
  code: string;
  message: string;
  details?: any;
  timestamp: Date;
}

export class AppError extends Error {
  public code: string;
  public details?: any;
  public timestamp: Date;

  constructor(code: string, message: string, details?: any) {
    super(message);
    this.name = 'AppError';
    this.code = code;
    this.details = details;
    this.timestamp = new Date();
  }
}

// Error codes
export const ERROR_CODES = {
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  AUTHENTICATION_ERROR: 'AUTHENTICATION_ERROR',
  AUTHORIZATION_ERROR: 'AUTHORIZATION_ERROR',
  NOT_FOUND_ERROR: 'NOT_FOUND_ERROR',
  RATE_LIMIT_ERROR: 'RATE_LIMIT_ERROR',
  DATABASE_ERROR: 'DATABASE_ERROR',
  NETWORK_ERROR: 'NETWORK_ERROR',
  UNKNOWN_ERROR: 'UNKNOWN_ERROR'
} as const;

// Error messages
export const ERROR_MESSAGES = {
  [ERROR_CODES.VALIDATION_ERROR]: 'Invalid input data provided',
  [ERROR_CODES.AUTHENTICATION_ERROR]: 'Authentication required',
  [ERROR_CODES.AUTHORIZATION_ERROR]: 'Access denied',
  [ERROR_CODES.NOT_FOUND_ERROR]: 'Resource not found',
  [ERROR_CODES.RATE_LIMIT_ERROR]: 'Too many requests',
  [ERROR_CODES.DATABASE_ERROR]: 'Database operation failed',
  [ERROR_CODES.NETWORK_ERROR]: 'Network connection failed',
  [ERROR_CODES.UNKNOWN_ERROR]: 'An unexpected error occurred'
} as const;

// Error handler function
export function handleError(error: unknown): AppError {
  if (error instanceof AppError) {
    return error;
  }

  if (error instanceof Error) {
    return new AppError(
      ERROR_CODES.UNKNOWN_ERROR,
      error.message,
      { originalError: error }
    );
  }

  return new AppError(
    ERROR_CODES.UNKNOWN_ERROR,
    'An unexpected error occurred',
    { originalError: error }
  );
}

// Validation error handler
export function createValidationError(field: string, message: string): AppError {
  return new AppError(
    ERROR_CODES.VALIDATION_ERROR,
    `Validation error for field '${field}': ${message}`,
    { field, message }
  );
}

// Authentication error handler
export function createAuthError(message?: string): AppError {
  return new AppError(
    ERROR_CODES.AUTHENTICATION_ERROR,
    message || ERROR_MESSAGES[ERROR_CODES.AUTHENTICATION_ERROR]
  );
}

// Rate limit error handler
export function createRateLimitError(retryAfter?: number): AppError {
  return new AppError(
    ERROR_CODES.RATE_LIMIT_ERROR,
    ERROR_MESSAGES[ERROR_CODES.RATE_LIMIT_ERROR],
    { retryAfter }
  );
}

// Error logger (in production, this would send to a logging service)
export function logError(error: AppError, context?: string) {
  if (process.env.NODE_ENV === 'development') {
    console.error(`[${context || 'App'}] Error:`, {
      code: error.code,
      message: error.message,
      details: error.details,
      timestamp: error.timestamp,
      stack: error.stack
    });
  } else {
    // In production, send to logging service
    // logToService(error, context);
  }
}

// Error response formatter
export function formatErrorResponse(error: AppError) {
  return {
    error: {
      code: error.code,
      message: error.message,
      timestamp: error.timestamp.toISOString()
    }
  };
} 