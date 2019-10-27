/*
 * I den här panelen kan man välja vem som loggar in.
 */

class UserLoggIn extends Panel {

  //när Ryu knappen klicks då blir currectUser Ryu sen flyttar sidan till StartPage.
  onUserClick1() {
    this._user = 'Ryu';
    this._appObject._currentUser=this._user;
    this._appObject.setState(APP_STATE_START);
  }

   //när Taki knappen klicks då blir currectUser Taki sen flyttar sidan till StartPage.
  onUserClick2() {
    this._user = 'Taki';
    this._appObject._currentUser=this._user;
    this._appObject.setState(APP_STATE_START);
  }


  render(html, route) {
    return html`
          <div>
            <br>
            <font color="orange" size="5" face="Comic Sans MS">Användare</font><br/>
            <br>
            
            <button id=ryu click="onUserClick1" type="button">Ryu</button>
            <button id=taki click="onUserClick2" type="button">Taki</button>
            <br>
            <br>
            <br>
            <hr>
          </div>
        `
  }
}


