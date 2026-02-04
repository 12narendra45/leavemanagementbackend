# Leave Management System (MERN Stack)

This project is a simple Leave Management System built as part of a MERN stack assignment.  
It allows employees to apply for leave and allows admins to view all leave requests and update their status.

---

## Tech Stack

- **Frontend:** React.js, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Tools:** Git, Postman  

---

## Features

- Apply for leave with employee details and leave reason  
- View all leave requests in a table  
- Update leave status (Pending / Approved / Rejected)  
- Clean and simple UI  
- REST API based backend  

> Authentication is not implemented as it was not part of the assignment.

---

## API Endpoints

- **POST** `/api/leaves`  
  → Apply for a new leave request  

- **GET** `/api/leaves`  
  → Fetch all leave requests  

- **PUT** `/api/leaves/:id`  
  → Update leave status by ID  

---

## Database Schema (Leave)

- employeeName  
- leaveType  
- startDate  
- endDate  
- reason  
- status (default: Pending)  
- createdAt  

---

## Project Structure

```
Leave-Management-System/
│
├── backend/
├── frontend/
├── screenshots/
├── ui-working-video.mp4
└── README.md
```

---

## How to Run the Project Locally

### Backend
```
cd backend
npm install
npm start
```

Create a `.env` file and add:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### Frontend
```
cd frontend
npm install
npm start
```

---

## Possible Improvements

With more time, I would:
- Add toast notifications and better error handling in the frontend  
- Add protected routes for admin pages  
- Implement JWT-based authentication middleware in the backend  

---

## Demo

- UI screenshots are available in the `screenshots` folder  
- A short UI working demo video is included  


