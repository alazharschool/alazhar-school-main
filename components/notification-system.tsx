"use client";

import { useState, useEffect } from 'react';
import { RealTimeUpdates } from '@/lib/api';
import { useUser } from '@/contexts/UserContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bell, X, CheckCircle, AlertCircle, Info } from 'lucide-react';

interface Notification {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
}

export function NotificationSystem() {
  const { user } = useUser();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [realTimeUpdates, setRealTimeUpdates] = useState<RealTimeUpdates | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  // Initialize real-time updates
  useEffect(() => {
    if (!user?.email) return;

    const rtUpdates = new RealTimeUpdates();
    setRealTimeUpdates(rtUpdates);

    rtUpdates.connect(user.email, (data) => {
      handleRealTimeUpdate(data);
    });

    return () => {
      rtUpdates.disconnect();
    };
  }, [user?.email]);

  const handleRealTimeUpdate = (data: any) => {
    const newNotification: Notification = {
      id: Date.now().toString(),
      type: data.type === 'schedule_update' ? 'info' : 
            data.type === 'attendance_update' ? 'success' : 'warning',
      title: getNotificationTitle(data),
      message: getNotificationMessage(data),
      timestamp: new Date(),
      read: false
    };

    setNotifications(prev => [newNotification, ...prev.slice(0, 9)]); // Keep last 10 notifications
  };

  const getNotificationTitle = (data: any) => {
    switch (data.type) {
      case 'schedule_update':
        return 'Schedule Updated';
      case 'attendance_update':
        return 'Attendance Updated';
      case 'teacher_change':
        return 'Teacher Changed';
      case 'class_cancelled':
        return 'Class Cancelled';
      default:
        return 'System Update';
    }
  };

  const getNotificationMessage = (data: any) => {
    switch (data.type) {
      case 'schedule_update':
        return `Your schedule has been updated for ${data.date}`;
      case 'attendance_update':
        return `Attendance marked for class on ${data.date}`;
      case 'teacher_change':
        return `Your teacher has been changed to ${data.newTeacher}`;
      case 'class_cancelled':
        return `Class on ${data.date} has been cancelled`;
      default:
        return data.message || 'System notification';
    }
  };

  const markAsRead = (notificationId: string) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === notificationId 
          ? { ...notif, read: true } 
          : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notif => ({ ...notif, read: true }))
    );
  };

  const removeNotification = (notificationId: string) => {
    setNotifications(prev => 
      prev.filter(notif => notif.id !== notificationId)
    );
  };

  const getUnreadCount = () => {
    return notifications.filter(notif => !notif.read).length;
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'warning':
        return <AlertCircle className="w-4 h-4 text-yellow-600" />;
      case 'error':
        return <AlertCircle className="w-4 h-4 text-red-600" />;
      default:
        return <Info className="w-4 h-4 text-blue-600" />;
    }
  };

  const getNotificationStyle = (type: string) => {
    switch (type) {
      case 'success':
        return 'border-green-200 bg-green-50';
      case 'warning':
        return 'border-yellow-200 bg-yellow-50';
      case 'error':
        return 'border-red-200 bg-red-50';
      default:
        return 'border-blue-200 bg-blue-50';
    }
  };

  return (
    <div className="space-y-4">
      {/* Connection Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="w-5 h-5" />
            Real-time Notifications
            <Badge variant={isConnected ? "default" : "secondary"}>
              {isConnected ? "Connected" : "Disconnected"}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">
              {isConnected 
                ? "Receiving real-time updates from the system" 
                : "Connecting to notification service..."
              }
            </p>
            {getUnreadCount() > 0 && (
              <Button onClick={markAllAsRead} variant="outline" size="sm">
                Mark All as Read
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Notifications List */}
      {notifications.length > 0 ? (
        <div className="space-y-2">
          {notifications.map((notification) => (
            <Card 
              key={notification.id} 
              className={`transition-all duration-200 ${
                notification.read ? 'opacity-60' : 'opacity-100'
              } ${getNotificationStyle(notification.type)}`}
            >
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    {getNotificationIcon(notification.type)}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-sm">{notification.title}</h4>
                        {!notification.read && (
                          <Badge variant="secondary" className="text-xs">
                            New
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
                      <p className="text-xs text-gray-500">
                        {notification.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {!notification.read && (
                      <Button
                        onClick={() => markAsRead(notification.id)}
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0"
                      >
                        <CheckCircle className="w-3 h-3" />
                      </Button>
                    )}
                    <Button
                      onClick={() => removeNotification(notification.id)}
                      variant="ghost"
                      size="sm"
                      className="h-6 w-6 p-0"
                    >
                      <X className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="py-8">
            <div className="text-center text-gray-500">
              <Bell className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No notifications yet</p>
              <p className="text-sm">You'll see real-time updates here</p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Notification Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Notification Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span>Schedule Updates</span>
              <Badge variant="default">Enabled</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Attendance Updates</span>
              <Badge variant="default">Enabled</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Teacher Changes</span>
              <Badge variant="default">Enabled</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Class Cancellations</span>
              <Badge variant="default">Enabled</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 