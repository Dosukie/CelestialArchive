// window.ARCHIVE_ITEMS — edit this array to add/remove cards
window.ARCHIVE_ITEMS = [
  {
    id:1,
    title:'Hubble Servicing Mission',
    category:'Missions',
    date:'1993-12-02',
    image:'assets/hubbleservicingmission.jpg',
    summary:'Servicing mission that fixed Hubble\'s optics and extended its life.',
    mission: 'STS-61 (Servicing Mission 1)',
    vehicle: 'Space Shuttle Endeavour',
    crew: '5 (STS-61 crew)',
    objectives: 'Correct optical aberration, install COSTAR, replace/upgrade instruments and solar arrays',
    credits: 'NASA',
    body: `<p class="entry-summary">The 1993 Hubble Servicing Mission (STS-61) corrected the telescope's flawed primary mirror and installed replacement optics and upgraded instruments. Precision EVA work restored Hubble's imaging performance and enabled decades of transformative astronomy.</p>
      <h3>Mission highlights</h3>
      <div style="padding-left:0;">
        <p><strong>Mission:</strong> STS-61 (Servicing Mission 1)</p>
        <p><strong>Launch / Landing:</strong> December 1993</p>
        <p><strong>Shuttle:</strong> Endeavour</p>
        <p><strong>Objectives:</strong> Fix mirror aberration, install COSTAR, upgrade instruments and power</p>
      </div>
      <h3>Outcome</h3>
      <p>After the servicing mission, Hubble delivered sharply improved resolution and stability, producing a wealth of high-impact discoveries across cosmology, galaxy evolution, and planetary science.</p>
      <p class="entry-credits">Credits: NASA</p>
      <p>More information and high-resolution images: <a href="https://hubblesite.org/" target="_blank" rel="noopener">hubblesite.org</a></p>`
  },
  {
    id:2,
    title:'First Exoplanet Discovered',
    category:'Discoveries',
    date:'1992-01-01',
    image:'assets/firstexoplanet.jpg',
    summary:'Early detection of planets orbiting other stars opened a new field in astronomy.',
    discoverers: 'Alex Wolszczan & Dale Frail',
    method: 'Pulsar timing',
    credits: 'Penn State / NRAO',
    body: `<p class="entry-summary">In 1992 Alex Wolszczan and Dale Frail announced the discovery of planets orbiting the pulsar PSR B1257+12 — the first confirmed detections of exoplanets. These "pulsar planets" demonstrated that planets can form and survive in exotic environments and sparked the modern field of exoplanet science.</p>
      <h3>Discovery details</h3>
      <div style="padding-left:0;">
        <p><strong>Discoverers:</strong> Alex Wolszczan & Dale Frail</p>
        <p><strong>Year:</strong> 1992</p>
        <p><strong>Method:</strong> Pulsar timing variations</p>
      </div>
      <h3>Significance</h3>
      <p>This milestone confirmed that planets exist beyond our Solar System and motivated diverse detection techniques that have since discovered thousands of exoplanets.</p>
      <p class="entry-credits">Credits: Penn State / NRAO</p>
      <p>More on exoplanet discoveries: <a href="https://exoplanets.nasa.gov/" target="_blank" rel="noopener">NASA Exoplanet Exploration</a></p>`
  },
  {
    id:3,
    title:'Voyager 1 Interstellar Entry',
    category:'Missions',
    date:'2012-08-25',
    image:'assets/voyager1.jpg',
    summary:'Voyager 1 crossed into interstellar space and continues to return measurements of the heliosphere and nearby interstellar medium.',
    mission: 'Voyager program',
    agency: 'NASA / JPL',
    launched: '1977-09-05',
    credits: 'NASA / JPL-Caltech',
    body: `<p class="entry-summary">Launched in 1977, Voyager 1 performed landmark flybys of Jupiter and Saturn and later continued outward to become the first human-made object to reach interstellar space (~2012). It provides long-duration, in-situ measurements of plasma, magnetic fields and cosmic rays beyond the heliopause.</p>
      <h3>Key facts</h3>
      <div style="padding-left:0;">
        <p><strong>Launch:</strong> 5 September 1977</p>
        <p><strong>Interstellar transition:</strong> 2012 (approximate)</p>
        <p><strong>Notable science:</strong> Measurements of plasma density, magnetic fields and energetic particles beyond the heliosphere</p>
      </div>
      <p class="entry-credits">Credits: NASA / JPL-Caltech</p>
      <p>Technical details and mission archive: <a href="https://voyager.jpl.nasa.gov/" target="_blank" rel="noopener">voyager.jpl.nasa.gov</a></p>`
  },
  {
    id:4,
    title:'Pillars of Creation',
    category:'Images',
    date:'1995-04-01',
    image:'assets/pillarsofcreation.jpg',
    summary:'Iconic Hubble image showing star-forming pillars in the Eagle Nebula.',
    credits: 'NASA / ESA / Hubble Heritage Team',
    location: 'Eagle Nebula (M16)',
    body: `<p class="entry-summary">The "Pillars of Creation" is a famous Hubble image capturing towering columns of interstellar gas and dust in the Eagle Nebula (M16). The structures are stellar nurseries where new stars are forming within dense pockets of gas.</p>
      <h3>Image details</h3>
      <div style="padding-left:0;">
        <p><strong>Observatory:</strong> Hubble Space Telescope</p>
        <p><strong>Date:</strong> 1995 (original release)</p>
        <p><strong>Region:</strong> Eagle Nebula (M16)</p>
      </div>
      <h3>Significance</h3>
      <p>The image provided an evocative view of star formation processes and became one of the most recognized astronomical photographs in public outreach, inspiring study and further high-resolution observations.</p>
      <p class="entry-credits">Credits: NASA / ESA / Hubble Heritage Team</p>
      <p>Learn more and view high-resolution versions: <a href="https://hubblesite.org/" target="_blank" rel="noopener">hubblesite.org</a></p>`
  },
  {
    id:5,
    title:'Cosmic Microwave Background Map',
    category:'Data',
    date:'2003-02-11',
    image:'assets/cosmicmicrowavebackground.jpg',
    summary:'WMAP delivered a precise map of the early universe\'s temperature fluctuations.',
    mission: 'Wilkinson Microwave Anisotropy Probe (WMAP)',
    agency: 'NASA',
    credits: 'NASA / WMAP Team',
    body: `<p class="entry-summary">WMAP produced a detailed full-sky map of the cosmic microwave background (CMB), measuring tiny temperature fluctuations that encode the early universe's conditions and composition.</p>
      <h3>Mission details</h3>
      <div style="padding-left:0;">
        <p><strong>Mission:</strong> Wilkinson Microwave Anisotropy Probe (WMAP)</p>
        <p><strong>Launch:</strong> 2001</p>
        <p><strong>Primary results:</strong> Precise measurements of the universe's age, composition (dark matter, dark energy, baryons) and geometry</p>
      </div>
      <h3>Significance</h3>
      <p>WMAP's high-precision observations refined cosmological parameters and established the standard cosmological model (ΛCDM) with unprecedented confidence.</p>
      <p class="entry-credits">Credits: NASA / WMAP Team</p>
      <p>Datasets and more: <a href="https://map.gsfc.nasa.gov/" target="_blank" rel="noopener">map.gsfc.nasa.gov</a></p>`
  },
  {
    id:6,
    title:'Mars Perseverance Landing',
    category:'Missions',
    date:'2021-02-18',
    image:'assets/marsperseverancerover.jpg',
    summary:'Perseverance rover landed on Mars to search for signs of ancient life.',
    landing_site: 'Jezero Crater, Mars',
    instruments: 'Mastcam-Z, SuperCam, PIXL, SHERLOC, MOXIE, RIMFAX, MEDA, Ingenuity',
    credits: 'NASA / JPL-Caltech',
    body: `<p class="entry-summary">Perseverance successfully landed in Jezero Crater on 18 February 2021. The rover's primary objectives are to seek signs of past microbial life, characterize the planet's geology and climate, and collect and cache samples for possible return to Earth.</p>
      <h3>Mission highlights</h3>
      <div style="padding-left:0;">
        <p><strong>Landing date:</strong> 18 February 2021</p>
        <p><strong>Landing site:</strong> Jezero Crater</p>
        <p><strong>Primary objectives:</strong> Astrobiology, sample caching, technology demonstration</p>
        <p><strong>Notable tech:</strong> Ingenuity — first powered flight on another planet</p>
      </div>
      <h3>Instruments</h3>
      <p>Mastcam-Z, SuperCam, PIXL, SHERLOC, MOXIE, RIMFAX, MEDA, Ingenuity</p>
      <p class="entry-credits">Credits: NASA / JPL-Caltech</p>
      <p>More information, datasets and high-resolution images: <a href="https://mars.nasa.gov/mars2020/" target="_blank" rel="noopener">mars.nasa.gov/mars2020</a></p>`
  },
];
