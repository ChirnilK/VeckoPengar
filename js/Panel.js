class Panel extends Domer{

    //En panel har referensen till ett appObject, en lista på task och en användare.
    _user = '';
    _taskList= null;
    _appObject = null;


    constructor(appObject, taskList, user){
        super(); //anropa superklassens konstruktor
        this._taskList = taskList;
        this._appObject = appObject; //lagra en referens till App-objektet
        this._user = user;
    }
    /* render(html) {
        return html`
        <div> 
            <h3>${this._user}</h3>
        </div>
        `
    } */
  }