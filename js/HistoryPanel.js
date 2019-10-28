/*
 * Den här panelen skulle visa månadenshistorik. 
 */
class HistoryPanel extends Panel {

    _image = ["/images/underkonstruktion.jpg"];   //konstruktions bild


    //När vi klickar på Logga ut knappen då flyttar det till LoggIn sida
    onLogginClick(){
        this._appObject.setState(APP_STATE_LOGGIN);        
    }

    //När vi klickar på Back knappen då flyttar det till StartPage sida
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
            ${this._taskList}
            <img src="${this._image}" id="image" height="200" width="300"> 
            <br>
            <h4 style="color:red;">Denna sida ska uppdateras när jag lärt mig mer :)</h4>
            <br>
            <button click="onBackClick" type="button">Back</button>   
            <br>
            <br>
            <hr>
            </div>
        `
    }
}