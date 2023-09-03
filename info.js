// Function to fetch both IPv4 and IPv6 addresses
function getIpAddresses() {
    Promise.all([
        fetch('https://api64.ipify.org?format=json').then(response => response.json()),
        fetch('https://api64.ipify.org?format=json&ipv=6').then(response => response.json())
    ])
    .then(data => {
        const ipv4Address = data[0].ip;
        const ipv6Address = data[1].ip;
        
        document.getElementById('ipv4-address').textContent = ipv4Address;
        document.getElementById('ipv6-address').textContent = ipv6Address;
    })
    .catch(error => {
        console.error('Error fetching IP addresses:', error);
        document.getElementById('ipv4-address').textContent = 'Error fetching IPv4';
        document.getElementById('ipv6-address').textContent = 'Error fetching IPv6';
    });
}

// Call the function to fetch and display both IP addresses
getIpAddresses();
