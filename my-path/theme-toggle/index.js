function activateTheme(themeId) {
    // Disable all CSS files
    var cssFiles = document.querySelectorAll('link[rel="stylesheet"]');
    cssFiles.forEach(function(file) {
      file.disabled = true;
    });
    
    // Enable the selected CSS file
    var selectedTheme = document.getElementById(themeId);
    if (selectedTheme) {
      selectedTheme.disabled = false;

      
      localStorage.setItem('activeTheme', themeId);
      document.body.style.visibility = 'visible';
    }
  }

document.addEventListener('DOMContentLoaded', function() {
    var activeTheme = localStorage.getItem("activeTheme");
    if (activeTheme) {
      activateTheme(activeTheme);
    }else {
      document.body.style.visibility = 'visible';
    }

});