const organizations = [
    {
        "Tag": "11",
        "Keyword": "MAMA",
        "Name": "Straßenwächter e.V.",
        "Beschreibung": "Engagiert sich seit 2005 für Obdachlose in Köln durch tägliche Touren mit Versorgung und Unterstützung.",
        "Webseite": "strassenwaechter.de"
    },
    {
        "Tag": "10",
        "Keyword": "HOLZTISCH",
        "Name": "Arche für Obdachlose e.V.",
        "Beschreibung": "Unterstützt Obdachlose in Köln und Umgebung mit verschiedenen Hilfsangeboten.",
        "Webseite": "arche-obdach.org"
    },
    {
        "Tag": "14",
        "Keyword": "TEAM",
        "Name": "Helping Hands Cologne e.V.",
        "Beschreibung": "Seit 2014 aktiv in der Unterstützung von Obdachlosen und Bedürftigen in Köln.",
        "Webseite": "hhc-obdachlosenhilfe.koeln"
    },
    {
        "Tag": "8",
        "Keyword": "WASSERRATTE",
        "Name": "OASE Benedikt Labre e.V.",
        "Beschreibung": "Bietet seit über 30 Jahren Beratung und Hilfe für Wohnungslose in Köln.",
        "Webseite": "oase-koeln.de"
    },
    {
        "Tag": "20",
        "Keyword": "SCHELM",
        "Name": "SKM Köln – Obdach- und Wohnungslosenhilfe",
        "Beschreibung": "Bietet vielfältige Hilfen für obdach- und wohnungslose Menschen in Köln.",
        "Webseite": "skm-koeln.de"
    },
    {
        "Tag": "18",
        "Keyword": "KÜSSCHEN",
        "Name": "Sozialdienst katholischer Frauen e.V. Köln",
        "Beschreibung": "Unterstützt obdachlose Frauen und Familien mit verschiedenen Angeboten.",
        "Webseite": "skf-koeln.de"
    },
    {
        "Tag": "2",
        "Keyword": "LÖWE",
        "Name": "Animal Rescue Algarve (ARA)",
        "Beschreibung": "Rettet und rehabilitiert verlassene und misshandelte Tiere in der Algarve, Portugal.",
        "Webseite": "animalrescuealgarve.com"
    },
    {
        "Tag": "3",
        "Keyword": "COFFEEGANG",
        "Name": "Tierrettung Portugal e.V.",
        "Beschreibung": "Vermittelt Hunde aus Tötungsstationen und Tierheimen in Portugal.",
        "Webseite": "tierrettung-portugal.de"
    },
    {
        "Tag": "1",
        "Keyword": "RUDI",
        "Name": "Dogs of Portugal",
        "Beschreibung": "Vermittelt Hunde aus einem Tierheim in Portugal nach Deutschland.",
        "Webseite": "dogsofportugal.de",
        "Nachricht": "Zwar keine Ziege..."
    },
    {
        "Tag": "4",
        "Keyword": "BEACHBOY",
        "Name": "Tierschutz mit Herz e.V.",
        "Beschreibung": "Gemeinnütziger Verein im Raum Köln/Hennef, der Hunde zur Adoption vermittelt.",
        "Webseite": "tierschutzmitherz.de"
    },
    {
        "Tag": "15",
        "Keyword": "BOYS",
        "Name": "Kinderheim Kleine Strolche e.V.",
        "Beschreibung": "Freier Träger der Kinder- und Jugendhilfe mit mehreren Standorten in Niedersachsen, spezialisiert auf die Inobhutnahme von Säuglingen und Kleinkindern.",
        "Webseite": "kinderheim-kleine-strolche.de"
    },
    {
        "Tag": "12",
        "Keyword": "PARTYTIGER",
        "Name": "EBM International",
        "Beschreibung": "Bietet Schutz und Heimat für verwahrloste, verlassene und missbrauchte Kinder, die ohne Hilfe chancenlos wären.",
        "Webseite": "ebm-international.org/de/"
    },
    {
        "Tag": "7",
        "Keyword": "SCHMIDTIS",
        "Name": "Afghanischer Frauenverein e. V.",
        "Beschreibung": "Unterstützt Frauen und Kinder in Afghanistan durch Bildungs-, Gesundheits- und Infrastrukturprojekte.",
        "Webseite": "afghanischer-frauenverein.de"
    },
    {
        "Tag": "24",
        "Keyword": "KUSCHELTIGER",
        "Name": "Aktion Canchanabury e.V.",
        "Beschreibung": "Setzt sich für Gesundheitsprojekte in Afrika ein, insbesondere für HIV/AIDS-Betroffene und benachteiligte Kinder.",
        "Webseite": "canchanabury.de"
    },
    {
        "Tag": "23",
        "Keyword": "ZIEGENHAUS",
        "Name": "AYUDAME-Arequipa",
        "Beschreibung": "Betreibt eine Kindertagesstätte in Peru und unterstützt benachteiligte Kinder und Familien mit Bildungs- und Versorgungsangeboten.",
        "Webseite": "ayudame.de"
    },
    {
        "Tag": "9",
        "Keyword": "5STERNEDELUXE",
        "Name": "Bergwaldprojekt e.V.",
        "Beschreibung": "Engagiert sich für den Schutz und Erhalt der Wälder in Deutschland und bietet Freiwilligenprojekte zur Aufforstung und Waldpflege.",
        "Webseite": "bergwaldprojekt.de"
    },
    {
        "Tag": "21",
        "Keyword": "CARWASH",
        "Name": "Kinderheim Pauline",
        "Beschreibung": "Bietet Schutz und Betreuung für Kinder in schwierigen Lebenssituationen in Niedersachsen mit Fokus auf Bildung und soziale Unterstützung.",
        "Webseite": "kinderheim-pauline.de"
    },
    {
        "Tag": "22",
        "Keyword": "SCHÖNSCHARF",
        "Name": "Verein für Berliner Stadtmission",
        "Beschreibung": "Hilft obdachlosen und bedürftigen Menschen in Berlin durch Essensausgaben, Kältenotübernachtungen und Beratungsangebote.",
        "Webseite": "berliner-stadtmission.de"
    },
    {
        "Tag": "16",
        "Keyword": "SILVESTER",
        "Name": "Obdachlosenhilfe Rostock gGmbH",
        "Beschreibung": "Unterstützt Obdachlose in Rostock mit Unterkünften, Mahlzeiten und sozialer Beratung.",
        "Webseite": "obdachlosenhilfe-rostock.de"
    },
    {
        "Tag": "13",
        "Keyword": "GROBI",
        "Name": "CaFée mit Herz e.V.",
        "Beschreibung": "Ein Tageszentrum in Hamburg, das Obdachlosen und Bedürftigen warme Mahlzeiten, Kleidung und medizinische Hilfe bietet.",
        "Webseite": "cafeemitherz.de"
    },
    {
        "Tag": "6",
        "Keyword": "ICEICEBABY",
        "Name": "Kältebus München e.V.",
        "Beschreibung": "Hilft obdachlosen Menschen in München bei eisigen Temperaturen mit warmen Getränken, Decken und Übernachtungsmöglichkeiten.",
        "Webseite": "kaeltebus-muenchen.de"
    },
    {
        "Tag": "19",
        "Keyword": "WALCHENSEE",
        "Name": "Kältebus Saarbrücken e.V.",
        "Beschreibung": "Unterstützt obdachlose Menschen im Raum Saarbrücken bei kalten Temperaturen mit Hilfsgütern und Übernachtungsmöglichkeiten.",
        "Webseite": "kaeltebussaarbruecken.de"
    },
    {
        "Tag": "5",
        "Keyword": "MAUSEBÄR",
        "Name": "Elisabethstift",
        "Beschreibung": "Bietet Betreuung, Bildung und Schutz für Kinder und Jugendliche in Notlagen, insbesondere in Berlin und Brandenburg.",
        "Webseite": "elisabethstift-berlin.de"
    },
    {
        "Tag": "17",
        "Keyword": "DINOFAN",
        "Name": "",
        "Beschreibung": "",
        "Webseite": ""
    }
];

const homePage = document.getElementById('home-page');
const detailPage = document.getElementById('detail-page');
const input = document.getElementById('keyword-input');
const submitBtn = document.getElementById('submit-btn');

function checkKeyword() {
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

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkKeyword();
    }
});

submitBtn.addEventListener('click', checkKeyword);

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