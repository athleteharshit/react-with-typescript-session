// type PersonListProps = {
//   names: {
//     firstName: string;
//     lastName: string;
//   }[];
// };

import { PersonListProps } from "./props-types";

function PersonList({ names }: PersonListProps) {
  return (
    <div>
      {names.map((i, index) => (
        <div key={index}>
          <h1>
            {i.firstName} {i.lastName}
          </h1>
        </div>
      ))}
    </div>
  );
}

export default PersonList;
