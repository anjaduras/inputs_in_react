import './App.css';

function App() {
  return (
    <div className="App">
      <p>Example 1 - A single input</p>
      <label>First Name
        <input type="text" />
      </label>

      <hr />

      <p>Example 1b - A single input (useRef)</p>
      <form >
        <label >
          Second Name
          <input type="text" name='secondname' />
        </label>
        <button type='submit'>Send</button>
      </form>

      <hr />

      <p>Example 2 - A Controlled Component</p>
      <label >First Name
        <input type="text" />
      </label>

      <hr />

      <p>Example 3 - Multiply Inputs</p>
      <label >First Name
        <input type="text"
          name='firstname'
        // value={}
        />
      </label>
      <br />
      <label >Last Name
        <input type="text"
          name='lastname'
        // value={}
        />
      </label>

      <hr />

      <p>Example 4 - TextArea Input</p>
      <label>
        Bio
        <textarea name="bio" ></textarea>
      </label>
      <br />

      <hr />

      <p>Example 5 - Select option</p>
      <label>
        Favorite Version
        <select name="version"></select>
      </label>

      <hr />

      <p>Example 6 - Radio Buttons</p>
      <form action="">
          Level
          <br />
          <label >
            Acolyte
            <input type="radio"
            name='level'
            value='acolyte' />
          </label>
          <label>
          Master
            <input type="radio"
            name='level'
            value='master' />
          </label>
        
      </form>

      <hr />

<p>Example 7 - Radio Buttons</p>
    <label >
     With hook 1
      <input type="checkbox"
      name='hook1'
     />
    </label>
    <label>
    With hook 2
    <input type="checkbox"
      name='hook2'
     />
    </label>
    </div>
  );
}

export default App;
