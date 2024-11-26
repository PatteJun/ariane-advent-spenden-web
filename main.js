const organizations = [
    {
        "Tag": 1,
        "Keyword": "STRASSENWÄCHTER",
        "Name": "Straßenwächter e.V.",
        "Beschreibung": "Engagiert sich seit 2005 für Obdachlose in Köln durch tägliche Touren mit Versorgung und Unterstützung.",
        "Webseite": "strassenwaechter.de"
    },
    {
        "Tag": 2,
        "Keyword": "VACATION",
        "Name": "Today is your day off!",
        "Beschreibung": "No donation today - just enjoy your day!",
        "Webseite": ""
    }
    // Add more organizations here
];

const homePage = document.getElementById('home-page');
const detailPage = document.getElementById('detail-page');
const input = document.getElementById('keyword-input');

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const value = input.value.trim().toUpperCase();
        const organization = organizations.find(org => org.Keyword === value);
        
        if (organization) {
            showDetailPage(organization);
            input.value = '';
        } else {
            input.classList.add('error');
            setTimeout(() => input.classList.remove('error'), 500);
        }
    }
});

function showDetailPage(organization) {
    document.getElementById('day').textContent = organization.Tag;
    document.getElementById('organization').textContent = organization.Name;
    document.getElementById('description').textContent = organization.Beschreibung;
    
    const websiteLink = document.getElementById('website');
    if (organization.Webseite) {
        websiteLink.href = `https://${organization.Webseite}`;
        websiteLink.innerHTML = `
            ${organization.Webseite}
            <svg class="external-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
        `;
        websiteLink.style.display = 'inline-flex';
    } else {
        websiteLink.style.display = 'none';
    }

    // Only show donation visual if it's not a vacation day
    const donationVisual = document.getElementById('donation-visual');
    if (organization.Webseite) {
        donationVisual.style.display = 'block';
    } else {
        donationVisual.style.display = 'none';
    }

    homePage.classList.add('hidden');
    detailPage.classList.remove('hidden');
}