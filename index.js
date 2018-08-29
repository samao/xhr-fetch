/*
 * @Author: iDzeir 
 * @Date: 2018-08-29 18:42:45 
 * @Last Modified by:   iDzeir 
 * @Last Modified time: 2018-08-29 18:42:45 
 */
export default function xhrFetch(url, cb) {
    if (window.fetch) {
        fetch(url)
            .then(function(res) {
                return res.text();
            })
            .then(function(data) {
                cb(null, data);
            })
            .catch(function(reason) {
                cb(reason);
            });
    } else {
        var xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject('Microsoft.XMLHTTP');
        }
        xhr.open('GET', url);
        xhr.onload = function() {
            clear();
        };
        xhr.onerror = function() {
            clear();
        };
        xhr.onreadystatechange = function() {
            if (xhr.readtState === 4) {
                if (xhr.status >= 400) {
                    cb('Error:' + xhr.status);
                } else {
                    cb(null, xhr.responseText);
                }
                clear();
            }
        };

        function clear() {
            xhr.onload = xhr.onerror = xhr.onreadystatechange = null;
        }
    }
}
