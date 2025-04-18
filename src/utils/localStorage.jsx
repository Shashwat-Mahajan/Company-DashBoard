const employees = [
  {
    "id": "emp001",
    "name": "Aarav Sharma",
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
        "New Task": false,
        "Completed": true,
        "Failed": false,
        "Task Title": "Fix bug",
        "Task Description": "Fix the login issue on mobile view.",
        "Task Date": "2025-04-21",
        "Category": "Development"
      },
      {
        "Active": false,
        "New Task": true,
        "Completed": false,
        "Failed": false,
        "Task Title": "Write docs",
        "Task Description": "Document the user authentication module.",
        "Task Date": "2025-04-24",
        "Category": "Documentation"
      },
      {
        "Active": true,
        "New Task": true,
        "Completed": false,
        "Failed": false,
        "Task Title": "Test module",
        "Task Description": "Run unit tests for the new payment system.",
        "Task Date": "2025-04-26",
        "Category": "Testing"
      }
    ]
  },
  {
    "id": "emp002",
    "name": "Riya Verma",
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
        "New Task": false,
        "Completed": true,
        "Failed": false,
        "Task Title": "Update UI",
        "Task Description": "Revamp the dashboard design.",
        "Task Date": "2025-04-22",
        "Category": "Design"
      },
      {
        "Active": true,
        "New Task": true,
        "Completed": false,
        "Failed": false,
        "Task Title": "Research tech",
        "Task Description": "Explore new deployment pipelines.",
        "Task Date": "2025-04-25",
        "Category": "Research"
      },
      {
        "Active": false,
        "New Task": false,
        "Completed": false,
        "Failed": true,
        "Task Title": "Fix bug",
        "Task Description": "Resolve 404 errors on production.",
        "Task Date": "2025-04-27",
        "Category": "Development"
      },
      {
        "Active": true,
        "New Task": false,
        "Completed": false,
        "Failed": false,
        "Task Title": "Add feature",
        "Task Description": "Implement dark mode toggle.",
        "Task Date": "2025-04-28",
        "Category": "Development"
      }
    ]
  },
  {
    "id": "emp003",
    "name": "Kunal Joshi",
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
        "New Task": true,
        "Completed": false,
        "Failed": false,
        "Task Title": "Refactor code",
        "Task Description": "Clean up unused functions.",
        "Task Date": "2025-04-22",
        "Category": "Development"
      },
      {
        "Active": false,
        "New Task": false,
        "Completed": true,
        "Failed": false,
        "Task Title": "Test module",
        "Task Description": "Run regression tests on checkout process.",
        "Task Date": "2025-04-23",
        "Category": "Testing"
      },
      {
        "Active": false,
        "New Task": true,
        "Completed": false,
        "Failed": true,
        "Task Title": "Write docs",
        "Task Description": "API endpoint descriptions are outdated.",
        "Task Date": "2025-04-29",
        "Category": "Documentation"
      },
      {
        "Active": true,
        "New Task": false,
        "Completed": false,
        "Failed": false,
        "Task Title": "Research tech",
        "Task Description": "Investigate integrating AI tools.",
        "Task Date": "2025-05-01",
        "Category": "Research"
      }
    ]
  },
  {
    "id": "emp004",
    "name": "Sneha Iyer",
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
        "New Task": true,
        "Completed": false,
        "Failed": false,
        "Task Title": "Add feature",
        "Task Description": "Enable multi-language support.",
        "Task Date": "2025-04-20",
        "Category": "Development"
      },
      {
        "Active": false,
        "New Task": false,
        "Completed": false,
        "Failed": true,
        "Task Title": "Fix bug",
        "Task Description": "Resolve session timeout inconsistencies.",
        "Task Date": "2025-04-21",
        "Category": "Development"
      },
      {
        "Active": true,
        "New Task": false,
        "Completed": true,
        "Failed": false,
        "Task Title": "Write docs",
        "Task Description": "Onboarding guide for new developers.",
        "Task Date": "2025-04-25",
        "Category": "Documentation"
      }
    ]
  },
  {
    "id": "emp005",
    "name": "Vivaan Mehta",
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
        "New Task": true,
        "Completed": false,
        "Failed": false,
        "Task Title": "Fix bug",
        "Task Description": "Crash on logout when session expired.",
        "Task Date": "2025-04-20",
        "Category": "Development"
      },
      {
        "Active": false,
        "New Task": false,
        "Completed": false,
        "Failed": true,
        "Task Title": "Update UI",
        "Task Description": "Improve accessibility in settings page.",
        "Task Date": "2025-04-23",
        "Category": "Design"
      },
      {
        "Active": true,
        "New Task": false,
        "Completed": true,
        "Failed": false,
        "Task Title": "Test module",
        "Task Description": "Write E2E tests for cart functionality.",
        "Task Date": "2025-04-30",
        "Category": "Testing"
      },
      {
        "Active": false,
        "New Task": true,
        "Completed": false,
        "Failed": false,
        "Task Title": "Refactor code",
        "Task Description": "Break monolithic file into modules.",
        "Task Date": "2025-05-01",
        "Category": "Development"
      }
    ]
  }
];


const admin = [{
    "id": 1,
    "password": "123",
    "email": "admin1@example.com"
}]  

export const setLocalStorage = ()=>{
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getlocalStorage = ()=>{
    const employee = JSON.parse(localStorage.getItem('employees')); 
    const admin = JSON.parse(localStorage.getItem('admin'));
    return {employees,admin};
}