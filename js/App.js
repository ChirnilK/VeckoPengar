
class App extends Domer {

  _currentUser = ''; 
  _appState = APP_STATE_LOGGIN;
  _userLogin = new UserLoggIn(this,this._user);
  
  constructor() {
    super(); 
    this.setState(APP_STATE_LOGGIN);  //Alltid börjar med UserLoggIn sida
  }


  setState(state) {
    this._appState = state;

    switch (state) {
      case APP_STATE_LOGGIN:
        this._currentPanel = this._userLogin;     //visar UserLoggIn sidan med _userLogin info  (kolla App.js:6)
        break;

      case APP_STATE_START:
        this._currentPanel = new StartPage(this, this._user); //Här man kan välja vad vill göra.
        break;

      case APP_STATE_INCOME:
        this._taskList = new TaskList();
        this._currentPanel = new IncomePanel(this, this._taskList, this._user); //insättning
        break;

      case APP_STATE_OUTCOME:
        this._taskList = new TaskList();
        this._currentPanel = new OutcomePanel(this, this._taskList, this._user); //Uttag
        break;

      case APP_STATE_HISTORY:
        this._currentPanel = new HistoryPanel(this, this._taskList, this._user); //visa månadshistorik
        break;

    }

  }


  render(html, route) {
    /*
     * this._currentPanel=Beroende på Appens "state" så kommer olika paneler att visas.
     */
    return html`
      <div>
        <font color="orange" size="6" face="Comic Sans MS">e-Plånbokdd</font><br/>
        <br>
        <hr>
        ${this._currentPanel}
        <footer>&copy; 2019 Chiharu</footer>
      </div>
      `
  }
}
new App();