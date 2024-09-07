// script.ts
document.addEventListener("DOMContentLoaded", () => {
  // Select the button and the section to toggle
  const toggleSkillButton = document.getElementById("toggleSkill") as HTMLButtonElement;
  const skillSection = document.getElementById("skill") as HTMLElement;

  // Check if both elements exist
  if (toggleSkillButton && skillSection) {
    // Add click event listener to the button
    toggleSkillButton.addEventListener("click", () => {
      // Toggle visibility of the skills section
      if (skillSection.style.display === "none") {
        skillSection.style.display = "block";
        toggleSkillButton.textContent = "Hide Skill";
      } else {
        skillSection.style.display = "none";
        toggleSkillButton.textContent = "Show Skill";
      }
    });
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('resume-form') as HTMLFormElement;
  const output = document.getElementById('resume-output') as HTMLDivElement;

  form.addEventListener('submit', (event) => {
      event.preventDefault();

      const name = (document.getElementById('name') as HTMLInputElement).value;
      const email = (document.getElementById('email') as HTMLInputElement).value;
      const education = (document.getElementById('education') as HTMLTextAreaElement).value;
      const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
      const skill= (document.getElementById('skill') as HTMLTextAreaElement).value;

      const resumeHTML = `
          <h2>${name}</h2>
          <p>Email: ${email}</p>
          <h3>Education</h3>
          <p>${education}</p>
          <h3>Work Experience</h3>
          <p>${experience}</p>
          <h3>Skill</h3>
          <p>${skill}</p>
      `;

      output.innerHTML = resumeHTML;
  });
});

