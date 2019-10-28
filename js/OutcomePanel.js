/*
 * I den här panelen kan användare ta ut pengar till sitt konto.
 */
class OutcomePanel extends Panel {

    _status = "<p>Var snäll och fill i alla fälten</p>";


    //När vi klickar på Logga ut knappen då flyttar det till LoggIn sida
    onLogginClick(){
        this._appObject.setState(APP_STATE_LOGGIN);        
    }

    //När vi klickar på Add knappen...
    onAddTaskClick() {
        if (this._task == '' || this._date == '' || this._pris == '') {
            this._status = `<p style="color:red;">saknar information i en/flera fält.</p>`
        }
        //priset måste vara negativ siffror eftersom här gör man "uttag".
        else if(this._pris[0]!='-'){
            this._status = `<p style="color:red;">Du glömde att skriva beloppet med minus tecken</p>` 
        }
        else {
            this._taskList.add(new Task(this._date, this._task, this._pris)); 
            this._status = `<p style="color:green;">Informationen har sparats!</p>`
        }
        //Rensa inputboxarna
        this._task = '';
        this._pris = '';
        this._date = '';
    }

    //När vi klickar på Reset knappen...
    onClearTaskClick() {
        this._taskList.clearAnswers();
        this._status = `<p>Informationen har tagits bort</p>`         
    }

    //När vi klickar på Back knappen...
    onStartClick() {
        this._appObject.setState(APP_STATE_START);
    }

    //När vi klickar på Historik knappen...
    onHistoryClick() {
        this._appObject.setState(APP_STATE_HISTORY);
    }

    render(html) {
        return html`<div>
        <form>
            <font color="orange" size="4" face="Comic Sans MS">Användare : ${this._appObject._currentUser}</font><br/>
            <br>
            <a href="#" click="onLogginClick" class="logoutLblPos">Logga ut</a>
            <ul>
                <li class="date">
                    <label for="date">Datum :</label>
                    <input id="date" name="date" type="date" style='width:250px' bind="_date" placeholder="yyyy-mm-dd">
                </li>
                <br>
                <li class="task">
                    <label for="title">Anledning :</label>
                    <br>
                    <select name="task" bind="_task" style='width:250px' placeholder="Välj en uppgift">
                    <option value="Spel">Spel</option>
                    <option value="Godis">Speciellt godis</option>
                    <option value="Aktivitet">Speciell aktivitet</option>
                    <option value="Present">Present</option>
                    </select>
                    </li>
                <br>
                    <li class="pris">
                        <label for ="pris"> Belopp :</label>
                        <input id="pris" type ="text"  bind="_pris" style='width:250px' placeholder="Skriv ett belopp med minus tecken(-kr) ">
                    </li>
                </ul>
            </form>
            <br>
            <br>
            <div class="box">
                <button click="onAddTaskClick" id="add" type="button">Add</button> 
                <button click="onClearTaskClick" id="clean" type="button">Reset</button>
                <button click="onStartClick" id="back" type="button">Back</button>
                <button click="onHistoryClick" id="send" type="button">Historik</button>
            </div>
            ${this._status}
            <h4>${this._taskList}</h4>
            <br>
            <br>
            <hr>
            </div>
            `
    }
}