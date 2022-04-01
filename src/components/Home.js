import React from 'react'
import { TextField, Button } from '@material-ui/core'
import "../styles/Home.scss";
const Home = () => {
  return (
    <div className="MainContainer">
    <div className="SubContainer">
      <div className="Box1">
        <div className="Input-Container">
          <div className="flex-containt">
            <TextField
              fullWidth
              id="UserName"
              name="UserName"
              placeholder="UserName"
              variant="outlined"
              size="small"
            />
          </div>
          <div className="flex-containt">
            <TextField
              fullWidth
              id="Age"
              name="Age"
              placeholder="Age"
              variant="outlined"
              size="small"
            />
          </div>
          <div className="flex-button">
            <Button
              variant="contained"
              color="secondary"
             
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
      <div className="Box2">
        {/* {this.state.Information.map(function (data, index) {
          return (
            <div key={index} className="data-flex">
              <div className="UserID">{data.userID}</div>
              <div className="UserName">{data.userName}</div>
              <div className="Age">{data.age}</div>
              <div className="Update">
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => {
                 
                  }}
                >
                  <EditIcon />
                </Button>
              </div>
              <div className="Delete">
                <Button
                  variant="outlined"
                  onClick={() => {
                   
                  }}
                >
                  <DeleteIcon />
                </Button>
              </div>
            </div>
          )
        })} */}
      </div>
    </div>
  </div>
)

}

export default Home