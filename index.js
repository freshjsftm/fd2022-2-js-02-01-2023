"use strict";

class Button{
  constructor(){}
  createButton(){}
}
class WinButton extends Button{
  constructor(){super()}
  createButton(){
    //realization at win
  }
}
class UnixButton extends Button{
  constructor(){super()}
  createButton(){
    //realization at unix
  }
}
class MacButton extends Button{
  constructor(){super()}
  createButton(){
    //realization at mac
  }
}

class OSFactory{
  createButton(){}
  createPanel(){}
}
class WinOSFactory extends OSFactory{
  createButton(){
    return new WinButton()
  }
  createPanel(){}
}
class UnixOSFactory extends OSFactory{
  createButton(){
    return new UnixButton()
  }
  createPanel(){}
}
class MacOSFactory extends OSFactory{
  createButton(){
    return new MacButton()
  }
  createPanel(){}
}

class Studio{
  render(OS){   
    switch(OS){
      case 'win':{
        this._factory = new WinOSFactory();
      }
      case 'unix':{
        this._factory = new UnixOSFactory();
      }
      case 'mac':{
        this._factory = new MacOSFactory();
      }
      default: break;
    }
    const button = this._factory.createButton();
    const panel = this._factory.createPanel();
  }
}
