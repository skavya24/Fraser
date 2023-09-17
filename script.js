function getId(id) {
  return document.getElementById(id);
}

function whichUni(input){
  let university = " "
  let tuition = 0
  if(input >= 2120 && input < 2254){
    university = "Univeristy of Western Ontario: $2,120"
  } else if(input >= 2254 && input < 6210){
    university = "Univeristy of Waterloo: $2,254"
  } else if(input >= 6210 && input < 7185){
    university = "University of Toronto - Mississauaga Campus:  $6,210"
  } else if(input == 7185){
    university = "Queen's University: $7,185.77"
  }
  return university;
}

function getUniversity(){
  const value = getId('tuitionSlider').value
  const intVal = parseInt(value)
  const finalVal = whichUni(intVal)
  getId('uniInfo').innerHTML = finalVal;
}

function toggleButton(){
  update.innerHTML = '“Best Biostatistics Courses &amp; Certifications [2022].” Coursera, https://www.coursera.org/courses?query=biostatistics. <br><br> “Biostatistician Demographics and Statistics [2022]: Number of Biostatisticians in the US.” Biostatistician Demographics and Statistics [2022]: Number Of Biostatisticians In The US, 9 Sept. 2022, https://www.zippia.com/biostatistician-jobs/demographics/. <br><br> “Biostatistician in Canada: Labour Market Facts and Figures - Job Bank.” Biostatistician in Canada | Labour Market Facts and Figures - Job Bank, Government of Canada / Gouvernement Du Canada, 6 Nov. 2022, https://www.jobbank.gc.ca/marketreport/summary-occupation/5442/ca. <br><br> “Biostatistician in Ontario: Job Prospects - Job Bank.” Biostatistician in Ontario | Job Prospects - Job Bank, Government of Canada / Gouvernement Du Canada, 6 Nov. 2022, https://www.jobbank.gc.ca/marketreport/outlook-occupation/5442/ON. <br><br> “Home.” Global Brigades, 22 Nov. 2022, https://www.globalbrigades.org/. <br><br> “Home.” University of Waterloo, 17 May 2022, https://uwaterloo.ca/. <br><br> “Queen&#x27s University.” Home | Queen&#x27s University, https://www.queensu.ca/. <br><br> Salary: Biostatistician (May, 2022) | Glassdoor. https://www.glassdoor.com/Salaries/us-biostatistician-salary-SRCH_IL.0,2_IN1_KO3,18_IP3.htm. <br><br> Schulich School of Medicine &amp; Dentistry - Western University, https://www.schulich.uwo.ca/. <br><br> “Statistical Society of Canada.” Biostatistician | Statistical Society of Canada, https://ssc.ca/en/job/public-health-ontario/biostatistician. <br><br> “Top Biostatistics Courses Online - Updated [November 2022].” Udemy, https://www.udemy.com/topic/biostatistics/. <br><br> “University of Toronto.” Department of Statistical Sciences, https://www.statistics.utoronto.ca/. '
}