document.addEventListener('DOMContentLoaded', () => {
    // Handle user registration
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
      registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        auth.createUserWithEmailAndPassword(email, password)
          .then((userCredential) => {
            console.log('User registered:', userCredential.user);
            window.location.href = 'dashboard.html';
          })
          .catch((error) => {
            console.error('Error registering user:', error);
          });
      });
    }
  
    // Handle user login
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        auth.signInWithEmailAndPassword(email, password)
          .then((userCredential) => {
            console.log('User logged in:', userCredential.user);
            window.location.href = 'dashboard.html';
          })
          .catch((error) => {
            console.error('Error logging in:', error);
          });
      });
    }
  
    // Handle user logout
    const logoutButton = document.getElementById('logout');
    if (logoutButton) {
      logoutButton.addEventListener('click', () => {
        auth.signOut().then(() => {
          console.log('User logged out');
          window.location.href = 'index.html';
        }).catch((error) => {
          console.error('Error logging out:', error);
        });
      });
    }
  });
  