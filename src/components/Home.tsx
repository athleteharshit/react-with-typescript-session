import { makeStyles, createStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import axios from "axios";
import { useCallback, useState } from "react";
import Button from "./learingProps/Button";
import Container from "./learingProps/Container";
import Greet from "./learingProps/Greet";
import Heading from "./learingProps/Heading";
import HeadingParent from "./learingProps/HeadingParent";
import Input from "./learingProps/Input";
import Person from "./learingProps/Person";
import PersonList from "./learingProps/PersonList";
import Status from "./learingProps/Status";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: "center",
    },
    heading: {
      color: theme.palette.primary.main,
    },
  })
);

const name = {
  firstName: "Harshit",
  lastName: "gupta",
};

const names = [
  {
    firstName: "Harshit",
    lastName: "gupta",
  },
  {
    firstName: "Harshit Two",
    lastName: "gupta",
  },
  {
    firstName: "Harshit Three",
    lastName: "gupta",
  },
];

function Home() {
  const classes = useStyles();
  //   const [id, setId] = useState(2);

  // const handleClick = useCallback(async () => {
  //   const data = await axios.get(
  //     `https://jsonplaceholder.typicode.com/posts/${id}`
  //   );
  //   console.log(data);
  // }, [id]);

  return (
    <div className={classes.root}>
      <h1 className={classes.heading}>React TypeScript</h1>
      {/* <Greet name="Harshit gupta" message={50} isLogged={true} /> */}
      {/* <Person name={name} /> */}
      {/* <PersonList names={names} /> */}
      {/* <Status status="loading" /> */}
      {/* <Heading>I am heading</Heading> */}
      {/* <HeadingParent>
        <Heading>I am children heading</Heading>
      </HeadingParent> */}
      {/* ? oprional parmeter */}
      {/* <Button handleClick={handleClick} /> */}
      {/* <Input value="" handleChange={(e) => console.log(e)} /> */}
      {/* <Container styles={{ border: "1px solid red", background: "pink" }} /> */}
    </div>
  );
}

export default Home;

// task
// restrict props
// component props

// (event: React.MouseEvent<HTMLButtonElement>) => void;
