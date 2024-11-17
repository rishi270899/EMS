import React from 'react'



const employees = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "UI Design Update",
          "description": "Update the main dashboard design to include new features.",
          "taskDate": "2024-11-18",
          "category": "Design"
        },
        {
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Bug Fixes",
          "description": "Resolve critical bugs reported in the application.",
          "taskDate": "2024-11-20",
          "category": "Development"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Team Meeting Preparation",
          "description": "Prepare the agenda for the weekly team meeting.",
          "taskDate": "2024-11-19",
          "category": "Management"
        }
      ]
    },
    {
      "id": 2,
      "email": "john.doe@example.com",
      "password": "password123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Content Writing",
          "description": "Write a blog post about the latest industry trends.",
          "taskDate": "2024-11-18",
          "category": "Content"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Sales Report",
          "description": "Generate the quarterly sales report for review.",
          "taskDate": "2024-11-15",
          "category": "Sales"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "System Audit",
          "description": "Conduct a security audit of the internal system.",
          "taskDate": "2024-11-12",
          "category": "IT"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Social Media Campaign",
          "description": "Plan and execute a campaign for Black Friday.",
          "taskDate": "2024-11-22",
          "category": "Marketing"
        }
      ]
    },
    {
      "id": 3,
      "email": "jane.smith@example.com",
      "password": "securepassword",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Database Optimization",
          "description": "Optimize the database queries to reduce load times.",
          "taskDate": "2024-11-19",
          "category": "Development"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Team Onboarding",
          "description": "Onboard new team members and provide training.",
          "taskDate": "2024-11-14",
          "category": "HR"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "Server Downtime Analysis",
          "description": "Analyze the cause of recent server downtime.",
          "taskDate": "2024-11-13",
          "category": "IT"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "Customer Survey",
          "description": "Conduct a survey to gather customer feedback.",
          "taskDate": "2024-11-21",
          "category": "Customer Service"
        }
      ]
    },
    {
      "id": 4,
      "email": "alex.jones@example.com",
      "password": "alexpass123",
      "tasks": [
        {
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Frontend Component Development",
          "description": "Develop reusable components for the frontend.",
          "taskDate": "2024-11-20",
          "category": "Development"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "Weekly Sync-up",
          "description": "Attend the weekly project sync-up meeting.",
          "taskDate": "2024-11-18",
          "category": "Management"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "App Testing",
          "description": "Conduct end-to-end testing of the mobile app.",
          "taskDate": "2024-11-16",
          "category": "QA"
        }
      ]
    },
    {
      "id": 5,
      "email": "michael.brown@example.com",
      "password": "michael2024",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Marketing Plan Draft",
          "description": "Draft a marketing plan for Q1 2025.",
          "taskDate": "2024-11-23",
          "category": "Marketing"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Product Presentation",
          "description": "Prepare a presentation for the new product launch.",
          "taskDate": "2024-11-17",
          "category": "Sales"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "Code Review",
          "description": "Review the codebase for the new feature implementation.",
          "taskDate": "2024-11-18",
          "category": "Development"
        }
      ]
    }
  ]
  
  const admin = [{
    "id":1,
    "email":"admin@example.com",
    "password":"1234"
  }];

  export const setLocalStorage = ()=> {
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
    
  }
  export const getLocalStorage = ()=> {
   
   const employees =  JSON.parse(localStorage.getItem('employees'))
   const admin = JSON.parse(localStorage.getItem('admin'))
   console.log(employees, admin);
   

  }

const LocalStorage = () => {
  return (
    <div>LocalStorage</div>
  )
}

export default LocalStorage