$(document).ready(function() {
    var consentCookie = localStorage.getItem('cookieConsent');
    if (!consentCookie) {
      $('.cookie-banner').fadeIn();
    }
  });

  function acceptCookies() {
    $('.cookie-banner').fadeOut();
    localStorage.setItem('cookieConsent', true);
  }
  
  function customizeCookies() {
    $('#customize-dialog').fadeIn();
    // Show the customize cookies dialog or UI
    // You can use a modal, a dropdown, or any other UI element to allow users to customize their cookie settings.
    // Implement the logic to display the available cookies and allow the user to select/deselect them.
  }
  
  function saveCustomizedCookies() {
    var selectedCookies = [];
  
  // Check which cookies are selected
  if ($('#analytics-checkbox').is(':checked')) {
    selectedCookies.push('analytics');
  }
  
  if ($('#preferences-checkbox').is(':checked')) {
    selectedCookies.push('preferences');
  }
  
  // Save the selected cookies in localStorage or send them to the server
  localStorage.setItem('customizedCookies', JSON.stringify(selectedCookies));
  
  // Hide the customize cookies dialog
  $('#customize-dialog').fadeOut();
  $('.cookie-banner').fadeOut();
  
  // Proceed with the logic to set the consent cookie or handle the customized cookies according to your requirements
  // ...
}
    // Save the user's customized cookie settings
    // You can store the selected/deselected cookies in localStorage or send them to the server for further processing.
    // Update the implementation according to your specific requirements.