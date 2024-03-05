
  let resume = [
    {
      "Name": "Manikandan",
      "contact details": {
        "email": "manikandank3011@gmail.com",
        "phone no": "8838986135",
        "address": "No-1/754 1st street muthamizh nagar, Kodungaiyur"
      },
      "summary": "Experienced professional with 3 years of non-IT experience at Accenture. Proven ability to deliver results in a dynamic and fast-paced environment. Currently transitioning into the field of MERN stack development with a strong passion for web development.",
      "Experience": [
        {
          "position": "Banking operations associate",
          "company": "Accenture",
          "Location": "chennai",
          "year": "2020 - 2021",
          "responsibility": [
            "-Onboarding new policies and conducting trust documents verification.",
            "- Working on w9 forms and crummy letters.",
            "-Disburse the premiums daily (premium payable)"
          ]
        }
      ],
      "Education": {
        "course": "Mern stack developer",
        "institution": "Guvi",
        "degree": "Bachelor of computer application",
        "Institution": "DG Vaishnav college",
        "Location": "Chennai, India",
        "year of Passed out": "2020"
      },
      "skills": [
        "HTML",
        "CSS",
        "javascript",
        "GIT"
      ]
    }
  ]

// for loop
//let resumae = a.resume;
for(let i=0;i<resume.length;i++)
 {
  console.log(resume[i])
  console.log(resume[i].Name)
  console.log(resume[i].Education.course)
  console.log(resume[i].skills)
 }

const objKeys = Object.keys(resume);
const objValues = Object.values(resume);
console.log(objKeys);
console.log(objValues); 

for (let i = 0; i < objKeys.length; i++) {
  console.log("objKeys", objKeys[i]);
  console.log("objValues", objValues[i]);
  console.log(objValues.Education)
  
}

// For each

resume.forEach((value, index, array) => {
  console.log(index)
  console.log(value)
  console.log(array)
});

objValues.forEach((value, index, array) => {
  console.log(index)
  console.log(value)
  console.log(array)
});

//for in 

for(key in resume){
  //console.log(key)
  console.log(resume[key])
  
  }

  
  //For of arr
for (keys of objKeys) {
  console.log(keys);
}