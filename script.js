
        
        function initMap() {
            var apartmentLocation = { lat: 40.730610, lng: -73.935242 }; // Example coordinates
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: apartmentLocation
            });
            var marker = new google.maps.Marker({
                position: apartmentLocation,
                map: map
            });
        }
    
    <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" async defer></script>