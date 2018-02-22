var gallery = {
  count: 0,
  loaded: 0,
  pos: 0,
  fetching: false,
  items: [],
  node: qs('.photos-list'),
  init: function(list) {
    this.count = list.length;
    this.items = list;
  },
  getPhoto: function() {
    var photo = new Photo(this.items[this.pos])
    
    this.pos++;
    
    return photo;
  },
  showPhotos: function(count) {
    var photos = [],
      that = this,
      loader = new Loader(),
      galleryElement = that.node;
  
    count = that.pos + count < that.count ? count : that.count - that.pos; 
    
    for (var i = 0; i < count; i++) {
      photos.push(this.getPhoto());
    }
    
    galleryElement.appendChild(loader.node);   

    that.fetching = true;

    Promise.all(photos.map( photo => photo.load() ))
      .then(function(items) {
        
        items.forEach(function(item) {
          if (item) {
            galleryElement.appendChild(item);
          }
        });

      })
      .then(function() {
        that.fetching = false;
        loader.remove();
      });
  

  }
};