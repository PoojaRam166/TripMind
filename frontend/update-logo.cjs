const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'c:/Users/pooji/OneDrive/Desktop/TripMind/frontend/src/pages/ResetPasswordPage.jsx',
  'c:/Users/pooji/OneDrive/Desktop/TripMind/frontend/src/pages/RegisterPage.jsx',
  'c:/Users/pooji/OneDrive/Desktop/TripMind/frontend/src/pages/LoginPage.jsx',
  'c:/Users/pooji/OneDrive/Desktop/TripMind/frontend/src/pages/ForgotPasswordPage.jsx',
  'c:/Users/pooji/OneDrive/Desktop/TripMind/frontend/src/components/Footer.jsx',
  'c:/Users/pooji/OneDrive/Desktop/TripMind/frontend/src/components/dashboard/Sidebar.jsx',
  'c:/Users/pooji/OneDrive/Desktop/TripMind/frontend/src/components/Navbar.jsx'
];

for (const file of filesToUpdate) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace <Brain with <Plane in logo contexts
  content = content.replace(/<Brain size=\{24\}/g, '<Plane size={24}');
  content = content.replace(/<Brain size=\{15\}/g, '<Plane size={15}');
  content = content.replace(/<Brain size=\{18\}/g, '<Plane size={18}');
  
  // Ensure Plane is imported
  if (!content.includes('Plane')) {
    content = content.replace(/lucide-react';/, " Plane } from 'lucide-react';").replace(/,\s*Plane/, ', Plane');
  }
  
  fs.writeFileSync(file, content);
  console.log('Updated:', file);
}
