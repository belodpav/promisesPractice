var Photo = (function() {
  /**
   * @constructor
   * @param {Object} data 
   * @param {string} parentSelector 
   */
  function Photo(data) {
    var template = qs('#photo-template').innerText,
      photoTemplate = _.template(template);
    this._data = data;

    this._node = strToElement(photoTemplate(data));
    this._imgBox = qs('.photo__img-box', this._node);
  }

  // Public methods
  /**
   * Returns promise with loading image
   * @return {Promise}
   */
  Photo.prototype.load = function() {
    var that = this;   
    
    return new Promise(function (resolve, reject) {

      getImg(that._data.url)
        .then(function(img) {

          img.className += ' photo__img';
          that._imgBox.appendChild(img);

          resolve(that._node);
        })
        .catch(function() {
          reject();
          console.log('Error: Image ' + that._data.url + ' is not loaded.');
        });
    
    })
      .catch(function() {
        return null;
      });
  };

  return Photo;
})();