var Loader = function() {
  var loader = document.createElement('div'),
    spinner = document.createElement('div');
  
  loader.className = 'loader';
  spinner.className = 'loader__spinner';

  loader.appendChild(spinner);
 
  return {
    node: loader,
    remove: function() {
      loader.remove();
    }
  };

};
