//***************************************************************
//indexedDB
//{Object}, {data: dbName, objectStore: storeName, version: number}, the database info include db name, store name and db version.
//**************************************************
var IndexedDB = (function () {
    var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    var nameDB;
    var nameStore;
    var dbVersion;
    function IndexedDB (data) {
        var targetDB = {}; 
        nameStore = data.hasOwnProperty("objectStore") ? data.objectStore : "list";
        nameDB = data.hasOwnProperty("db") ? data.db : data;
        dbVersion = data.hasOwnProperty("version") ? data.version : "2";
        /*check feature*/
        if (!indexedDB) {
            console.log("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
            IndexedDB.prototype.onerror = function (msg) {
            };
            return;
        }
        /*init*/
        window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
        window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
        this.open();
        /*config*/
        /*
        targetDB.indexedDB = {};
        targetDB.indexedDB.open = function() {
            console.log("open targetDB...");
            request = indexedDB.open(nameDB, dbVersion);
            request.onsuccess = function(e) {
                console.log("success our DB: " + nameDB + "/" + nameStore + " is open and ready for work");
            }
            request.onupgradeneeded = function(e) {
                //You could add newItem object to the object store through IDBTransaction --> see more
                //Implement when create store
                //Implement when upgrade store version
                console.log("Going to upgrade our DB from version: "+ e.oldVersion + " to " + e.newVersion);

                db = targetDB.indexedDB.db;
                alert(db);
            }
            request.onfailure = function(e) {
                console.log("could not open our DB! Err: "+e);
            }
            request.onerror = function(e) {
                console.log(nameDB + ":Well... How should I put it? We have some issues with our DB! Err:" +e);
                console.log(nameDB + ":Well... How should I put it? We have some issues with our DB! Err:"+e);
            }
        }
        */
    }
    IndexedDB.prototype = {
        open : function () {
                   request = indexedDB.open(nameDB, dbVersion);
                   request.onupgradeneeded = function(e) {
                       //You could add newItem object to the object store through IDBTransaction --> see more
                       //Implement when create store
                       //Implement when upgrade store version
                       console.log("Going to upgrade our DB from version: "+ e.oldVersion + " to " + e.newVersion);
                   }
               },
        onerror: function () {
               },
        onfailure: function () {
               }
    }
    return IndexedDB;
}());
