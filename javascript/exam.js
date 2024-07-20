document.getElementById('dropdown-items').addEventListener('click', function()
 {
    document.getElementById('navMenu').classList.toggle('active');
}
);
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const searchResults = document.getElementById('search-results');

const exams = [
  {
     name: 'UPSC', description: 'Civil Services Examination'
     },
    {
         name: 'MPSC', description: 'Maharashtra Public Service Commission'
    },
  {
     name: 'CDS', description: 'Combined Defence Services' 
    },
  {
     name: 'NDA', description: 'National Defence Academy' 
    },
  {
     name: 'SSC', description: 'Staff Selection Commission' 
    },
  {
     name: 'CU CET', description: 'Common University Entrance Test' 
    },
  { 
    name: 'CAPF', description: 'Central Armed Police Forces'
 },
  {
     name: 'NRA CET', description: 'National Recruitment Agency'
     },
  {
     name: 'RRB', description: 'Railway Recruitment Control Board'
     },
];

const searchExams = () => 
    {
  const searchTerm = searchInput.value.toLowerCase().trim();
  searchResults.innerHTML = '';
  const results = exams.filter(exam => exam.name.toLowerCase().includes(searchTerm));
  if (results.length > 0) 
    {
    results.forEach(result =>
         {
      const resultDiv = document.createElement('div');
      resultDiv.textContent = `${result.name} - ${result.description}`;
      searchResults.appendChild(resultDiv);
    }
);
  }
   else 
   {
    const noResultsDiv = document.createElement('div');
    noResultsDiv.textContent = 'No results found.';
    searchResults.appendChild(noResultsDiv);
  }
  searchInput.value = '';
};

searchBtn.addEventListener('click', searchExams);

searchInput.addEventListener('keydown', (event) => 
    {
  if (event.key === 'Enter')
     {
    searchExams();
  }
}
);
