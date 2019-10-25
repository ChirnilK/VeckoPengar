/*
 * I den här panelen kan man välja vem som loggar in.
 */

class UserLoggIn extends Panel {

  /* constructor(appObject, taskList, user){
    super(appObject, taskList, user); //anropa superklassens konstruktor
    this._appObject = appObject; //lagra en referens till App-objektet
  } */

  onUserClick1() {
    this._user = 'Ryu';
    this._appObject._currentUser=this._user;
    this._appObject.setState(APP_STATE_START);
  }

  onUserClick2() {
    this._user = 'Taki';
    this._appObject._currentUser=this._user;
    this._appObject.setState(APP_STATE_START);
  }


  render(html, route) {
    return html`
          <div>
            <br>
            <font color="orange" size="5" face="Comic Sans MS">Logga in med</font><br/>
            <br>
            
            <button id=ryu click="onUserClick1" type="button">Ryu</button>
            <button id=taki click="onUserClick2" type="button">Taki</button>
            <br>
            <br>
            <br>
            <br>
            <hr>
          </div>
        `
  }
}


