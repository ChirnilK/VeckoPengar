/*
 * I den här panelen kan användaren välja vad vill göra.
 */

class StartPage extends Panel {

    onLogginClick(){
        this._appObject.setState(APP_STATE_LOGGIN);        
    }
    
    onIncomeClick() {
        this._appObject.setState(APP_STATE_INCOME);
    }

    onOutcomeClick() {
        this._appObject.setState(APP_STATE_OUTCOME);
    }

    onHistoryClick() {
        this._appObject.setState(APP_STATE_HISTORY);
    }

    render(html, route) {
        return html`
            <div>
            <a href="#" click="onLogginClick" class="logoutLblPos">Logga ut</a>
              <font color="orange" size="5" face="Comic Sans MS">Välkommen!</font><br/>
              <br>
              <font color="orange" size="5" face="Comic Sans MS"> ${this._appObject._currentUser}, vad vill du göra idag?</font><br/>
              <br>
              <br>
              <button id=income click="onIncomeClick" type="button">Tjäna</button>
              <button id=outcome click="onOutcomeClick" type="button">Spendera</button>
              <button id=history click="onHistoryClick" type="button">Historik</button>
              <br>
              <br>
              <br>
              <hr>
              </div>
            `
    }
}

