console.log("app.js is running");

///  JSX - JavaScript XML


// run live-server in terminal
// live-server public/
// run babel in terminal
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

const app = {
  title:'This is the Title',
  subtitle:'subtitle fight lol',
  options: []
};


const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
  e.target.elements.option.value = "";
  }
  renderOptionsApp();
};

const removeAll = () => {
  app.options = [];
  renderOptionsApp();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
  console.log(randomNum);
}

const appRoot = document.getElementById('app')

// const numbers = [55, 101, 1000];

const renderOptionsApp = () => {
  let template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I do?</button>
      <button onClick={removeAll}>Remove All</button>


      <ol>
        {
          app.options.map((option) => {
          return <li key={option}>{option}</li>;
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
      <input type="text" name ="option" />
      <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

renderOptionsApp();
