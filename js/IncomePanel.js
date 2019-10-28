/*
 * I den här panelen kan användare insätta pengar till sitt konto.
 */
class IncomePanel extends Panel {
    _status = "<p>Var snäll och fill i alla fälten. <br> Du får trycka Månads knappen en gång i månaden då bestämmer datorn din månadspeng. Lycka till!</p>";
    _points = 0;


    //När vi klickar på Logga ut knappen då flyttar det till LoggIn sida
    onLogginClick(){
        this._appObject.setState(APP_STATE_LOGGIN);        
    }

    //När vi klickar på Add knappen...
    onAddTaskClick() {
        if (this._task == '' || this._date == '' || this._pris == '') {
            this._status = `<p style="color:red;">saknar information i en/flera fält.</p>`
        }
        else {
            this._taskList.add(new Task(this._date, this._task, this._pris));  
            this._status = `<p style="color:green;">Informationen har sparats!</p>`
            console.log(this._taskList);            
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

    //När vi klickar på Månads knappen, då bestämmer datorn slumpvis månadspeng mellan 30-100kr. 
    onMånadPengClick() {
        this._points = Math.floor(Math.random()*70+30);
        if (this._points>85){
            this._status = `<p style="color:green;">Grattis!! Din Månadspeng är ${this._points} kr!</p>`
        }
        else {
            this._status = `<p style="color:green;">Din Månadspeng är ${this._points} kr!</p>`
        }
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
                    <input id="date" name="date" type="date" bind="_date" style='width:250px'; placeholder="yyyy-mm-dd">
                </li>
                <br>
                <li class="task">
                    <label for="task">Uppgift :</label>
                    <select name="task" bind="_task" style='width:250px' placeholder="Välj en uppgift">
                    <option value="Dammsuga">Dammsuga</option>
                    <option value="Diskmaskin">Plocka ur diskmaskinen</option>
                    <option value="Sopor">Gå och kasta sopor</option>
                    <option value="Sortera tvätten">Sortera tvätten</option>
                    <option value="Ingen skärm dag">En 'Ingen skärm' dag</option>
                    <option value="Panta">Panta</option>
                    <option value="Månadspeng">Månadspeng</option>
                    <option value="Present">Present</option>
                    </select>
                </li>
            <br>
                <li class="pris">
                    <label for ="pris"> Belopp :</label>
                    <input id="pris" type ="text"  bind="_pris" style='width:250px' placeholder="kr">
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
            <button click="onMånadPengClick" id="lön" type="button">Månad</button>
        </div>
        ${this._status}
        <h4>${this._taskList}</h4>
        </div>
        <br>
        <br>
        <hr>
        `
    }
}
