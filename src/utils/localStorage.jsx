const employees = [
  {
    "id": "emp001",
    "name": "Aarav",
    "password": "123",
    "email": "emp001@example.com",
    "taskCount": {
      "active": 2,
      "new": 2,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "Active": true,
        "NewTask": false,
        "Completed": true,
        "Failed": false,
        "TaskTitle": "Fix bug",
        "TaskDescription": "Fix the login issue on mobile view.",
        "TaskDate": "2025-04-21",
        "Category": "Development"
      },
      {
        "Active": false,
        "NewTask": true,
        "Completed": false,
        "Failed": false,
        "TaskTitle": "Write docs",
        "TaskDescription": "Document the user authentication module.",
        "TaskDate": "2025-04-24",
        "Category": "Documentation"
      },
      {
        "Active": true,
        "NewTask": true,
        "Completed": false,
        "Failed": false,
        "TaskTitle": "Test module",
        "TaskDescription": "Run unit tests for the new payment system.",
        "TaskDate": "2025-04-26",
        "Category": "Testing"
      }
    ]
  },
  {
    "id": "emp002",
    "name": "Riya",
    "password": "123",
    "email": "emp002@example.com",
    "taskCount": {
      "active": 2,
      "new": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "Active": false,
        "NewTask": false,
        "Completed": true,
        "Failed": false,
        "TaskTitle": "Update UI",
        "TaskDescription": "Revamp the dashboard design.",
        "TaskDate": "2025-04-22",
        "Category": "Design"
      },
      {
        "Active": true,
        "NewTask": true,
        "Completed": false,
        "Failed": false,
        "TaskTitle": "Research tech",
        "TaskDescription": "Explore new deployment pipelines.",
        "TaskDate": "2025-04-25",
        "Category": "Research"
      },
      {
        "Active": false,
        "NewTask": false,
        "Completed": false,
        "Failed": true,
        "TaskTitle": "Fix bug",
        "TaskDescription": "Resolve 404 errors on production.",
        "TaskDate": "2025-04-27",
        "Category": "Development"
      },
      {
        "Active": true,
        "NewTask": false,
        "Completed": false,
        "Failed": false,
        "TaskTitle": "Add feature",
        "TaskDescription": "Implement dark mode toggle.",
        "TaskDate": "2025-04-28",
        "Category": "Development"
      }
    ]
  },
  {
    "id": "emp003",
    "name": "Kunal",
    "password": "123",
    "email": "emp003@example.com",
    "taskCount": {
      "active": 2,
      "new": 2,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "Active": true,
        "NewTask": true,
        "Completed": false,
        "Failed": false,
        "TaskTitle": "Refactor code",
        "TaskDescription": "Clean up unused functions.",
        "TaskDate": "2025-04-22",
        "Category": "Development"
      },
      {
        "Active": false,
        "NewTask": false,
        "Completed": true,
        "Failed": false,
        "TaskTitle": "Test module",
        "TaskDescription": "Run regression tests on checkout process.",
        "TaskDate": "2025-04-23",
        "Category": "Testing"
      },
      {
        "Active": false,
        "NewTask": true,
        "Completed": false,
        "Failed": true,
        "TaskTitle": "Write docs",
        "TaskDescription": "API endpoint descriptions are outdated.",
        "TaskDate": "2025-04-29",
        "Category": "Documentation"
      },
      {
        "Active": true,
        "NewTask": false,
        "Completed": false,
        "Failed": false,
        "TaskTitle": "Research tech",
        "TaskDescription": "Investigate integrating AI tools.",
        "TaskDate": "2025-05-01",
        "Category": "Research"
      }
    ]
  },
  {
    "id": "emp004",
    "name": "Sneha",
    "password": "123",
    "email": "emp004@example.com",
    "taskCount": {
      "active": 1,
      "new": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "Active": false,
        "NewTask": true,
        "Completed": false,
        "Failed": false,
        "TaskTitle": "Add feature",
        "TaskDescription": "Enable multi-language support.",
        "TaskDate": "2025-04-20",
        "Category": "Development"
      },
      {
        "Active": false,
        "NewTask": false,
        "Completed": false,
        "Failed": true,
        "TaskTitle": "Fix bug",
        "TaskDescription": "Resolve session timeout inconsistencies.",
        "TaskDate": "2025-04-21",
        "Category": "Development"
      },
      {
        "Active": true,
        "NewTask": false,
        "Completed": true,
        "Failed": false,
        "TaskTitle": "Write docs",
        "TaskDescription": "Onboarding guide for new developers.",
        "TaskDate": "2025-04-25",
        "Category": "Documentation"
      }
    ]
  },
  {
    "id": "emp005",
    "name": "Vivaan",
    "password": "123",
    "email": "emp005@example.com",
    "taskCount": {
      "active": 2,
      "new": 2,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "Active": true,
        "NewTask": true,
        "Completed": false,
        "Failed": false,
        "TaskTitle": "Fix bug",
        "TaskDescription": "Crash on logout when session expired.",
        "TaskDate": "2025-04-20",
        "Category": "Development"
      },
      {
        "Active": false,
        "NewTask": false,
        "Completed": false,
        "Failed": true,
        "TaskTitle": "Update UI",
        "TaskDescription": "Improve accessibility in settings page.",
        "TaskDate": "2025-04-23",
        "Category": "Design"
      },
      {
        "Active": true,
        "NewTask": false,
        "Completed": true,
        "Failed": false,
        "TaskTitle": "Test module",
        "TaskDescription": "Write E2E tests for cart functionality.",
        "TaskDate": "2025-04-30",
        "Category": "Testing"
      },
      {
        "Active": false,
        "NewTask": true,
        "Completed": false,
        "Failed": false,
        "TaskTitle": "Refactor code",
        "TaskDescription": "Break monolithic file into modules.",
        "TaskDate": "2025-05-01",
        "Category": "Development"
      }
    ]
  }
];


const admin = [
  {
    "id": "1",
    "name":"Admin",
    "password": "123",
    "email": "admin1@example.com",
}]  

export const setLocalStorage = ()=>{
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getlocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees')); 
    const admin = JSON.parse(localStorage.getItem('admin'));
    return {employees,admin};
}