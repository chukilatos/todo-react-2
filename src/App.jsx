import "./App.css";
import ButtonClass from "./components/ButtonClass";
import ButtonFunction from "./components/ButtonFunction";

const App = () => {
  const favoriteFood = ["Burger", "Pizza", "Mie"];

  return (
    <div>
      <h1>Hello React!</h1>
      <p>My favoriteFood</p>

      <ul>
        {favoriteFood.map((food) => {
          return <li key={food}>{food}</li>;
        })}
      </ul>
      <div style={{ margin: "20px", backgroundColor: "red" }}>
        <ButtonClass text="I'm button class from props!" />
        <ButtonFunction tulisan="Im button function from props!" color="blue" />
      </div>
    </div>
  );
};

export default App;
