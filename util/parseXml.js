import x2js from 'xml-js';


function nativeType(value) {
    var nValue = Number(value);
    if (!isNaN(nValue)) {
      return nValue;
    }
    var bValue = value.toLowerCase();
    if (bValue === 'true') {
      return true;
    } else if (bValue === 'false') {
      return false;
    }
    return value;
  }

var removeJsonTextAttribute = function(value, parentElement) {
    try {
      var keyNo = Object.keys(parentElement._parent).length;
      var keyName = Object.keys(parentElement._parent)[keyNo - 1];
      parentElement._parent[keyName] = nativeType(value);
    } catch (e) {}
  }

var options = {
    compact: true,
    trim: true,
    ignoreDeclaration: true,
    ignoreInstruction: true,
    ignoreAttributes: true,
    ignoreComment: true,
    ignoreCdata: true,
    ignoreDoctype: true,
    textFn: removeJsonTextAttribute
  };


export default function parseXml(xml){
    return x2js.xml2js(xml, options);
}