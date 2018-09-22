

function iam() {
    var elem = document.getElementById("center");
    var what = ['a Veteran' , 'an Engineer' , 'an Economist'
                , 'a Teacher', 'a Scholar', 'an Econometrician', 'an Inventor'
                , 'a Consultant'];
    var pos = 0;
    var id = setInterval(frame, 300);
    function frame() {
        if (pos == 8) {
            /*console.log("I am Eric Penner");*/
            elem.innerHTML = "Hi, I am Eric Penner";
            clearInterval(id);
        } else {
            /*console.log("I am " + what[pos]);*/
            elem.innerHTML = "Hi, I am " + what[pos];
            pos++;
        }
    }
}


function iam_out() {
    iam();
    var cnt = 0;
    var id2 = setInterval(out_frame,10000);
    function out_frame() {
        if (cnt == 2) {
            clearInterval(id2);
        }else{
            iam()
            cnt++;
        }
    }
}

iam_out()
