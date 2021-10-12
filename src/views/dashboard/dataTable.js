import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Avatar } from '@mui/material';
// import { useDemoData } from '@mui/x-data-grid-generator';

export default function UserDataGrid() {
const columns = [
  // { field: 'avatar', headerName: 'Avatar', width: 80, editable: true },
  { field: 'rank', headerName: 'Rank', type: 'number',width:100 },
  
  { field: 'name', headerName: 'Name', width: 180, editable: true },
  {
    field: 'email',
    headerName: 'Email',
    type: 'email',
    width: 250,
    editable: true,
  },
  {field: "Quest" , headerName: "Quest 1", width: 250, editable: true},
  {field: "Quest_Status" , headerName: "Quest Status", width: 250, editable: true},
  {field: "Quest_Reward" , headerName: "Quest Reward", width: 250, editable: true},
];

const rows = [
  {
    id: 1,
    name: "Lovish Tater",
    rank: 1,
    email: "lovishtater@gmail.com",
    lastLogin: "8/9/2021",
  },
  {
    id: 2,
    name: "Rishi Goyal",
    rank: 3,
    email: "LegendaryRishigoyal@gmail.com",
    lastLogin: "8/9/2021",
  },
  {
    id: 3,
    name: "Yuvraj Dagur",
    rank: 2,
    email: "Yuvrajdagur@gmail.com",
    lastLogin: "8/9/2021",
  },
  {
    id: 4,
    name: "Ridhvi ",
    rank: 4,
    email: "ridhvi@gmail.com",
    lastLogin: "8/9/2021",
  },
  {
    id: 5,
    name: "Nitin",
    rank: 6,
    email: "nitin@gmail.com",
    lastLogin: "8/9/2021",
  },
  {
    id: 6,
    name: "Lovish Tater sir",
    rank: 8,
    email: "lovishtater@gmail.com",
    lastLogin: "8/9/2021",
  },
  {
    id: 7,
    name: "Rishi Goyal sir",
    rank: 54,
    email: "LegendaryRishigoyal@gmail.com",
    lastLogin: "8/9/2021",
  },
  {
    id: 8,
    name: "Yuvraj Dagur sir",
    rank: 34,
    email: "Yuvrajdagur@gmail.com",
    lastLogin: "8/9/2021",
  },
  {
    id: 9,
    name: "Ridhvi mam",
    rank: 23,
    email: "ridhvi@gmail.com",
    lastLogin: "8/9/2021",
  },
  {
    id: 10,
    name: "Mukul Tiwari",
    rank: 39,
    email: "mukul@gmail.com",
    lastLogin: "8/9/2021",
  },
];


  const [sortModel, setSortModel] = React.useState([
    {
      field: 'name',
      sort: 'asc',
    },
  ]);

  return (
    <div style={{ margin :"auto" ,height: 500, width: '90%' }}>
      <DataGrid
        columns={columns}
        rows={rows}
        sortModel={sortModel}
        onSortModelChange={(model) => setSortModel(model)}
      />
    </div>
  );
}