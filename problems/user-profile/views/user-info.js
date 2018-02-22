var userInfo = {
  template: _.template(qs('#user-info').innerText),
  view: null,
  init: function(data) {
    this.view = strToElement(this.template(data));
    
    qs('.user-info').appendChild(this.view);
  }
};