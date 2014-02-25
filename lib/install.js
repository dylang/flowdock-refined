var fs = require('fs');
var path = require('path');
var cp = require('cp');

const SOURCE_DIR = 'styles';
const DEST_DIR = path.join(process.env.HOME, '/Library/Application Support/Flowdock');

function userstyle(){
    const userstyle_src = path.resolve(SOURCE_DIR, 'userstyle.css');
    const userstyle_dest = path.join(DEST_DIR, 'userstyle.css');
    //console.log(userstyle_src, '->' , userstyle_dest);

    try {
        var destStat = fs.lstatSync(userstyle_dest);
        if (destStat.isFile()){
            fs.renameSync(userstyle_dest, userstyle_dest + '.bak');
        }

        if (destStat.isSymbolicLink()){
            fs.unlinkSync(userstyle_dest, userstyle_dest + '.bak');
        }
    } catch (err) {
    }

    try {
        fs.symlinkSync(userstyle_src, userstyle_dest);
    } catch (err) {
        console.log('Do you even have Flowdock installed?');
        return false;
    }

    return true;
}

function custom() {
    const custom_src = path.resolve(SOURCE_DIR, 'custom.css');
    const custom_dest = path.join(DEST_DIR, 'custom.css');

    var customStat;

    try {
        customStat = fs.lstatSync(custom_dest);
    } catch (err) {

    }

    if (!customStat){
        cp(custom_src, custom_dest, complete);
    } else {
        complete();
    }
}

function complete() {
    console.log('\n\n ======  Install complete, refresh Flowdock using Command-R or restart the app.  ======\n\n');

}



userstyle() && custom();
