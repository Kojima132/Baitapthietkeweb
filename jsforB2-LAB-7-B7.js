function nentanggame(){
    var x=document.getElementById("nentang");
    var y=document.getElementById("game");
    var z = x.value;
        if(z=='Windows'){
            var r ="https://store.steampowered.com/app/1369630/ENDER_LILIES_Quietus_of_the_Knights/";
            y.setAttribute("onclick", "window.location.href='" + r + "'");
        }else if(z=='Playstation'){
            var r ="https://store.playstation.com/ja-jp/concept/10001655/";
            y.setAttribute("onclick", "window.location.href='" + r + "'");
        }else if(z=='Nintendo'){
            var r ="https://www.nintendo.com/games/detail/ender-lilies-quietus-of-the-knights-switch/";
            y.setAttribute("onclick", "window.location.href='" + r + "'");
        }else if(z=='Xbox'){
            var r ="https://www.microsoft.com/en-us/p/ender-lilies-quietus-of-the-knights/9PLGRPRMTQJT?activetab=pivot:overviewtab";
            y.setAttribute("onclick", "window.location.href='" + r + "'");
        }
    }

