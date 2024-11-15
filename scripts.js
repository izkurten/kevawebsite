// scripts.js

// Check if we're on the cocktail detail page
if (window.location.pathname.endsWith('cocktail.html')) {
  initCocktailPage();
}

function initCocktailPage() {
  const params = new URLSearchParams(window.location.search);
  const cocktailId = params.get('id');

  if (!cocktailId) {
    alert('Cocktail not found');
    return;
  }

  // Define cocktail data
  const cocktails = [
    {
      id: 'mojito',
      name: 'Mojito',
      image: 'assets/images/mojito.png', // Path to the illustration
      info: {
        sweetness: '3/5',
        bitterness: '1/5',
        alcohol: 'Medium',
        notes: 'Minty and refreshing.',
      },
    },
    {
      id: 'oldfashioned',
      name: 'Old Fashioned',
      image: 'assets/images/oldfashioned.png',
      info: {
        sweetness: '2/5',
        bitterness: '4/5',
        alcohol: 'High',
        notes: 'Strong with a hint of orange.',
      },
    },
    {
      id: 'martini',
      name: 'Martini',
      image: 'assets/images/martini.png',
      info: {
        sweetness: '1/5',
        bitterness: '2/5',
        alcohol: 'High',
        notes: 'Classic and dry.',
      },
    },
    // Add more cocktails here
  ];

  const cocktail = cocktails.find((c) => c.id === cocktailId);

  if (!cocktail) {
    alert('Cocktail not found');
    return;
  }

  // Populate the navigation bar
  const navbar = document.getElementById('navbar');
  cocktails.forEach((c) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `cocktail.html?id=${c.id}`;
    a.textContent = c.name;
    if (c.id === cocktailId) {
      a.classList.add('active');
    }
    li.appendChild(a);
    navbar.appendChild(li);
  });

  // Display the cocktail image
  const cocktailImage = document.getElementById('cocktail-image');
  cocktailImage.src = cocktail.image;
  cocktailImage.alt = cocktail.name;

  // Setup info button
  const infoButton = document.getElementById('info-button');
  const infoPopup = document.getElementById('info-popup');
  infoButton.addEventListener('click', () => {
    if (infoPopup.classList.contains('hidden')) {
      infoPopup.innerHTML = `
        <p><strong>Sweetness:</strong> ${cocktail.info.sweetness}</p>
        <p><strong>Bitterness:</strong> ${cocktail.info.bitterness}</p>
        <p><strong>Alcohol Content:</strong> ${cocktail.info.alcohol}</p>
        <p>${cocktail.info.notes}</p>
      `;
      infoPopup.classList.remove('hidden');
    } else {
      infoPopup.classList.add('hidden');
    }
  });
}
