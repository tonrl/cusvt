// Function to fetch the user's IP address
function getIpAddress() {
    fetch('https://api64.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const ipAddress = data.ip;
            document.getElementById('ip-address').textContent = ipAddress;
        })
        .catch(error => {
            console.error('Error fetching IP address:', error);
            document.getElementById('ip-address').textContent = 'Error fetching IP';
        });
}

// Call the function to fetch and display the IP address
getIpAddress();
