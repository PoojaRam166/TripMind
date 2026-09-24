const fs = require('fs');

const filesToUpdate = [
  'c:/Users/pooji/OneDrive/Desktop/TripMind/frontend/src/pages/ResetPasswordPage.jsx',
  'c:/Users/pooji/OneDrive/Desktop/TripMind/frontend/src/pages/RegisterPage.jsx',
  'c:/Users/pooji/OneDrive/Desktop/TripMind/frontend/src/pages/LoginPage.jsx',
  'c:/Users/pooji/OneDrive/Desktop/TripMind/frontend/src/pages/ForgotPasswordPage.jsx',
  'c:/Users/pooji/OneDrive/Desktop/TripMind/frontend/src/components/Footer.jsx'
];

for (const file of filesToUpdate) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Fix bad replacement
  content = content.replace(/ Plane } from 'lucide-react';/g, "lucide-react';");
  
  // Actually add Plane
  if (!content.includes('Plane,')) {
    content = content.replace(/Compass/, 'Compass, Plane');
  }
  
  fs.writeFileSync(file, content);
  console.log('Fixed imports:', file);
}
