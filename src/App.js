import {
  Button,
  Grid,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import "./App.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState } from "react";
import { Box } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "./actions/index";

const App = () => {
  const [inputFocus, setInputFocus] = useState(false);
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  const listData = useSelector((state) => state.todoReducers.list);

  return (
    <>
      <main>
        <section>
          {/* todo list main part */}
          <Grid
            container
            sx={{
              width: "100vw",
              height: "100vh",
              overflow: "hidden",
              backgroundColor: "#574b90",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* todo list title  */}
            <Box>
              <Typography
                ariant="h1"
                component="div"
                gutterBottom
                sx={{ color: "white", fontWeight: "600", fontSize: "25px" }}
              >
                Add Your List Here 🤟
              </Typography>
            </Box>
            {/* input data part  */}
            <Grid
              sx={{
                width: "300px",
                aspectRatio: 1,
                position: "relative",
                overflow: "hidden",
              }}
              onFocus={() => setInputFocus(true)}
              onBlur={() => setInputFocus(false)}
            >
              <TextField
                sx={{ width: "100%", aspectRatio: 1 }}
                id="standard-basic"
                label="✍ Add Item..."
                variant="standard"
                value={inputData}
                type="search"
                onChange={(e) => setInputData(e.target.value)}
              />
              <Tooltip
                title="Add"
                sx={{
                  position: "absolute",
                  right: "20px",
                  bottom: `${inputFocus ? "0px" : "-50px"}`,
                  transition: "all linear .1s",
                  background: "transparent",
                }}
              >
                <IconButton
                  onClick={() => dispatch(addTodo(inputData), setInputData(""))}
                >
                  <AddCircleIcon sx={{ color: "#546de5" }} />
                </IconButton>
              </Tooltip>
            </Grid>
            {/* show Data  */}
            <Grid sx={{ margin: "20px 0" }}>
              {listData.map((val, key) => {
                const { id, data } = val;
                return (
                  <Box
                    key={id}
                    sx={{
                      width: "300px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      background: "#4834d4",
                      padding: "0 20px",
                      borderRadius: "12px",
                      aspectRatio: 1,
                      margin: "10px 0",
                      boxShadow:
                        "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="h2"
                      sx={{ color: "#ecf0f1" }}
                    >
                      {data}
                    </Typography>
                    <Tooltip title="Delete">
                      <IconButton>
                        <DeleteIcon
                          sx={{ color: "#ecf0f1" }}
                          onClick={() => dispatch(deleteTodo(id))}
                        />
                      </IconButton>
                    </Tooltip>
                  </Box>
                );
              })}
            </Grid>
            {/* delete all data  */}
            <Stack onClick={_=> dispatch(removeTodo())} >
              <Tooltip title="Delete">
                <Button variant="contained">
                  Delete All
                  <IconButton>
                    <DeleteIcon sx={{ color: "#ecf0f1" }} />
                  </IconButton>
                </Button>
              </Tooltip>
            </Stack>
          </Grid>
        </section>
      </main>
    </>
  );
};

export default App;
