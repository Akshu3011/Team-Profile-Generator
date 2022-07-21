//Adding dependencies

const inquirer=require('inquirer');
const Employee = require('./Develop/lib/Employee');
const Manager = require('./Develop/lib/Manager');
const Engineer = require('./Develop/lib/Engineer');
const Intern = require('./Develop/lib/Intern');


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
            }
        }
    )
}


function addManager()
{
    inquirer.prompt([
        {
            name:'name',
            type:'input',
            message:'Please enter the manager name:'
        },
        {
            name:'empId',
            type:'number',
            message:'Please enter the manager Employee id:'
        },
        {
            name:'email',
            type:'input',
            message:'Please enter manager Email:'
        },
        {
            name:'officeNumber',
            type:'number',
            message:'Please enter the manager Office Number:'
        }
    ]
    ).then((data) =>{
        console.log(data);
    }

    )
}

mainMenu();