// import './App.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';

function App() {

  let handleClick = () => {
    console.log("btn clicked")
  }

  return (
    <>
      <h1>Material UI Demo</h1>

      <Button
        variant="contained"
        onClick={handleClick}
        color="error"
        size="small"
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
      <Alert severity="error">This is an error Alert.</Alert>
    </>
  )
}

export default App
