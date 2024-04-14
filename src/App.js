function App() {
  const get = async () => {
    const res = await fetch("http://localhost:8000/user");
    console.log(res);
  };
  get();
  return <div>Welcome to the frontend</div>;
}

export default App;
