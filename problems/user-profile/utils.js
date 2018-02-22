/**
 * Gets image
 * @param {String} src
 */
function getImg(src) {
  
  return new Promise(function(resolve, reject) {
    var img = new Image();

    img.onload = function() {
      resolve(img);
    };

    img.onerror = function() {

      reject(Error('Image is not loaded'));
    };

    img.src = src;
  });
 
}

/**
 * getJSON data
 * @param {String} url
 * @return {Promise}
 */
function getJSON(url) {
  return get(url).then(JSON.parse);
}

/**
 * Gets data from server
 * wrapper on XMLhttpRequest
 * Returns promise
 * @param {String} url
 * @return {Promise}
 */
function get(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);

    xhr.onload = function() {
      if (xhr.status === 200) {
        return resolve(xhr.response);
      }

      reject(Error(xhr.statusText));
    };

    xhr.onerror = function() {
      reject(Error('Network error! Check your connection!'));
    };

    xhr.send();

  });
}