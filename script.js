// script.ts
document.addEventListener("DOMContentLoaded", function () {
    // Select the button and the section to toggle
    var toggleSkillButton = document.getElementById("toggleSkill");
    var skillSection = document.getElementById("skill");
    // Check if both elements exist
    if (toggleSkillButton && skillSection) {
        // Add click event listener to the button
        toggleSkillButton.addEventListener("click", function () {
            // Toggle visibility of the skills section
            if (skillSection.style.display === "none") {
                skillSection.style.display = "block";
                toggleSkillButton.textContent = "Hide Skill";
            }
            else {
                skillSection.style.display = "none";
                toggleSkillButton.textContent = "Show Skill";
            }
        });
    }
});
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resume-form');
    var output = document.getElementById('resume-output');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skill = document.getElementById('skill').value;
        var resumeHTML = "\n          <h2>".concat(name, "</h2>\n          <p>Email: ").concat(email, "</p>\n          <h3>Education</h3>\n          <p>").concat(education, "</p>\n          <h3>Work Experience</h3>\n          <p>").concat(experience, "</p>\n          <h3>Skill</h3>\n          <p>").concat(skill, "</p>\n      ");
        output.innerHTML = resumeHTML;
    });
});
