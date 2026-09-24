const fs = require('fs');

const filesToUpdate = [
  'c:/Users/pooji/OneDrive/Desktop/TripMind/frontend/src/pages/ResetPasswordPage.jsx',
  'c:/Users/pooji/OneDrive/Desktop/TripMind/frontend/src/pages/RegisterPage.jsx',
  'c:/Users/pooji/OneDrive/Desktop/TripMind/frontend/src/pages/LoginPage.jsx',
  'c:/Users/pooji/OneDrive/Desktop/TripMind/frontend/src/pages/ForgotPasswordPage.jsx',
  'c:/Users/pooji/OneDrive/Desktop/TripMind/frontend/src/pages/SettingsPage.jsx'
];

for (const file of filesToUpdate) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace button success background
  content = content.replace(/'#10b981'/g, "'var(--color-ink)'");
  
  // Replace specific text color in SettingsPage (Saved successfully)
  content = content.replace(/color: '#10b981'/g, "color: 'var(--color-gold-dark)'");
  
  // Replace the box shadow for success buttons
  content = content.replace(/'0 8px 24px rgba\(16, 185, 129, 0\.3\)'/g, "'0 8px 24px rgba(0, 0, 0, 0.2)'");
  
  // Replace the box shadow for success circles
  content = content.replace(/'0 8px 16px rgba\(16,185,129,0\.2\)'/g, "'0 8px 16px rgba(0,0,0,0.1)'");
  
  // For Reset/Forgot password success circle, update the color inside from white to gold
  content = content.replace(/background: 'var\(--color-ink\)', color: 'white'/g, "background: 'var(--color-ink)', color: 'var(--color-gold)'");
  
  // Also fix the text color of the success button in auth pages if it's changing background to ink
  // the text color should be gold on success. But the ternary is currently `color: 'var(--color-text-primary)'`
  // We can change `color: 'var(--color-text-primary)'` to `color: loginStatus === 'success' ? 'var(--color-gold)' : 'var(--color-text-primary)'`
  content = content.replace(/color: 'var\(--color-text-primary\)'/g, "color: (typeof loginStatus !== 'undefined' && loginStatus === 'success') || (typeof registerStatus !== 'undefined' && registerStatus === 'success') || (typeof status !== 'undefined' && status === 'loading') ? 'var(--color-gold)' : 'var(--color-text-primary)'");
  
  fs.writeFileSync(file, content);
  console.log('Fixed colors:', file);
}
