
  document.addEventListener("DOMContentLoaded", () => {
    // Car class to create car objects
    class Car {
        constructor(make, model, color, image, registration, price) {
            this.make = make;
            this.model = model;
            this.color = color;
            this.image = image;
            this.registration = registration;
            this.price = price;
        }

        // Method to display more details about the car in a modal
        showMore() {
            const modal = document.getElementById("car-modal");
            const details = document.getElementById("car-details");
            details.innerHTML = `
                <h2>${this.make} ${this.model}</h2>
                <p><strong>Color:</strong> ${this.color}</p>
                <p><strong>Registration Number:</strong> ${this.registration}</p>
                <p><strong>Price:</strong> ${this.price}</p>
                <img src="${this.image}" alt="${this.make} ${this.model}" />
            `;
            modal.style.display = "block";
        }
    }

    // Array of car objects
    const cars = [
        new Car('Kia', 'Kia Pegas', 'White', 'images/21Kia-Pegas-8.jpg', 'CAA-215-677', 'R236, 995'),
        new Car('Audi', 'A1', 'Red', 'images/Audi-A1-13.jpg', 'CAA-215-677', 'R204, 500'),
        new Car('Mercedes', 'AMG-E53', 'Silver', 'images/Mercedes-AMG-E53-10.jpg', 'CAA-215-677', 'R1, 630.600'),
        new Car('Ford', 'Ranger', 'Red', 'images/Ford-Ranger-FX4-1_3-scaled.jpg', 'CAA-215-677', 'R509, 620'),
        new Car('Ford', 'Ranger', 'Red', 'images/Ford-Ranger-FX4-1_3-scaled.jpg', 'CAA-215-677', 'R509, 620'),
        new Car('Mercedes', 'AMG-E53', 'Silver', 'images/Mercedes-AMG-E53-10.jpg', 'CAA-215-677', 'R1, 630.600'),
        new Car('Audi', 'A1', 'Red', 'images/Audi-A1-13.jpg', 'CAA-215-677', 'R204, 500'),
        new Car('Kia', 'Kia Pegas', 'White', 'images/21Kia-Pegas-8.jpg', 'CAA-215-677', 'R236, 995')
        
  
    ];

    // Function to display car objects on the webpage
    function displayCars() {
        const carList = document.getElementById('car-list');
        cars.forEach(car => {
            const carElement = document.createElement('div');
            carElement.className = 'car-item';
            carElement.innerHTML = `
                <h3>${car.make} ${car.model}</h3>
                <img src="${car.image}" alt="${car.make} ${car.model}" />
                <button class="show-more-btn">Show More</button>
            `;
            // Add event listener to the "Show More" button to display car details
            carElement.querySelector('.show-more-btn').addEventListener('click', () => car.showMore());
            carList.appendChild(carElement);
        });
    }

    // Get the modal element
    const modal = document.getElementById('car-modal');
    // Get the close button element
    const closeModal = document.getElementById('modal-close');
    // Add event listener to the close button to hide the modal
    closeModal.onclick = () => {
        modal.style.display = "none";
    };

    // Add event listener to hide the modal when clicking outside of it
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

    // Display the cars when the page loads
    displayCars();
});
