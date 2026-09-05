Write-Host "Installing dependencies with legacy peer deps..." -ForegroundColor Green
npm install --legacy-peer-deps
Write-Host ""
Write-Host "Dependencies installed successfully!" -ForegroundColor Green
Write-Host "You can now run: npm run dev" -ForegroundColor Yellow
Read-Host "Press Enter to continue"
