"use strict";
angular.module('browser-detection-service', [])
  .factory('BrowserDetectionService', [function(){
    var browserName = null;
    return {
      getBrowserName: function(){
        var userAgent = window.navigator.userAgent;
        if(browserName !== null){
          return browserName;
        }
        browserName = 'other';
        if(userAgent.match(/OPR/i) || userAgent.match(/Opera/i)){
          browserName = 'Opera';
        }
        else if(userAgent.match(/MSIE/i) || userAgent.match(/Trident/i)){
          browserName = 'Internet Explorer';
        }
        else if(userAgent.match(/firefox/i) && userAgent.match(/seamonkey/i) === null){
          browserName = 'Firefox';
        }
        else if(userAgent.match(/Safari/i) && userAgent.match(/Chrome/i) === null && userAgent.match(/Chromium/i) === null){
          browserName = 'Safari';
        }
        else if(userAgent.match(/Chrome/i) && userAgent.match(/Chromium/i) === null){
          browserName = 'Chrome';
        }
        else if(userAgent.match(/Chromium/i)){
          browserName = 'Chromium';
        }
        return browserName;
      },

      isIE: function(){
        return this.getBrowserName() === 'Internet Explorer';
      },

      isFirefox: function(){
        return this.getBrowserName() === 'Firefox';
      },

      isSafari: function(){
        return this.getBrowserName() === 'Safari';
      },

      isOpera: function(){
        return this.getBrowserName() === 'Opera';
      },

      isChrome: function(){
        return this.getBrowserName() === 'Chrome';
      },

      isChromium: function(){
        return this.getBrowserName() === 'Chromium';
      }
    };
  }]);
