/*
 * I den här panelen kan man välja vem som loggar in.
 */

class UserLoggIn extends Panel {

  onUserClick1() {
    this._user = 'Ryu';
    this._appObject.setState(APP_STATE_START);
    return this._user;
  }

  onUserClick2() {
    this._user = 'Taki';
    this._appObject.setState(APP_STATE_START);
    return this._user
  }


  render(html, route) {
    return html`
          <div>
            <font color="orange" size="5" face="Comic Sans MS">Logga in med</font><br/>
            <br>
            
            <button id=ryu click="onUserClick1" type="button">Ryu</button>
            <button id=taki click="onUserClick2" type="button">Taki</button>
            <br>
            <br>
            ${this._user}
            <br>
            <hr>
          </div>
        `
  }
}


