//Adding dependencies

const inquirer=require('inquirer');
const Employee = require('./Develop/lib/Employee');
const Manager = require('./Develop/lib/Manager');
const Engineer = require('./Develop/lib/Engineer');
const Intern = require('./Develop/lib/Intern');
const fs =require('fs');
const generateHtml = require('./Develop/util/generateHtml');

//email verify
let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');



//employee objects
const team=[];
const managers=[];
const engg=[];
const interns=[];


//prompt for user info for main menu
function mainMenu(){
    inquirer.prompt(
        {
            name:"menu",
            type:"list",
            choices:['Add the team Manager','Finish building my team']
        }
    ).then(
        answer=>{
            if(answer.menu==='Add the team Manager')
            {
                addManager();
            }
            else
            {
                console.log("Team building process is completed");
                writeToFile("index.html",team);
            }
        }
    )
}
//prompt for user info for manager activities
function managerMenu()
{
    inquirer.prompt([
        {
            name:"managerMenu",
            type:"list",
            choices:['Add the Engineer to the team','Add Intern to the team','Finish building my team']
        }
    ]
    ).then(
        answer=>{
            if(answer.managerMenu==='Add the Engineer to the team')
            {
                addEngineer();
            }
            else if(answer.managerMenu==='Add Intern to the team')
            {
                addIntern();
            }
            else
            {
                console.log("Team building process is completed");
                
                writeToFile("index.html",team);
            }
        }
    )
        
}

//prompt for user info for manager details
function addManager()
{
    inquirer.prompt([
        {
            name:'name',
            type:'input',
            message:'Please enter the Manager name:'
        },
        {
            name:'empId',
            type:'number',
            message:'Please enter the Manager Employee id: (Six digits)'
        },
        {
            name:'email',
            type:'input',
            message:'Please enter Manager Email: (Format: yourname@company.com)'
        },
        {
            name:'officeNumber',
            type:'number',
            message:'Please enter the Manager Office Number: (Format: 4255245432)'
        },
        {
            name:"addMember",
            type:"list",
            choices:['Add the team Members','Finish building my team']
        }
       
    ]).then(
        answer=>{
           
            
            const newManager= new Manager(answer.name,answer.empId,answer.email,answer.officeNumber);
            managers.push(newManager);
            team.push(newManager);
            

            if(answer.addMember==='Add the team Members')
            {
                managerMenu();
            }
            else
            {
                console.log("Team building process is completed");
                writeToFile("index.html",team);
            }
        }
    )
}

//prompt for user info for Engineer details
function addEngineer(){
    inquirer.prompt([
        {
            name:'name',
            type:'input',
            message:'Please enter the Engineer name:'
        },
        {
            name:'empId',
            type:'number',
            message:'Please enter the Engineer Employee id:'
        },
        {
            name:'email',
            type:'input',
            message:'Please enter Engineer Email:'
        },
        {
            name:'github',
            type:'input',
            message:'Please enter the Github username:'
        },
        {
            name:"addMember",
            type:"list",
            choices:['Add the team Members','Finish building my team']
        }
       
    ]).then(
        answer=>{
            console.log(answer);
            const newEngineer= new Engineer(answer.name,answer.empId,answer.email,answer.github);
            engg.push(newEngineer);
            team.push(newEngineer);
            console.log(engg);

            if(answer.addMember==='Add the team Members')
            {
                managerMenu();
            }
            else
            {
                console.log("Team building process is completed");
                writeToFile("index.html",team);
            }
        }
    )
}
//prompt for user ifo for Intern details
function addIntern(){
    inquirer.prompt([
        {
            name:'name',
            type:'input',
            message:'Please enter the Intern name:'
        },
        {
            name:'empId',
            type:'number',
            message:'Please enter the Intern Employee id:'
        },
        {
            name:'email',
            type:'input',
            message:'Please enter Intern Email:'
        },
        {
            name:'school',
            type:'input',
            message:'Please enter the School name:'
        },
        {
            name:"addMember",
            type:"list",
            choices:['Add the team Members','Finish building my team']
        }
       
    ]).then(
        answer=>{
            console.log(answer);
            const newIntern= new Intern(answer.name,answer.empId,answer.email,answer.school);
            interns.push(newIntern);
            team.push(newIntern);
            console.log(interns);
            if(answer.addMember==='Add the team Members')
            {
                managerMenu();
            }
            else
            {
                console.log("Team building process is completed");
                writeToFile("index.html",team);
            }
        }
    )
}

function writeToFile(fileName, data) {  
    const htmldata=generateHtml(data);
   fs.writeFileSync(fileName,htmldata,(err) => err ? console.log(err) : console.log('File Created'));
  }

  
mainMenu();