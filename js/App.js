
class App extends Domer {

  _appState = APP_STATE_LOGGIN;
  _user = null;
  _taskList = null;

  constructor() {
    super(); 
    this.setState(APP_STATE_LOGGIN);  //Alltid börjar från UserLoggIn sida
  }


  setState(state) {
    this._appState = state;

    switch (state) {
      case APP_STATE_LOGGIN:
        this._currentPanel = new UserLoggIn(this,this._user);
        break;

      case APP_STATE_START:
        this._currentPanel = new StartPage(this, this._user); //Här användaren kan välja vad man vill göra.
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
        this._currentPanel = new HistoryPanel(this, this._taskList, this._user); //visa månadenshistorik
        break;

    }

  }


  render(html, route) {
    /*
     * this._currentPanel=Beroende på Appens "state" så kommer olika paneler att visas.
     */
    return html`
      <div>
        <font color="orange" size="6" face="Comic Sans MS">e-Plånbok</font><br/>
        <hr>
        ${this._currentPanel}
      </div>
      `
  }
}
new App();