function addExperience() {
    const list = document.getElementById('experience-list');
    const item = document.createElement('div');
    item.className = 'experience-item';
    item.innerHTML = `
        <input type="text" placeholder="Job Title">
        <input type="text" placeholder="Company">
        <input type="text" placeholder="Dates (e.g. 2020-2024)">
        <textarea placeholder="Description"></textarea>
    `;
    list.appendChild(item);
}

function addEducation() {
    const list = document.getElementById('education-list');
    const item = document.createElement('div');
    item.className = 'education-item';
    item.innerHTML = `
        <input type="text" placeholder="Degree">
        <input type="text" placeholder="Institution">
        <input type="text" placeholder="Dates">
    `;
    list.appendChild(item);
}

function generateCV() {
    // Collect data
    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const summary = document.getElementById('summary').value;

    // Experiences
    let experiences = '';
    document.querySelectorAll('.experience-item').forEach(item => {
        const job = item.children[0].value;
        const company = item.children[1].value;
        const dates = item.children[2].value;
        const desc = item.children[3].value;
        if (job || company) {
            experiences += `<h3>${job} at ${company} <span style="font-weight:normal;">(${dates})</span></h3><p>${desc}</p>`;
        }
    });

    // Education
    let education = '';
    document.querySelectorAll('.education-item').forEach(item => {
        const degree = item.children[0].value;
        const institution = item.children[1].value;
        const dates = item.children[2].value;
        if (degree || institution) {
            education += `<li>${degree} - ${institution} (${dates})</li>`;
        }
    });

    // Skills
    const skills = document.getElementById('skills').value.split(',').map(s => s.trim()).filter(s => s);

    // Generate HTML
    const preview = `
        <h1>${name}</h1>
        <h2>${title}</h2>
        <p>${email} | ${phone} | ${address}</p>
        <h2>Summary</h2>
        <p>${summary}</p>
        <h2>Experience</h2>
        ${experiences}
        <h2>Education</h2>
        <ul>${education}</ul>
        <h2>Skills</h2>
        <ul>${skills.map(s => `<li>${s}</li>`).join('')}</ul>
    `;

    document.getElementById('cv-preview').innerHTML = preview;
    document.getElementById('form-section').classList.add('hidden');
    document.getElementById('preview-section').classList.remove('hidden');
}

function backToForm() {
    document.getElementById('preview-section').classList.add('hidden');
    document.getElementById('form-section').classList.remove('hidden');
}

function printCV() {
    window.print();
}
