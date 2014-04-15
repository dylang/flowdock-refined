var fs = require('fs');
var path = require('path');
var cp = require('cp');

var SOURCE_DIR = 'styles';
var DEST_DIR = path.join(process.env.HOME, '/Library/Application Support/Flowdock');

function link(filename) {
    var src = path.resolve(SOURCE_DIR, filename);
    var dest = path.join(DEST_DIR, filename);

    try {
        var destStat = fs.lstatSync(dest);
        if (destStat.isFile()){
            fs.renameSync(dest, dest + '.bak');
        }

        if (destStat.isSymbolicLink()){
            fs.unlinkSync(dest, dest + '.bak');
        }
    } catch (err) {
    }

    try {
        fs.symlinkSync(src, dest);
    } catch (err) {
        return false;
    }

    return true;
}

function userstyle(){
    if (link('userstyle.css') && link('refined.css')) {
        return true;
    }

    console.log('Do you have the latest Flowdock installed?');
    console.log('Check this dir: ', DEST_DIR);
    console.log('https://www.flowdock.com/download');

    return true;
}



function custom(cb) {
    var custom_src = path.resolve(SOURCE_DIR, 'custom.css');
    var custom_dest = path.join(DEST_DIR, 'custom.css');

    var customStat;

    try {
        customStat = fs.lstatSync(custom_dest);
    } catch (err) {

    }

    if (!customStat){
        cp(custom_src, custom_dest, cb);
    } else {
        cb();
    }
}


function complete() {
    console.log('\n\n ======  Install complete, refresh Flowdock using Command-R or restart the app.  ======\n\n');
}


if (userstyle()) {
    custom(complete);
}
