import React from 'react';

const SkillCard = ({ title, description,  imageurl, experiences}) => {
  return (
    <div>
       <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg transition-colors duration-300">
      <div className='bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full p-4 mb-4'>
      <img src={imageurl} alt={"Icon"} className="w-8 h-8 object-cover"/>
      </div>
      <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{title}</h2>
      <p className="text-center mb-4 text-gray-600 dark:text-gray-300">{description}</p>
      <div className="mt-auto w-full">
        <h3 className="text-lg text-center font-semibold mb-2 text-gray-800 dark:text-white">Tools/Languages:</h3>
        <div className="flex flex-wrap justify-center">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col items-center mx-2 mb-2">
              <span className="text-xs bg-blue-100 dark:bg-blue-950 px-3 py-1 rounded-lg text-blue-500 dark:text-blue-300">{exp.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

const SkillsSection = () => {
  const skills = [
    {
      title: "Data Analytics",
      description: "Data holds the key to unlocking insights, and I specialize in transforming raw numbers into meaningful narratives. Using tools like Python, SQL, Excel, and Power BI, I analyze trends, identify patterns, and provide data-driven solutions that empower better decision-making. Whether it’s business intelligence, predictive modeling, or exploratory data analysis",
      imageurl: "images/icons/exploration.png",
      experiences: [
        { 
          name: "Excel",
        },
        { 
          name: "Power BI",
        },
        { 
          name: "Tableau",
        },
        { 
          name: "Python",
        },
        { 
          name: "Pandas",
        },
        { 
          name: "Sci-kit Learn",
        },
        { 
          name: "Matplotlib",
        },
        { 
          name: "SQL",
        },
      ]
    },
    {
      title: "GIS Analysis",
      description: "Location data is more than just points on a map—it tells a story. I specialize in GIS Analysis, using tools like ArcGIS, QGIS, and Google Earth to analyze spatial relationships, model geographic patterns, and create visually compelling maps. From environmental assessments to urban planning and infrastructure mapping, I turn geographic data into actionable intelligence.",
      imageurl: "images/icons/location.png",
      experiences: [
        { 
          name: "ArcGIS Pro",
        },
        { 
          name: "ArcGIS Online",
        },
        { 
          name: "QGIS",
        },
        { 
          name: "Google Earth",
        },
        { 
          name: "Rockworks",
        },
        { 
          name: "Georose",
        },
        { 
          name: "Excel",
        },
        { 
          name: "Python",
        },
        { 
          name: "Pandas",
        },
        { 
          name: "SQL",
        }
      ]
    },
  ];

  return (
    <div id='id="projects"' className="container mx-auto px-4 py-8">
        <div className='border-gray-300 dark:border-gray-600 border-b-2 mb-8 pb-2'>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-200">
            What I Do
          </h1>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;