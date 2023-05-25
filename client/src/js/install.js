let deferredPrompt; // this variable should be outside the scope of the event
const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default behavior of the prompt
  event.preventDefault();
  
  // Store the event for later use
  deferredPrompt = event;
  
  // Show the installation button
  butInstall.style.display = 'block';
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  // Check if deferredPrompt is set
  if (deferredPrompt) {
    // Show the installation prompt
    deferredPrompt.prompt();
    
    // Wait for the user to respond to the prompt
    const choiceResult = await deferredPrompt.userChoice;
    
    // Check the user's choice
    if (choiceResult.outcome === 'accepted') {
      console.log('PWA installed');
    } else {
      console.log('PWA installation rejected');
    }
    
    // Clear the deferredPrompt variable
    deferredPrompt = null;
    
    // Hide the installation button
    butInstall.style.display = 'none';
  }
});

// Add an event handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('PWA successfully installed');
});

