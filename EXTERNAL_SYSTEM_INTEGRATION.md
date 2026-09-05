# External System Integration Guide

## 📋 Overview

This document describes the complete integration system for connecting the Al-Azhar School platform with external educational management systems.

## 🏗 Architecture

### System Components

1. **API Service Layer** (`lib/api.ts`)
   - Handles all external API communications
   - Provides fallback mock data for development
   - Manages authentication and error handling

2. **Custom Hooks** (`hooks/useScheduleData.ts`)
   - Manages state for schedule and attendance data
   - Handles real-time updates via WebSocket
   - Provides data loading and error states

3. **API Routes** (`app/api/`)
   - Next.js API routes for backend communication
   - Handles data transformation and validation
   - Provides RESTful endpoints

4. **UI Components**
   - Dashboard integration
   - Teacher management
   - Attendance reports
   - Notification system
   - Admin panel

## 🔌 API Integration

### Base Configuration

```typescript
// Environment Variables
NEXT_PUBLIC_API_URL=https://api.alazhar-school.com
NEXT_PUBLIC_API_KEY=your_api_key_here
```

### Available Endpoints

#### 1. Student Schedule
```typescript
GET /api/schedule/student/{studentId}?month={month}
```

**Response:**
```json
[
  {
    "id": "1",
    "date": "2025-08-05",
    "day": "Monday",
    "teacher": "Mohamed Mohsen",
    "teacherId": "teacher1",
    "timeUK": "9 PM",
    "timeEG": "5 AM",
    "status": "scheduled",
    "zoomLink": "zoom.com/meeting/123",
    "subject": "Quran Recitation"
  }
]
```

#### 2. Attendance Update
```typescript
POST /api/attendance
{
  "classId": "1",
  "status": "attended",
  "timestamp": "2025-08-05T21:00:00Z"
}
```

#### 3. Attendance Statistics
```typescript
GET /api/attendance/stats/{studentId}?month={month}
```

**Response:**
```json
{
  "attended": 4,
  "total": 4,
  "cancelled": 2,
  "studyHours": 4
}
```

#### 4. Teacher Information
```typescript
GET /api/teachers/{teacherId}
```

## 🔄 Real-time Updates

### WebSocket Connection

```typescript
const rtUpdates = new RealTimeUpdates();
rtUpdates.connect(studentId, (data) => {
  // Handle real-time updates
  if (data.type === 'schedule_update') {
    // Update schedule
  } else if (data.type === 'attendance_update') {
    // Update attendance
  }
});
```

### Update Types

1. **Schedule Updates**
   - New classes added
   - Class times changed
   - Teacher assignments updated

2. **Attendance Updates**
   - Attendance marked
   - Classes cancelled
   - Status changes

3. **System Notifications**
   - Teacher changes
   - Platform maintenance
   - Important announcements

## 📊 Data Flow

### 1. Data Loading
```
User Login → Load User Data → Fetch Schedule → Fetch Stats → Update UI
```

### 2. Real-time Updates
```
External System → WebSocket → Update Local State → Re-render Components
```

### 3. User Actions
```
User Action → API Call → External System → WebSocket Update → UI Update
```

## 🛠 Implementation Guide

### Step 1: Environment Setup

1. Create `.env.local` file:
```env
NEXT_PUBLIC_API_URL=https://your-api-url.com
NEXT_PUBLIC_API_KEY=your_api_key
```

2. Update API configuration in `lib/api.ts`

### Step 2: Database Schema

#### Students Table
```sql
CREATE TABLE students (
  id VARCHAR(255) PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  age INTEGER,
  country VARCHAR(100),
  assigned_teacher VARCHAR(255),
  subjects TEXT[],
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### Classes Table
```sql
CREATE TABLE classes (
  id VARCHAR(255) PRIMARY KEY,
  student_id VARCHAR(255) REFERENCES students(id),
  teacher_id VARCHAR(255) REFERENCES teachers(id),
  date DATE NOT NULL,
  time_uk TIME NOT NULL,
  time_eg TIME NOT NULL,
  subject VARCHAR(100) NOT NULL,
  status VARCHAR(50) DEFAULT 'scheduled',
  zoom_link VARCHAR(500),
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### Teachers Table
```sql
CREATE TABLE teachers (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(50),
  specialization VARCHAR(100),
  status VARCHAR(50) DEFAULT 'active',
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Step 3: API Development

#### Backend Requirements

1. **Authentication**
   - JWT token validation
   - API key verification
   - Role-based access control

2. **Data Validation**
   - Input sanitization
   - Schema validation
   - Error handling

3. **Real-time Features**
   - WebSocket server
   - Event broadcasting
   - Connection management

### Step 4: Frontend Integration

#### Using the Custom Hook

```typescript
import { useScheduleData } from '@/hooks/useScheduleData';

function MyComponent() {
  const {
    scheduleData,
    attendanceStats,
    loading,
    error,
    updateAttendance,
    navigateMonth
  } = useScheduleData();

  // Component logic
}
```

#### Adding Real-time Updates

```typescript
import { RealTimeUpdates } from '@/lib/api';

useEffect(() => {
  const rtUpdates = new RealTimeUpdates();
  rtUpdates.connect(userId, handleUpdate);
  
  return () => rtUpdates.disconnect();
}, [userId]);
```

## 🔧 Configuration Options

### API Settings

```typescript
// lib/api.ts
const API_CONFIG = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
  retryAttempts: 3,
  retryDelay: 1000
};
```

### Real-time Settings

```typescript
// WebSocket configuration
const WS_CONFIG = {
  reconnectAttempts: 5,
  reconnectDelay: 1000,
  heartbeatInterval: 30000
};
```

### UI Settings

```typescript
// Auto-refresh intervals
const REFRESH_INTERVALS = {
  schedule: 5 * 60 * 1000, // 5 minutes
  notifications: 30 * 1000, // 30 seconds
  stats: 2 * 60 * 1000 // 2 minutes
};
```

## 🚀 Deployment

### Production Checklist

1. **Environment Variables**
   - Set production API URLs
   - Configure secure API keys
   - Enable HTTPS

2. **Database**
   - Set up production database
   - Configure backups
   - Set up monitoring

3. **WebSocket**
   - Configure WebSocket server
   - Set up load balancing
   - Enable SSL/TLS

4. **Monitoring**
   - Set up error tracking
   - Configure performance monitoring
   - Set up alerts

### Security Considerations

1. **API Security**
   - Use HTTPS for all API calls
   - Implement rate limiting
   - Validate all inputs

2. **Authentication**
   - Secure token storage
   - Implement token refresh
   - Role-based permissions

3. **Data Protection**
   - Encrypt sensitive data
   - Implement data retention policies
   - Regular security audits

## 📈 Performance Optimization

### Caching Strategy

```typescript
// Implement caching for frequently accessed data
const cache = new Map();

const getCachedData = async (key: string, fetcher: () => Promise<any>) => {
  if (cache.has(key)) {
    return cache.get(key);
  }
  
  const data = await fetcher();
  cache.set(key, data);
  return data;
};
```

### Lazy Loading

```typescript
// Load data only when needed
const [showDetails, setShowDetails] = useState(false);

{showDetails && <DetailedView data={detailedData} />}
```

### Optimistic Updates

```typescript
// Update UI immediately, sync with server later
const updateAttendance = async (classId: string, status: string) => {
  // Update local state immediately
  setScheduleData(prev => updateClassStatus(prev, classId, status));
  
  // Sync with server
  try {
    await api.updateAttendance(classId, status);
  } catch (error) {
    // Revert on error
    setScheduleData(prev => updateClassStatus(prev, classId, 'scheduled'));
  }
};
```

## 🐛 Troubleshooting

### Common Issues

1. **API Connection Failed**
   - Check API URL and key
   - Verify network connectivity
   - Check CORS settings

2. **WebSocket Disconnection**
   - Check WebSocket server status
   - Verify connection URL
   - Check firewall settings

3. **Data Not Updating**
   - Check real-time connection
   - Verify API responses
   - Check component re-rendering

### Debug Tools

```typescript
// Enable debug logging
const DEBUG = process.env.NODE_ENV === 'development';

if (DEBUG) {
  console.log('API Response:', data);
  console.log('WebSocket Message:', message);
}
```

## 📞 Support

For technical support or questions about the integration:

1. **Documentation**: Check this guide and inline code comments
2. **API Reference**: See `lib/api.ts` for available functions
3. **Examples**: Check existing components for usage patterns
4. **Issues**: Report bugs through the project issue tracker

## 🔄 Version History

- **v1.0.0**: Initial integration setup
- **v1.1.0**: Added real-time updates
- **v1.2.0**: Enhanced error handling
- **v1.3.0**: Added admin panel
- **v1.4.0**: Performance optimizations

---

**Last Updated**: December 2024
**Maintainer**: Al-Azhar School Development Team 