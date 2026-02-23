const jobsData = [
  {
    id: 1,
    companyName: "AussieTech Solutions",
    position: "Frontend Developer",
    location: "Sydney, Australia",
    type: "Full-time",
    salary: "85,000 AUD",
    description: "Develop modern web applications using React and TypeScript.",
    status: "all"
},
{
    id: 2,
    companyName: "Melbourne Digital",
    position: "Backend Developer",
    location: "Melbourne, Australia",
    type: "Full-time",
    salary: "95,000 AUD",
    description: "Build scalable APIs using Node.js and PostgreSQL.",
    status: "all"
},
{
    id: 3,
    companyName: "Brisbane DataLab",
    position: "Data Analyst",
    location: "Brisbane, Australia",
    type: "Full-time",
    salary: "90,000 AUD",
    description: "Analyze business data and generate insights.",
    status: "all"
},
{
    id: 4,
    companyName: "Perth Cloud Systems",
    position: "Cloud Engineer",
    location: "Perth, Australia",
    type: "Full-time",
    salary: "110,000 AUD",
    description: "Manage AWS and Azure cloud infrastructure.",
    status: "all"
},
{
    id: 5,
    companyName: "Adelaide SoftWorks",
    position: "UI/UX Designer",
    location: "Adelaide, Australia",
    type: "Contract",
    salary: "75,000 AUD",
    description: "Design intuitive digital experiences for clients.",
    status: "all"
},
{
    id: 6,
    companyName: "Canberra SecureIT",
    position: "Cyber Security Specialist",
    location: "Canberra, Australia",
    type: "Full-time",
    salary: "120,000 AUD",
    description: "Ensure network security and threat monitoring.",
    status: "all"
},
{
    id: 7,
    companyName: "Sydney AI Labs",
    position: "AI Engineer",
    location: "Remote (Australia)",
    type: "Remote",
    salary: "130,000 AUD",
    description: "Develop AI-powered enterprise solutions.",
    status: "all"
},
{
    id: 8,
    companyName: "Gold Coast Web",
    position: "Junior Developer",
    location: "Gold Coast, Australia",
    type: "Internship",
    salary: "50,000 AUD",
    description: "Assist in building and maintaining websites.",
    status: "all"
}
];

let currentTab = "all";

function updateDashboard() {
  document.getElementById("totalCount").innerText = jobsData.length;
  document.getElementById("interviewCount").innerText =
    jobsData.filter(j => j.status === "interview").length;
  document.getElementById("rejectedCount").innerText =
    jobsData.filter(j => j.status === "rejected").length;
}

function renderJobs() {
  const container = document.getElementById("jobsContainer");
  container.innerHTML = "";

  let filtered = jobsData.filter(job => {
    if(currentTab === "all") return true;
    return job.status === currentTab;
  });

  document.getElementById("tabCount").innerText = filtered.length + " Jobs";

  if(filtered.length === 0){
    container.innerHTML = `
      <div class="empty">
        <img src="./jobs.png">
        <h3>No jobs available</h3>
        <p>Check back soon for new job opportunities.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(job => {
    const card = document.createElement("div");
    card.className = "job-card";
    card.innerHTML = `
        <div class="h3-and-icon">
            <div>
              <h3>${job.position}</h3> 
              <p><strong>${job.companyName}</strong></p>
            </div>
            <div class="icon">
              <i class="fa-regular fa-trash-can delete"></i>
            </div>
        </div>
        <br/>
        <p>${job.location} . ${job.type} . ${job.salary}</p>

        <h6 class="card-description">${job.description}</h6>

        <div class="buttons">
          <button class="interview">Interview</button>
          <button class="rejected">Rejected</button>
        </div>
        `;

    card.querySelector(".interview").addEventListener("click", () => {
  job.status = "interview";
  updateDashboard();
  renderJobs();
});

   card.querySelector(".rejected").addEventListener("click", () => {
  job.status = "rejected";
  updateDashboard();
  renderJobs();
});

    card.querySelector(".delete").onclick = () => {
      const index = jobsData.findIndex(j => j.id === job.id);
      jobsData.splice(index,1);
      updateDashboard();
      renderJobs();
    };

    container.appendChild(card);
  });
}

document.querySelectorAll(".tab").forEach(tab=>{
  tab.onclick = () => {
    document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
    tab.classList.add("active");
    currentTab = tab.dataset.tab;
    renderJobs();
  }
});

updateDashboard();
renderJobs();