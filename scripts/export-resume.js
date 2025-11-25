#!/usr/bin/env node

// This script exports a printable one-page resume HTML from the profile data
const fs = require('fs');
const path = require('path');

const profilePath = path.join(__dirname, '../src/data/profile.json');
const profile = JSON.parse(fs.readFileSync(profilePath, 'utf-8'));

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${profile.name} - Resume</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333;
      background: white;
      padding: 20px;
    }

    @media print {
      body { padding: 0; }
      .page-break { page-break-after: always; }
    }

    .container {
      max-width: 8.5in;
      height: 11in;
      margin: 0 auto;
      padding: 0.5in;
      background: white;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }

    header {
      border-bottom: 3px solid #7e22ce;
      margin-bottom: 12px;
      padding-bottom: 8px;
    }

    h1 {
      font-size: 24px;
      margin-bottom: 4px;
      color: #7e22ce;
    }

    .subtitle {
      font-size: 12px;
      color: #666;
      margin-bottom: 4px;
    }

    .contact-info {
      font-size: 10px;
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      margin-top: 4px;
    }

    .contact-info a {
      color: #7e22ce;
      text-decoration: none;
    }

    section {
      margin-bottom: 10px;
    }

    h2 {
      font-size: 13px;
      font-weight: bold;
      background: #f3ebff;
      padding: 4px 8px;
      margin-bottom: 6px;
      border-left: 3px solid #7e22ce;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .entry {
      margin-bottom: 8px;
      font-size: 11px;
    }

    .entry-header {
      display: flex;
      justify-content: space-between;
      font-weight: bold;
      margin-bottom: 2px;
    }

    .entry-subheader {
      color: #7e22ce;
      font-size: 10px;
      margin-bottom: 2px;
    }

    ul {
      margin-left: 16px;
      margin-top: 2px;
    }

    li {
      margin-bottom: 2px;
      font-size: 10px;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      font-size: 10px;
    }

    .skill-category {
      margin-bottom: 4px;
    }

    .skill-category-title {
      font-weight: bold;
      color: #7e22ce;
      margin-bottom: 2px;
    }

    .skill-item {
      display: inline-block;
      background: #f3ebff;
      padding: 2px 6px;
      margin-right: 4px;
      margin-bottom: 2px;
      border-radius: 3px;
      font-size: 9px;
    }

    .cert {
      font-size: 10px;
      margin-bottom: 4px;
      display: flex;
      justify-content: space-between;
    }

    .cert-name {
      font-weight: bold;
    }

    .cert-issuer {
      color: #666;
      font-size: 9px;
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <h1>${profile.name}</h1>
      <div class="subtitle">${profile.headline}</div>
      <div class="contact-info">
        <span>${profile.email}</span>
        <span>${profile.phone}</span>
        <a href="${profile.social.github}" target="_blank">GitHub</a>
        <a href="${profile.social.linkedin}" target="_blank">LinkedIn</a>
      </div>
    </header>

    <section>
      <h2>Professional Summary</h2>
      <p style="font-size: 10px; line-height: 1.4;">${profile.summary}</p>
    </section>

    <section>
      <h2>Experience</h2>
      ${profile.experiences.map(exp => `
        <div class="entry">
          <div class="entry-header">
            <span>${exp.role}</span>
            <span>${exp.startDate} - ${exp.endDate}</span>
          </div>
          <div class="entry-subheader">${exp.company} · ${exp.location}</div>
          <ul>
            ${exp.bullets.map(b => `<li>${b}</li>`).join('')}
          </ul>
        </div>
      `).join('')}
    </section>

    <section>
      <h2>Education</h2>
      ${profile.education.map(edu => `
        <div class="entry">
          <div class="entry-header">
            <span>${edu.degree}</span>
            <span>${edu.startDate} - ${edu.endDate}</span>
          </div>
          <div class="entry-subheader">${edu.institution} · CGPA: ${edu.cgpa}</div>
          <div style="font-size: 10px;"><strong>Specialization:</strong> ${edu.specialization}</div>
        </div>
      `).join('')}
    </section>

    <section>
      <h2>Skills</h2>
      <div class="skills-grid">
        ${Object.entries(profile.skills).map(([key, skills]) => `
          <div class="skill-category">
            <div class="skill-category-title">${key.replace(/_/g, ' ')}</div>
            <div>
              ${skills.map(s => `<span class="skill-item">${s}</span>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    <section>
      <h2>Certifications</h2>
      ${profile.certifications.map(cert => `
        <div class="cert">
          <span class="cert-name">${cert.name}</span>
          <span class="cert-issuer">${cert.issuer}</span>
        </div>
      `).join('')}
    </section>
  </div>
</body>
</html>
`;

const outputPath = path.join(__dirname, '../public/resume.html');
fs.writeFileSync(outputPath, html);
console.log(`✓ Resume exported to ${outputPath}`);
