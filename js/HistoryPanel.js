/*
 * Den här panelen skulle visa månadenshistorik. 
 */
class HistoryPanel extends Panel {

    _image = ["/images/underkonstruktion.jpg"];

    onLogginClick(){
        this._appObject.setState(APP_STATE_LOGGIN);        
    }

    onBackClick() {
        this._appObject.setState(APP_STATE_START);
    }

    render(html) {
        return html`
        <div>
            <a href="#" click="onLogginClick" class="logoutLblPos">Logga ut</a>
            <font color="orange" size="4" face="Comic Sans MS">Användare : ${this._appObject._currentUser}</font><br/>
            <br>
            <h2>Månadshistorik:</h2>
            <img src="${this._image}" id="image" height="200" width="300"> 
            <br>
            <h4 style="color:red;">Denna sida ska uppdateras när jag lärt mig database :)</h4>
            <br>
            <button click="onBackClick" type="button">Back</button>   
            <br>
            <br>
            <hr>
            </div>
        `
    }
}