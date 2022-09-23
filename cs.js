function raf(){
    requestAnimationFrame(raf);
    let btns = document.getElementsByClassName('ytp-miniplayer-close-button');
    if(btns && btns.length){
        [...btns].forEach(btn => btn.click());
    }
}
raf();