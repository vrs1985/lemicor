;
'use strict';

    window.onload = () => {
        var App = this;
        this.appModel = new appModel();
        this.appView = new appView(this.appModel);
        this.appCtrl = new appCtrl(this.appModel, this.appView);
      };

// MODEL
    function appModel() {
      // VARIABLES
      let appModel = this;
      this.client_w=document.body.clientWidth;
      this.client_h=document.body.clientHeight;
      this.scr_w=screen.width;
      this.scr_h=screen.height;
      // VARIABLES
      this.init = () => {

      };

      this.toogle = x => {
          $(".header").toggleClass("sticky", (x > this.scr_h));
      };
      this.smoothScroll = e => {
        let classArray = e.split(' ');
        for(var i=0; i< classArray.length; i++)
          switch(classArray[i]){
            case "nav-arrow":
              this.scrollTo(this.scr_h );
              break;
            case "nav-home":
              this.scrollTo(0);
              break;
            case "nav-shop":
              this.scrollTo(this.scr_h * 2);
              break;
            case "nav-shipment":
              this.scrollTo(this.scr_h * 4);
              break;
            case "nav-contact":
              this.scrollTo(this.scr_h * 6);
              break;
            default:
              break;
          }
      };

      this.scrollTo = val => {
        $('body').animate({ scrollTop: val - 50 }, 800);
      };

      this.matchClass = (arrClass, identificator)=>{
        for (var i = 0; i < arrClass.length; i++) {
          if (arrClass[i] === identificator){ return true; }
        }
      };

      this.init();
    };

// VIEW
    function appView(model) {
      let appView = this;
      this.appModel = model;

      this.init = () => {
        this.default();
        if (window.innerWidth < 769) {
          this.ui();
        }
      };
      // set default parameters
      this.default = () => {
          // $('.height').css('height', this.appModel.scr_h + 'px');
      }
      // set default parameters
      this.ui =()=>{
        $('.logo-header').attr('src', '/img/icon_large.png').css({'widht': '200px', 'margin-left': '15px'});
      };

      this.enableMenu = ()=>{
        $('.nav-tab').toggle('slow');
      };

      this.init();
    };

// CONTROLLER
    function appCtrl(model, view) {
      let appCtrl = this;
      this.appModel = model;
      this.appView = view;
//       this.anchor = $('a');

      this.init = () => {
        this.events = new Events(document, this.scroll, this.click);
      };

      this.scroll = (x) => {
        this.appModel.toogle(x);
      };
      this.click = (e) => {
        let firstClassName = e.target.className.split(' ');
        if( this.appModel.matchClass(firstClassName, 'nav-menu-mobile') ){ // проверка на совпадения класса
          this.appView.enableMenu();
        }
        if( this.appModel.matchClass(firstClassName, 'nav-arrow') ){ // проверка на совпадения класса
          this.appModel.scrollTo(this.appModel.scr_h);
        }
        };

      this.init();
    };

function Events(elem, scroll, click) {
  let Events = this;
  this.x = 0;
  this.y = 0;
  this.elem = elem;
  this.scrollApp = scroll;
  this.clickApp = click;

  this.scroll = e => {
    this.y = Math.round(window.scrollY);
    this.scrollApp(this.y);
  };

  this.click = e => {
    this.clickApp(e);
  };

  this.elem.addEventListener('scroll', e => Events.scroll(e));

  this.elem.addEventListener('click', e => Events.click(e));

}

