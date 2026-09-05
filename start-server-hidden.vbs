' تشغيل سيرفر Al-Azhar School تلقائيًا في الخلفية
Set WshShell = CreateObject("WScript.Shell")

' الانتقال إلى مجلد المشروع
WshShell.CurrentDirectory = "C:\Users\hp\Downloads\alazhar-school"

' تشغيل السيرفر في الخلفية بدون نافذة
WshShell.Run "cmd /c npm run dev", 0, False

' إظهار رسالة تأكيد
MsgBox "تم تشغيل سيرفر Al-Azhar School تلقائيًا" & vbCrLf & "السيرفر متاح على: http://localhost:3000", 64, "Al-Azhar School Server" 